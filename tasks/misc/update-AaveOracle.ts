import { task } from "hardhat/config";
import { isAddress } from "ethers/lib/utils";
import { getEthersSigners } from "../../helpers/utilities/signer";
// Usage: npx hardhat update-AaveOracle --network <network> --asset <asset-address> --source <source-address>
// command
// npx hardhat update-AaveOracle --network sepolia --asset 0x6098Bc6CA2fDFDa186847878726AFBad1d01f13D --source  0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
const aaveOracleAddresses: { [network: string]: string } = {
  baseSepolia: "0xa4145d8c5A6Dac1882268F67dc71f514666052B2",
  sepolia: "0xB7c437D99bD1EEd8E8D0eC4fE865b70EfBFAc1f3",
  bscTestnet: "0xD01b09FF17F93671ab39F430298C3c35DF57C168",
};

task("update-AaveOracle", "Update the price source (aggregator) for an asset in the Aave V3 Oracle")
  .addParam("asset", "The address of the asset to update the price source for")
  .addParam("source", "The new price source (aggregator) address for the asset")
  .setAction(async ({ asset, source }, hre) => {
    if (!isAddress(asset)) {
      throw new Error("Invalid asset address provided.");
    }
    if (!isAddress(source)) {
      throw new Error("Invalid source address provided.");
    }
    const [signer] = await getEthersSigners();
    const network = hre.network.name;
    const AAVE_ORACLE_ADDRESS = aaveOracleAddresses[network];
    if (!AAVE_ORACLE_ADDRESS || !isAddress(AAVE_ORACLE_ADDRESS)) {
      throw new Error(`AaveOracle address for network ${network} is not set in aaveOracleAddresses map.`);
    }
    const aaveOracle = await hre.ethers.getContractAt("AaveOracle", AAVE_ORACLE_ADDRESS, signer);
    console.log(`Updating price source for asset: ${asset} to new source: ${source} on network: ${network}`);
    const tx = await aaveOracle.setAssetSources([asset], [source]);
    await tx.wait();
    console.log(`Price source for asset ${asset} successfully updated to ${source} on ${network}.`);
  });
