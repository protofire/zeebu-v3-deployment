// To deploy: npx hardhat run scripts/deploy-helloworld.ts --network <network>
import hre from "hardhat";
import { ethers } from "ethers";

async function main() {
  const [deployer] = await (hre as any).ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const HelloWorld = await (hre as any).ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  await hello.deployed();

  console.log("HelloWorld deployed to:", hello.address);

  // Automatically verify after deployment
  try {
    await hre.run("verify:verify", {
      address: hello.address,
      constructorArguments: [],
    });
    console.log("Contract verified!");
  } catch (err) {
    console.warn("Verification failed:", err.message || err);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
