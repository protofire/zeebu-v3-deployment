import { task } from "hardhat/config";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";
import { loadPoolConfig, ConfigNames, getReserveAddresses } from "../../helpers/market-config-helpers";
import { MARKET_NAME } from "../../helpers/env";
import { eNetwork } from "../../helpers/types";
import { isAddress } from "ethers/lib/utils";

// Usage: npx hardhat set-interest-rate-strategy --network <network> --symbol <SYMBOL> --token <token-address> --strategy <strategy-address>

task("set-interest-rate-strategy", "Set the interest rate strategy for a reserve in the Aave V3 protocol")
  .addOptionalParam("symbol", "Asset symbol, resolves token address from config if provided")
  .addOptionalParam("token", "The address of the asset (reserve) to update")
  .addParam("strategy", "The new interest rate strategy contract address")
  .setAction(async ({ symbol, token, strategy }, hre) => {
    let asset = token;
    if (!asset && symbol) {
      const network = (process.env.FORK ? process.env.FORK : hre.network.name) as eNetwork;
      const poolConfig = loadPoolConfig(MARKET_NAME as ConfigNames);
      const reserveAssets = await getReserveAddresses(poolConfig, network);
      asset = reserveAssets[symbol];
      if (!asset) {
        throw new Error(`Could not resolve token address for symbol ${symbol} on network ${network}.`);
      }
    }
    if (!asset) {
      throw new Error("You must provide either --token or --symbol (with config entry) to resolve the asset address.");
    }
    if (!isAddress(asset)) {
      throw new Error("Invalid asset address provided or resolved.");
    }
    if (!isAddress(strategy)) {
      throw new Error("Invalid strategy address provided.");
    }
    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
      await hre.ethers.getSigner(poolAdmin)
    );
    console.log(`Setting interest rate strategy for asset: ${asset} to: ${strategy}`);
    const tx = await poolConfigurator.setReserveInterestRateStrategyAddress(asset, strategy);
    await tx.wait();
    console.log(`Interest rate strategy for asset ${asset} successfully updated to ${strategy}.`);
  });
