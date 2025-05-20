import { task } from "hardhat/config";
import { ethers } from "hardhat";
import dotenv from "dotenv";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";
dotenv.config();

// Usage:
// npx hardhat freeze-reserve --network <network> --asset <asset-address>

task("freeze-reserve", "Freeze a reserve in the Aave V3 protocol")
  .addParam("asset", "The address of the asset (reserve) to freeze")
  .setAction(async ({ asset }, hre) => {
    const POOL_ADDRESSES_PROVIDER_ADDRESS = process.env.POOL_ADDRESSES_PROVIDER_ADDRESS || "<POOL_ADDRESSES_PROVIDER_ADDRESS_HERE>";
    if (!ethers.utils.isAddress(POOL_ADDRESSES_PROVIDER_ADDRESS)) {
      throw new Error("Invalid PoolAddressesProvider address. Set POOL_ADDRESSES_PROVIDER_ADDRESS in your .env file.");
    }
    if (!ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }
    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
      await hre.ethers.getSigner(poolAdmin)
    );
    console.log(`Freezing reserve for asset: ${asset}`);
    const tx = await poolConfigurator.setReserveFreeze(asset, true);
    await tx.wait();
    console.log(`Reserve for asset ${asset} successfully frozen.`);
  });
