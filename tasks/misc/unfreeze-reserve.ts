import { task } from "hardhat/config";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";

// Usage:
// npx hardhat unfreeze-reserve --network <network> --asset <asset-address>

task("unfreeze-reserve", "Unfreeze a reserve in the Aave V3 protocol")
  .addParam("asset", "The address of the asset (reserve) to unfreeze")
  .setAction(async ({ asset }, hre) => {
    if (!hre.ethers.utils.isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }
    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
      await hre.ethers.getSigner(poolAdmin)
    );
    console.log(`Unfreezing reserve for asset: ${asset}`);
    const tx = await poolConfigurator.setReserveFreeze(asset, false);
    await tx.wait();
    console.log(`Reserve for asset ${asset} successfully unfrozen.`);
  });
