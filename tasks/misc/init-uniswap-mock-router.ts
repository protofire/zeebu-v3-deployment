// DRAFT: This script is a draft and may require further implementation or review before production use.

import { task } from "hardhat/config";
import { ethers } from "hardhat";
import { getFirstSigner } from "../../helpers/utilities/signer";
import { getMintableERC20 } from "../../helpers/contract-getters";

// Usage: npx hardhat init-uniswap-mock-router --network <network> --router <router-address> --type <uniswap|paraswap>

task("init-uniswap-mock-router", "Initialize the Uniswap or Paraswap Mock Router for testing swaps")
  .addParam("router", "Address of the Router")
  .addParam("type", "Type of the Router (paraswap, uniswap)")
  .setAction(async ({ router, type }, hre) => {
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();

    // Use ethers.Contract as a generic fallback for the router
    let contract: any;
    if (type === "paraswap" || type === "uniswap") {
      contract = new hre.ethers.Contract(router, [], signer); // ABI can be added if needed
    } else {
      throw new Error("Unknown router type. Use 'uniswap' or 'paraswap'.");
    }

    // List of tokens to approve/transfer to the router (update as needed)
    const tokenAddresses = [
      // USDC
      "0x1c9b6337b001704d54B13FBA5C06Fe5D43061a8E",
      // USDT
      "0x2516196DA3849e85a6887B78edcb48C1eeF2eb89",
      // WBTC
      "0x4647044B0B264C771510FdB2764587B1fc7B599B",
      // WETH
      "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      // ZBU
      "0x6098Bc6CA2fDFDa186847878726AFBad1d01f13D",
    ];

    for (let address of tokenAddresses) {
      const token = await getMintableERC20(address);
      const balance = await token.balanceOf(signerAddress);
      console.log(`Token ${address} has ${balance} tokens for ${signerAddress}`);
      console.log(`Approving ${balance} tokens for router ${router} for token ${address}`);
      await token.approve(router, balance);
      console.log(`Transferring ${balance} tokens to the router for token ${address}`);
      await token.transfer(router, balance);
    }

    console.log(`All tokens approved and transferred to the router at ${router} for type ${type}.`);
  });
