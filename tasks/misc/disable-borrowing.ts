import { task } from "hardhat/config";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";

// Usage:
// npx hardhat disable-borrowing --network <network> --asset <asset-address>

task("disable-borrowing", "Disable borrowing for a reserve in the Aave V3 protocol")
  .addParam("asset", "The address of the asset (reserve) to disable borrowing for")
  .addParam("pool", "The address of the pool to disable borrowing for")
  .setAction(async ({ asset, pool }, hre) => {
    if (!hre.ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }

    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = pool
      ? (await hre.ethers.getContractAt('IPoolConfigurator', pool)).connect(
        await hre.ethers.getSigner(poolAdmin)
      )
      : (await getPoolConfiguratorProxy()).connect(
        await hre.ethers.getSigner(poolAdmin)
      );

    console.log(`Disabling borrowing for asset: ${asset}`);
    const tx = await poolConfigurator.setReserveBorrowing(asset, false);
    console.log(`Transaction hash: ${tx.hash}`);
    await tx.wait();
    console.log(`Borrowing for asset ${asset} successfully disabled.`);
  });
