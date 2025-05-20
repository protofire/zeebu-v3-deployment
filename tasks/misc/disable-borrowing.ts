import { task } from "hardhat/config";
import { ethers } from "hardhat";
import dotenv from "dotenv";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";
dotenv.config();

// Usage:
// npx hardhat disable-borrowing --network <network> --asset <asset-address>

task("disable-borrowing", "Disable borrowing for a reserve in the Aave V3 protocol")
  .addParam("asset", "The address of the asset (reserve) to disable borrowing for")
  .setAction(async ({ asset }, hre) => {
    const POOL_ADDRESSES_PROVIDER_ADDRESS = process.env.POOL_ADDRESSES_PROVIDER_ADDRESS || "<POOL_ADDRESSES_PROVIDER_ADDRESS_HERE>";
    if (!ethers.utils.isAddress(POOL_ADDRESSES_PROVIDER_ADDRESS)) {
      throw new Error("Invalid PoolAddressesProvider address. Set POOL_ADDRESSES_PROVIDER_ADDRESS in your .env file.");
    }
    if (!ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }
    const [signer] = await hre.ethers.getSigners();
    console.log(`Using signer: ${signer.address}`);
    const poolAddressesProvider = await ethers.getContractAt("PoolAddressesProvider", POOL_ADDRESSES_PROVIDER_ADDRESS, signer);
    const poolConfiguratorAddress = await poolAddressesProvider.getPoolConfigurator();
    if (!ethers.utils.isAddress(poolConfiguratorAddress)) {
      throw new Error("Invalid PoolConfigurator address fetched from PoolAddressesProvider.");
    }
    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
      await hre.ethers.getSigner(poolAdmin)
    );
    console.log(`Disabling borrowing for asset: ${asset}`);
    const tx = await poolConfigurator.setReserveBorrowing(asset, false);
    await tx.wait();
    console.log(`Borrowing for asset ${asset} successfully disabled.`);
  });
