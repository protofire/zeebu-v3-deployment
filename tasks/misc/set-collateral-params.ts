import { task } from "hardhat/config";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";
import { loadPoolConfig, ConfigNames, getReserveAddresses } from "../../helpers/market-config-helpers";
import { MARKET_NAME } from "../../helpers/env";
import { eNetwork } from "../../helpers/types";
import { isAddress } from "ethers/lib/utils";

/**
 * Update collateral parameters for an asset in the protocol.
 *
 * Usage:
 *   1. npx hardhat set-collateral-params --network <network> --symbol <SYMBOL> --ltv <LTV> --threshold <THRESHOLD> --bonus <BONUS>
 *   2. npx hardhat set-collateral-params --network <network> --token <TOKEN_ADDRESS> --ltv <LTV> --threshold <THRESHOLD> --bonus <BONUS>
 *
 * Options:
 *   --symbol      (optional) Asset symbol (e.g. ZBU). Looks up the address from the config for the selected network.
 *   --token       (optional) Asset address. If set, takes priority over symbol.
 *   --ltv         (required) New Loan-to-Value ratio (e.g. 8000 for 80%).
 *   --threshold   (required) New liquidation threshold (e.g. 8250 for 82.5%).
 *   --bonus       (required) New liquidation bonus (e.g. 10500 for 5% bonus).
 *   --network     (required) Target network (e.g. main, sepolia, base-sepolia, etc.).
 *
 * Examples:
 *   npx hardhat set-collateral-params --network main --symbol ZBU --ltv 7500 --threshold 7500 --bonus 10500
 *   npx hardhat set-collateral-params --network main --token 0xe77f6acd24185e149e329c1c0f479201b9ec2f4b --ltv 7500 --threshold 7500 --bonus 10500
 *
 * These commands will set:
 *   - LTV: 75%
 *   - Liquidation Threshold: 75%
 *   - Liquidation Bonus: 5%
 */
task("set-collateral-params", "Update LTV, liquidation threshold, and bonus for a reserve")
  .addOptionalParam("symbol", "Asset symbol (resolves address from config)")
  .addOptionalParam("token", "Asset address (overrides symbol)")
  .addParam("ltv", "Loan-to-Value, e.g. 8000 for 80%")
  .addParam("threshold", "Liquidation threshold, e.g. 8250 for 82.5%")
  .addParam("bonus", "Liquidation bonus, e.g. 10500 for 5% bonus")
  .setAction(async ({ symbol, token, ltv, threshold, bonus }, hre) => {
    let asset = token;
    if (!asset && symbol) {
      const network = hre.network.name as eNetwork;
      const poolConfig = loadPoolConfig(MARKET_NAME as ConfigNames);
      const reserveAssets = await getReserveAddresses(poolConfig, network);
      asset = reserveAssets[symbol];
      if (!asset) throw new Error(`No address for symbol '${symbol}' on network '${network}'.`);
    }
    if (!asset) throw new Error("Provide either --token or --symbol.");
    if (!isAddress(asset)) throw new Error(`Invalid asset address: ${asset}`);

    const ltvNum = Number(ltv);
    const thresholdNum = Number(threshold);
    const bonusNum = Number(bonus);
    if ([ltvNum, thresholdNum, bonusNum].some((v) => !Number.isInteger(v) || v <= 0)) {
      throw new Error("LTV, threshold, and bonus must be positive integers.");
    }

    const { poolAdmin } = await hre.getNamedAccounts();
    const signer = await hre.ethers.getSigner(poolAdmin);
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(signer);

    console.log(`\nConfiguring collateral params for: ${asset}`);
    console.log(`  LTV: ${ltvNum}`);
    console.log(`  Liquidation Threshold: ${thresholdNum}`);
    console.log(`  Liquidation Bonus: ${bonusNum}`);
 
    try {
      const tx = await poolConfigurator.configureReserveAsCollateral(asset, ltvNum, thresholdNum, bonusNum);
      console.log(`  Tx sent: ${tx.hash}`);
      await tx.wait();
      console.log("Collateral parameters updated.");
    } catch (err) {
      console.error("Failed to update collateral params:", err);
      process.exit(1);
    }
  }); 