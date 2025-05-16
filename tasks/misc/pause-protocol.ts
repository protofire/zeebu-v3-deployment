import { task } from "hardhat/config";
import { ethers } from "hardhat";
import dotenv from "dotenv";
dotenv.config();

// Usage:
// npx hardhat pause-protocol --network <network> --pause <true|false>

task("pause-protocol", "Pause or unpause the protocol (Aave V3)")
  .addParam("pause", "Boolean value to pause (true) or unpause (false) the protocol")
  .setAction(async ({ pause }, hre) => {
    const POOL_ADDRESSES_PROVIDER_ADDRESS = process.env.POOL_ADDRESSES_PROVIDER_ADDRESS || "<POOL_ADDRESSES_PROVIDER_ADDRESS_HERE>";
    if (!ethers.utils.isAddress(POOL_ADDRESSES_PROVIDER_ADDRESS)) {
      throw new Error("Invalid PoolAddressesProvider address. Set POOL_ADDRESSES_PROVIDER_ADDRESS in your .env file.");
    }
    const [signer] = await hre.ethers.getSigners();
    console.log(`Using signer: ${signer.address}`);
    const poolAddressesProvider = await ethers.getContractAt("PoolAddressesProvider", POOL_ADDRESSES_PROVIDER_ADDRESS, signer);
    const poolConfiguratorAddress = await poolAddressesProvider.getPoolConfigurator();
    if (!ethers.utils.isAddress(poolConfiguratorAddress)) {
      throw new Error("Invalid PoolConfigurator address fetched from PoolAddressesProvider.");
    }
    const poolConfigurator = await ethers.getContractAt("PoolConfigurator", poolConfiguratorAddress, signer);
    const shouldPause = pause === "true";
    console.log(`${shouldPause ? "Pausing" : "Unpausing"} the protocol...`);
    const tx = await poolConfigurator.setPoolPause(shouldPause);
    await tx.wait();
    console.log(`Protocol successfully ${shouldPause ? "paused" : "unpaused"}.`);
  });
