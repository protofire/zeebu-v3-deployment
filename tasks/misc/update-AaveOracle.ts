import { task } from "hardhat/config";
import { ethers } from "hardhat";
import dotenv from "dotenv";
dotenv.config();

// Usage:
// npx hardhat update-AaveOracle --network <network> --asset <asset-address> --oracle <oracle-address>

task("update-AaveOracle", "Update the price oracle address for an asset in the Aave V3 protocol")
  .addParam("asset", "The address of the asset to update the oracle for")
  .addParam("oracle", "The new oracle address for the asset")
  .setAction(async ({ asset, oracle }, hre) => {
    if (!ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }
    if (!ethers.utils.isAddress(oracle)) {
      throw new Error("Invalid oracle address provided.");
    }
    const [signer] = await hre.ethers.getSigners();
    const AAVE_ORACLE_ADDRESS = process.env.AAVE_ORACLE_ADDRESS || "<AAVE_ORACLE_ADDRESS_HERE>";
    if (!ethers.utils.isAddress(AAVE_ORACLE_ADDRESS)) {
      throw new Error("Invalid AaveOracle address. Set AAVE_ORACLE_ADDRESS in your .env file.");
    }
    const aaveOracle = await ethers.getContractAt("AaveOracle", AAVE_ORACLE_ADDRESS, signer);
    console.log(`Updating oracle for asset: ${asset} to new oracle: ${oracle}`);
    const tx = await aaveOracle.setAssetSources([asset], [oracle]);
    await tx.wait();
    console.log(`Oracle for asset ${asset} successfully updated to ${oracle}.`);
  });
