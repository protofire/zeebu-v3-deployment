import { task } from "hardhat/config";
import { ethers } from "hardhat";
import dotenv from "dotenv";
dotenv.config();

// Usage: npx hardhat update-AaveOracle --network <network> --asset <asset-address> --source <source-address>

const aaveOracleAddresses: { [network: string]: string } = {
  baseSepolia: "0xa4145d8c5A6Dac1882268F67dc71f514666052B2",
  sepolia: "0x67B6e323248945e76e17E2cC8833E2C8C81531cb",
  bscTestnet: "0xD01b09FF17F93671ab39F430298C3c35DF57C168",
};

task("update-AaveOracle", "Update the price source (aggregator) for an asset in the Aave V3 Oracle")
  .addParam("asset", "The address of the asset to update the price source for")
  .addParam("source", "The new price source (aggregator) address for the asset")
  .setAction(async ({ asset, source }, hre) => {
    if (!ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }
    if (!ethers.utils.isAddress(source)) {
      throw new Error("Invalid source address provided.");
    }
    const [signer] = await hre.ethers.getSigners();
    const network = hre.network.name;
    const AAVE_ORACLE_ADDRESS = aaveOracleAddresses[network];
    if (!AAVE_ORACLE_ADDRESS || !ethers.utils.isAddress(AAVE_ORACLE_ADDRESS)) {
      throw new Error(`AaveOracle address for network ${network} is not set in aaveOracleAddresses map.`);
    }
    const aaveOracle = await ethers.getContractAt("AaveOracle", AAVE_ORACLE_ADDRESS, signer);
    console.log(`Updating price source for asset: ${asset} to new source: ${source} on network: ${network}`);
    const tx = await aaveOracle.setAssetSources([asset], [source]);
    await tx.wait();
    console.log(`Price source for asset ${asset} successfully updated to ${source} on ${network}.`);
  });
