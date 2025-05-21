import { task } from "hardhat/config";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";

// Usage:
// npx hardhat activate-reserve --network <network> --asset <asset-address>

task("activate-reserve", "Activate a reserve in the Aave V3 protocol")
  .addParam("asset", "The address of the asset (reserve) to activate")
  .setAction(async ({ asset }, hre) => {
    if (!hre.ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }
    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
      await hre.ethers.getSigner(poolAdmin)
    );
    console.log(`Activating reserve for asset: ${asset}`);
    const tx = await poolConfigurator.setReserveActive(asset, true);
    await tx.wait();
    console.log(`Reserve for asset ${asset} successfully activated.`);
  });
