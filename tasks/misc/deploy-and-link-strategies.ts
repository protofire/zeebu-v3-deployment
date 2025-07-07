import { task } from "hardhat/config";
import { isAddress, parseUnits } from "ethers/lib/utils";
import { IInterestRateStrategyParams } from "../../helpers/types";

function getReservesConfigModule(market: string) {
  const allowedMarkets = ["aave", "polygon", "avalanche", "fantom", "arbitrum", "harmony", "optimistic", "base", "test"];
  if (!allowedMarkets.includes(market)) {
    throw new Error(`Unknown market: ${market}`);
  }
  return `../../markets/${market}/reservesConfigs`;
}

// Usage:
// npx hardhat deploy-and-link-strategies --symbol <SYMBOL> --market <MARKET> --token <TOKEN_ADDRESS> --provider <PROVIDER_ADDRESS> --network <NETWORK> --configurator <CONFIGURATOR_ADDRESS>
//
// Example:
// npx hardhat deploy-and-link-strategies --symbol USDT --market aave --token 0xdac17f958d2ee523a2206206994597c13d831ec7 --provider 0xb3837043E2b76Cf4E6920fB25179E59d943B70b7 --network main --configurator 0x12A49254C83C97B4302C9d9c1aD8aFf2EF92471C

const strategy: IInterestRateStrategyParams = {
  name: "rateStrategyVolatileOne",
  optimalUsageRatio: parseUnits("0.45", 27).toString(),
  baseVariableBorrowRate: parseUnits("0.051", 27).toString(),
  variableRateSlope1: parseUnits("0.07", 27).toString(),
  variableRateSlope2: parseUnits("3", 27).toString(),
  stableRateSlope1: parseUnits("0.07", 27).toString(),
  stableRateSlope2: parseUnits("3", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};
task("deploy-and-link-strategies", "Deploys interest rate strategy and links it to a token as per reservesConfigs for a given symbol")
  .addParam("symbol", "The token symbol to deploy and link the strategy for")
  .addParam("market", "The market to use reservesConfigs from (e.g. aave, polygon, etc.)")
  .addParam("token", "The address of the token to link the strategy to")
  .addParam("provider", "The address of the PoolAddressesProvider")
  .addParam("configurator", "The address of the PoolConfigurator")
  .setAction(async ({ symbol, token, provider, configurator}, hre) => {
    if (!isAddress(token)) {
      console.error(`Invalid token: ${token}`);
      return;
    }
    if (!isAddress(provider)) {
      console.error(`Invalid provider: ${provider}`);
      return;
    }
    if (!isAddress(configurator)) {
      console.error(`Invalid configurator: ${configurator}`);
      return;
    }
    // Import reservesConfigs and get strategy
    const reservesConfigModulePath = getReservesConfigModule("aave");
    const reservesConfigs = await import(reservesConfigModulePath);
    const strategyKey = `strategy${symbol}`;
    if (!(strategyKey in reservesConfigs)) {
      console.error(`Strategy '${strategyKey}' not found in ${reservesConfigModulePath}.`);
      return;
    }
    const reserveParams = reservesConfigs[strategyKey];
    if (!reserveParams || !reserveParams.strategy) {
      console.error(`No 'strategy' field found in ${strategyKey}.`);
      return;
    }
    // Validate required fields for DefaultReserveInterestRateStrategy
    const requiredFields = [
      "optimalUsageRatio",
      "baseVariableBorrowRate",
      "variableRateSlope1",
      "variableRateSlope2",
      "stableRateSlope1",
      "stableRateSlope2",
      "baseStableRateOffset",
      "stableRateExcessOffset",
      "optimalStableToTotalDebtRatio"
    ];
    for (const field of requiredFields) {
      if (!(field in strategy)) {
        console.error(`Missing '${field}' in strategy for ${symbol}`);
        return;
      }
    }
    const [deployer] = await hre.ethers.getSigners();
    const poolConfigurator = await hre.ethers.getContractAt("PoolConfigurator", configurator, deployer);
    // Deploy strategy with 10 arguments
    const StrategyFactory = await hre.ethers.getContractFactory("DefaultReserveInterestRateStrategy", deployer);
    const deployedStrategy = await StrategyFactory.deploy(
      provider, // address provider
      strategy.optimalUsageRatio,
      strategy.baseVariableBorrowRate,
      strategy.variableRateSlope1,
      strategy.variableRateSlope2,
      strategy.stableRateSlope1,
      strategy.stableRateSlope2,
      strategy.baseStableRateOffset,
      strategy.stableRateExcessOffset,
      strategy.optimalStableToTotalDebtRatio
    );
    await deployedStrategy.deployed();
    console.log(`${symbol}: Deployed strategy at ${deployedStrategy.address}`);
    // Link to token
    const tx = await poolConfigurator.setReserveInterestRateStrategyAddress(token, deployedStrategy.address);
    await tx.wait();
    console.log(`${symbol}: Linked strategy to token ${token}`);
    // Print baseVariableBorrowRate using the get-base-variable-borrow-rate task
    await hre.run("get-base-variable-borrow-rate", { strategy: deployedStrategy.address });
    console.log("Done.");
  }); 