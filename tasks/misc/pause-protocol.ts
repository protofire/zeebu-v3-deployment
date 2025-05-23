import { task } from "hardhat/config";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";

// Usage:
// npx hardhat pause-protocol --network <network> --pause <true|false>

task("pause-protocol", "Pause or unpause the protocol (Aave V3)")
  .addParam("pause", "Boolean value to pause (true) or unpause (false) the protocol")
  .setAction(async ({ pause }, hre) => {
    const { poolAdmin } = await hre.getNamedAccounts();
    const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
      await hre.ethers.getSigner(poolAdmin)
    );
    const shouldPause = pause === "true";
    console.log(`${shouldPause ? "Pausing" : "Unpausing"} the protocol...`);
    const tx = await poolConfigurator.setPoolPause(shouldPause);
    await tx.wait();
    console.log(`Protocol successfully ${shouldPause ? "paused" : "unpaused"}.`);
  });
