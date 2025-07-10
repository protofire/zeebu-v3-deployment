import { task } from 'hardhat/config';
import { COMMON_DEPLOY_PARAMS } from '../../helpers/env';
import { isAddress } from 'ethers/lib/utils';

// Usage: npx hardhat deploy-collector --provider <providerAddress> [--admin <adminAddress>]
task('deploy-collector', 'Deploys the Collector contract as a proxy and registers it in PoolAddressesProvider')
  .addParam('provider', 'The PoolAddressesProvider address')
  .addOptionalParam('admin', 'The Collector admin address')
  .setAction(async ({ provider, admin }, hre) => {
    const { deployments, getNamedAccounts, ethers } = hre;
    const { deploy, save } = deployments;
    const { deployer } = await getNamedAccounts();

    const collectorAdmin = admin || process.env.COLLECTOR_ADMIN || deployer;

    if (!isAddress(provider)) {
      console.error(`Invalid provider: ${provider}`);
      return;
    }
    if (!isAddress(collectorAdmin)) {
      console.error(`Invalid admin: ${collectorAdmin}`);
      return;
    }

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
    } catch (e) {
    }

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

    const addressesProvider = await ethers.getContractAt('PoolAddressesProvider', provider);
    const COLLECTOR_ID = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('COLLECTOR'));
    const tx = await addressesProvider.setAddress(COLLECTOR_ID, proxyDeployment.address);
    const res = await addressesProvider.getAddress(COLLECTOR_ID);

    const collectorAbi = collectorImplDeployment.abi;
    const signers = await ethers.getSigners();
    const nonAdminSigner = signers.length > 1 ? signers[1] : signers[0];
    const proxyAsCollector = new ethers.Contract(proxyDeployment.address, collectorAbi, nonAdminSigner);
    const fundsAdmin = await proxyAsCollector.getFundsAdmin();

    console.log('Collector deployment summary:');
    console.log(`  Proxy deployed at: ${proxyDeployment.address}`);
    console.log(`  Collector admin:   ${collectorAdmin}`);
    console.log(`  Registration tx:   ${tx.hash}`);
    console.log(`  Registered at:     ${res}`);
    console.log(`  Funds admin:       ${fundsAdmin}`);
  }); 