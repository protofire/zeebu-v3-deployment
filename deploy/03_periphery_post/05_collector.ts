import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { COMMON_DEPLOY_PARAMS } from '../../helpers/env';
import { POOL_ADDRESSES_PROVIDER_ID } from '../../helpers/deploy-ids';
import { ethers } from 'hardhat';

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  ...hre
}: HardhatRuntimeEnvironment) {
  const { deploy, save } = deployments;
  const { deployer } = await getNamedAccounts();

  const collectorAdmin = process.env.COLLECTOR_ADMIN || deployer;
  const { address: providerAddress } = await deployments.get(POOL_ADDRESSES_PROVIDER_ID);

  const proxyDeployment = await deploy('CollectorProxy', {
    from: deployer,
    contract: 'InitializableAdminUpgradeabilityProxy',
    args: [],
    log: true,
  });

  const collectorImplDeployment = await deploy('CollectorImpl', {
    from: deployer,
    contract: 'Collector',
    args: [],
    ...COMMON_DEPLOY_PARAMS,
    log: true,
  });

  const collectorImpl = await ethers.getContractAt('Collector', collectorImplDeployment.address);
  try {
    await collectorImpl.initialize(ethers.constants.AddressZero);
  } catch (e) {}

  const initializeData = collectorImpl.interface.encodeFunctionData('initialize', [collectorAdmin]);
  const proxy = await ethers.getContractAt('InitializableAdminUpgradeabilityProxy', proxyDeployment.address);
  await proxy['initialize(address,address,bytes)'](
    collectorImplDeployment.address,
    collectorAdmin,
    initializeData
  );

  await save('Collector', {
    address: proxyDeployment.address,
    abi: collectorImplDeployment.abi,
  });

  const addressesProvider = await ethers.getContractAt('PoolAddressesProvider', providerAddress);
  const COLLECTOR_ID = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('COLLECTOR'));
  const tx = await addressesProvider.setAddress(COLLECTOR_ID, proxyDeployment.address);
  await tx.wait();

  console.log('Deployer:', deployer);
  console.log('Collector implementation address:', collectorImplDeployment.address);
  console.log('Collector proxy address:', proxyDeployment.address);
  console.log('PoolAddressesProvider setAddress tx hash:', tx.hash);

  return true;
};

func.tags = ['periphery-post', 'Collector'];
func.dependencies = [];
func.id = 'Collector';

export default func; 