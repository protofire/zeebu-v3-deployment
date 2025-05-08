import hre from "hardhat";
import { ethers } from "ethers";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  console.log(`Transaction hash: ${hello.deployTransaction.hash}`);

  console.log("Awaiting contract deployment...");
  const receipt = await hello.deployTransaction.wait(3); // Wait for 3 confirmations
  console.log("Contract deployed at:", receipt.contractAddress);

  // Attempt to verify
  try {
    await hre.run("verify:verify", {
      address: receipt.contractAddress,
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
