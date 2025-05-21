import { task } from "hardhat/config";
import { ethers } from "hardhat";
import dotenv from "dotenv";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";
dotenv.config();

// Usage:
// npx hardhat enable-borrowing --network <network> --asset <asset-address>

task("enable-borrowing", "Enable borrowing for a reserve in the Aave V3 protocol")
  .addParam("asset", "The address of the asset (reserve) to enable borrowing for")
  .setAction(async ({ asset }, hre) => {
    if (!ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }
    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
      await hre.ethers.getSigner(poolAdmin)
    );
    console.log(`Enabling borrowing for asset: ${asset}`);
    const tx = await poolConfigurator.setReserveBorrowing(asset, true);
    await tx.wait();
    console.log(`Borrowing for asset ${asset} successfully enabled.`);
  });
