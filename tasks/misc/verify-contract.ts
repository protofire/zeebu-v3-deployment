import { task } from "hardhat/config";


// How to execute this task:
// npx hardhat verify-contract --network base-sepolia --contract-address 0x3ae17858FfD0225201Ab7c2005FAF55764CfB44e --constructor-arguments 0x5606a320da1aB8a5f110aB97664c1ea16C08A110

task(`verify-contract`)
  .addParam("contractAddress", "Address of the contract to verify")
  .addParam("constructorArguments", "Constructor arguments")
  .setAction(
    async ({ constructorArguments, contractAddress }, hre) => {
      const args = constructorArguments ? constructorArguments.split(' ') : [];
      const address = contractAddress as string;

      console.log(`Verifying contract at address: ${address}`);
      console.log(`Constructor arguments: ${args}`);

      try {
        await hre.run("verify:verify", {
          address: address,
          constructorArguments: args,
        });
        console.log("Contract verification successful!");
      } catch (error) {
        console.error("Contract verification failed:", error);
      }
    }
  );
