import { task } from "hardhat/config";
import { ethers } from "hardhat";
import { loadPoolConfig, ConfigNames, getReserveAddresses } from "../../helpers/market-config-helpers";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";
import { getTreasuryAddress } from "../../helpers/market-config-helpers";
import { MARKET_NAME } from "../../helpers/env";
import { eNetwork } from "../../helpers/types";

// Usage:
// npx hardhat add-asset-v3 --network <network> --symbol <SYMBOL>

task("add-asset-v3", "Add a new asset (reserve) to the Aave V3 protocol using config and best practices")
  .addParam("symbol", "Asset symbol, needs to have configuration ready")
  .setAction(async ({ symbol }, hre) => {
    const network = (process.env.FORK ? process.env.FORK : hre.network.name) as eNetwork;
    const poolConfig = loadPoolConfig(MARKET_NAME as ConfigNames);
    const reservesConfig = poolConfig.ReservesConfig;
    const reserveAssets = await getReserveAddresses(poolConfig, network);

    if (!reservesConfig[symbol]) {
      throw new Error(`Reserve config for symbol ${symbol} not found. Make sure it is added to your reservesConfigs.ts and referenced in your market config.`);
    }
    if (!reserveAssets[symbol]) {
      throw new Error(`Reserve asset address for symbol ${symbol} not found. Make sure it is added to ReserveAssets in your market config.`);
    }
    const asset = reserveAssets[symbol];
    if (!ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided in config.");
    }
    const reserveParams = reservesConfig[symbol];
    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
      await hre.ethers.getSigner(poolAdmin)
    );
    // Try to fetch implementations and addresses from deployments first
    let aTokenImpl, stableDebtTokenImpl, variableDebtTokenImpl, interestRateStrategyAddress;
    try { aTokenImpl = (await hre.deployments.get("AToken")).address; } catch { throw new Error("AToken implementation not found in deployments."); }
    try { stableDebtTokenImpl = (await hre.deployments.get("StableDebtToken")).address; } catch { throw new Error("StableDebtToken implementation not found in deployments."); }
    try { variableDebtTokenImpl = (await hre.deployments.get("VariableDebtToken")).address; } catch { throw new Error("VariableDebtToken implementation not found in deployments."); }
    try { interestRateStrategyAddress = (await hre.deployments.get("DefaultReserveInterestRateStrategy")).address; } catch { throw new Error("DefaultReserveInterestRateStrategy not found in deployments."); }
    let treasury;
    try { treasury = await getTreasuryAddress(poolConfig, network); } catch { throw new Error("Treasury address not found in config."); }
    // Use AddressZero for incentivesController (or update if you have a config helper for this)
    const incentivesController = ethers.constants.AddressZero;
    const decimals = reserveParams.reserveDecimals;
    const name = symbol;
    const symbolName = symbol;
    // Construct params for PoolConfigurator.initReserves (matching Aave V3 ABI)
    const initParams = [{
      aTokenImpl,
      stableDebtTokenImpl,
      variableDebtTokenImpl,
      underlyingAssetDecimals: decimals,
      interestRateStrategyAddress,
      underlyingAsset: asset,
      treasury,
      incentivesController,
      underlyingAssetName: symbol,
      aTokenName: `Aave ${poolConfig.ATokenNamePrefix} ${symbol}`,
      aTokenSymbol: `a${poolConfig.SymbolPrefix}${symbol}`,
      variableDebtTokenName: `Aave ${poolConfig.VariableDebtTokenNamePrefix} Variable Debt ${symbol}`,
      variableDebtTokenSymbol: `variableDebt${poolConfig.SymbolPrefix}${symbol}`,
      stableDebtTokenName: `Aave ${poolConfig.StableDebtTokenNamePrefix} Stable Debt ${symbol}`,
      stableDebtTokenSymbol: `stableDebt${poolConfig.SymbolPrefix}${symbol}`,
      params: "0x10"
    }];
    console.log("Adding new reserve with params:", initParams);
    const tx = await poolConfigurator.initReserves(initParams);
    await tx.wait();
    console.log(`Reserve for asset ${symbol} successfully added.`);
  });
