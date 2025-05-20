import { task } from "hardhat/config";
import { ethers } from "hardhat";
import dotenv from "dotenv";
dotenv.config();
import { loadPoolConfig, ConfigNames, getReserveAddresses } from "../../helpers/market-config-helpers";
import { MARKET_NAME } from "../../helpers/env";
import { eNetwork } from "../../helpers/types";

// Usage:
// 1. Add your new asset to the reservesConfigs.ts and ReserveAssets in your market config (e.g., markets/aave/index.ts).
// 2. Run:
// npx hardhat deploy-new-asset-v3 --network <network> --symbol <SYMBOL>

task("deploy-new-asset-v3", "Deploy and initialize a new asset (reserve) in Aave V3 using config")
  .addParam("symbol", "The symbol of the asset (reserve) to add, e.g. DAI")
  .setAction(async ({ symbol }, hre) => {
    const network = (process.env.FORK ? process.env.FORK : hre.network.name) as eNetwork;
    const poolConfig = loadPoolConfig(MARKET_NAME as ConfigNames);
    const reservesConfig = poolConfig.ReservesConfig;
    const reserveAssets = await getReserveAddresses(poolConfig, network);

    if (!reservesConfig[symbol]) {
      throw new Error(`Reserve config for symbol ${symbol} not found. Make sure it is added to your reservesConfigs.ts and referenced in your market config (e.g., markets/aave/index.ts).`);
    }
    if (!reserveAssets[symbol]) {
      throw new Error(`Reserve asset address for symbol ${symbol} not found. Make sure it is added to ReserveAssets in your market config (e.g., markets/aave/index.ts).`);
    }

    const reserveParams = reservesConfig[symbol];
    const asset = reserveAssets[symbol];
    const POOL_ADDRESSES_PROVIDER_ADDRESS = process.env.POOL_ADDRESSES_PROVIDER_ADDRESS || "<POOL_ADDRESSES_PROVIDER_ADDRESS_HERE>";
    if (!ethers.utils.isAddress(POOL_ADDRESSES_PROVIDER_ADDRESS)) {
      throw new Error("Invalid PoolAddressesProvider address. Set POOL_ADDRESSES_PROVIDER_ADDRESS in your .env file.");
    }
    if (!ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided in config.");
    }
    const [signer] = await hre.ethers.getSigners();
    console.log(`Using signer: ${signer.address}`);
    const poolAddressesProvider = await ethers.getContractAt("PoolAddressesProvider", POOL_ADDRESSES_PROVIDER_ADDRESS, signer);
    const poolConfiguratorAddress = await poolAddressesProvider.getPoolConfigurator();
    if (!ethers.utils.isAddress(poolConfiguratorAddress)) {
      throw new Error("Invalid PoolConfigurator address fetched from PoolAddressesProvider.");
    }
    const poolConfigurator = await ethers.getContractAt("PoolConfigurator", poolConfiguratorAddress, signer);
    // You may need to fetch or deploy the correct aToken, debt token, and strategy addresses here
    // For simplicity, this example assumes generic AToken and strategy addresses are available in config or .env
    const aTokenImpl = process.env.ATOKEN_IMPL || "<ATOKEN_IMPL_ADDRESS_HERE>";
    const stableDebtTokenImpl = process.env.STABLE_DEBT_TOKEN_IMPL || "<STABLE_DEBT_TOKEN_IMPL_ADDRESS_HERE>";
    const variableDebtTokenImpl = process.env.VARIABLE_DEBT_TOKEN_IMPL || "<VARIABLE_DEBT_TOKEN_IMPL_ADDRESS_HERE>";
    // The interest rate strategy address must be provided or deployed separately
    const interestRateStrategyAddress = process.env.INTEREST_RATE_STRATEGY || "<INTEREST_RATE_STRATEGY_ADDRESS_HERE>";
    const treasury = process.env.TREASURY || "<TREASURY_ADDRESS_HERE>";
    const incentivesController = process.env.INCENTIVES_CONTROLLER || "<INCENTIVES_CONTROLLER_ADDRESS_HERE>";
    const decimals = reserveParams.reserveDecimals;
    const name = symbol;
    const symbolName = symbol;
    console.log(`Deploying and initializing new reserve for asset: ${symbol} at ${asset}`);
    // NOTE: The actual PoolConfigurator ABI for V3 may require a different function or params for adding a reserve
    // This is a placeholder and should be updated to match your PoolConfigurator's ABI
    if (!poolConfigurator.initReserves) {
      throw new Error("This script assumes PoolConfigurator has an initReserves function. Please update the script to match your PoolConfigurator ABI.");
    }
    // Example: await poolConfigurator.initReserves([{ ...params }]);
    // You may need to construct the correct params object here
    // For now, just log the config for manual use
    console.log({
      asset,
      aTokenImpl,
      stableDebtTokenImpl,
      variableDebtTokenImpl,
      decimals,
      interestRateStrategyAddress,
      treasury,
      incentivesController,
      name,
      symbolName
    });
    // Uncomment and adapt the following when you have the correct ABI and params:
    // const tx = await poolConfigurator.initReserves([{ ...params }]);
    // await tx.wait();
    // console.log(`Reserve for asset ${symbol} successfully added.`);
  });
