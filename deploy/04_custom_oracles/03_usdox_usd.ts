import { POOL_ADMIN } from "./../../helpers/constants";
import { eNetwork } from "./../../helpers/types";
import { MARKET_NAME } from "./../../helpers/env";
import {
  loadPoolConfig,
  isTestnetMarket,
} from "./../../helpers/market-config-helpers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { COMMON_DEPLOY_PARAMS } from "../../helpers/env";
import {
  USDOXChainlinkPriceAggregator,
  USDOXChainlinkPriceAggregator__factory,
} from "../../typechain";

const USDOX_PRICE_AGGREGATOR_ID = "USDOXPriceAggregator";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  ...hre
}: HardhatRuntimeEnvironment) {
  const { deploy, save } = deployments;
  const { deployer } = await getNamedAccounts();

  const network = (process.env.FORK || hre.network.name) as eNetwork;
  let priceAggregatorOwner = POOL_ADMIN[network];

  if (isTestnetMarket(await loadPoolConfig(MARKET_NAME))) {
    priceAggregatorOwner = deployer;
  } else {
    priceAggregatorOwner = deployer;
  }

  const priceAggregatorArtifact = await deploy(USDOX_PRICE_AGGREGATOR_ID, {
    from: deployer,
    contract: "USDOXChainlinkPriceAggregator",
    args: [],
    ...COMMON_DEPLOY_PARAMS,
  });

  const priceAggregator = (await hre.ethers.getContractAt(priceAggregatorArtifact.abi, priceAggregatorArtifact.address)) as USDOXChainlinkPriceAggregator;

  await save(USDOX_PRICE_AGGREGATOR_ID, {
    address: priceAggregatorArtifact.address,
    abi: USDOXChainlinkPriceAggregator__factory.abi,
  });

  try {
    await hre.run("verify:verify", {
      address: priceAggregatorArtifact.address,
      constructorArguments: [],
      libraries: {},
    });
  } catch (error) {
    console.error(error);
  }

  return true;
};

func.tags = ["USDOXPriceAggregator"];
func.dependencies = [];
func.id = "USDOXPriceAggregator";

export default func; 