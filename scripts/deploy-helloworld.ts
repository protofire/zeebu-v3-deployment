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
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
