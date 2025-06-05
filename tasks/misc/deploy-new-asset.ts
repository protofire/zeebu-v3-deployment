import { task } from "hardhat/config";
import { loadPoolConfig, ConfigNames, getReserveAddresses, getTreasuryAddress } from "../../helpers/market-config-helpers";
import { getPoolConfiguratorProxy } from "../../helpers/contract-getters";
import { MARKET_NAME } from "../../helpers/env";
import { eNetwork } from "../../helpers/types";
import { isAddress } from "ethers/lib/utils";
import { ZERO_ADDRESS } from "../../helpers/constants";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { allReserveConfigs } from "../../markets/aave/reservesConfigs";
import { initReservesByHelper, configureReservesByHelper } from "../../helpers/init-helpers";

// How to use:
// 1. Add the new asset to the market config (markets/aave/index.ts)
// 2. Add the new asset to the reservesConfig.ts (markets/aave/reservesConfig.ts)
// 3. Run the task
// npx hardhat deploy-new-asset --network sepolia --symbol DLP

task("deploy-new-asset", "Deploy and initialize a new reserve asset using market config")
    .addParam("symbol", "Token symbol, must be configured in your market config")
    .setAction(async ({ symbol }, hre) => {
        const network = (process.env.FORK ? process.env.FORK : hre.network.name) as eNetwork;
        const poolConfig = loadPoolConfig(MARKET_NAME as ConfigNames);
        const reservesConfig = poolConfig.ReservesConfig;
        const reserveAssets = await getReserveAddresses(poolConfig, network);

        if (!reservesConfig[symbol]) {
            throw new Error(`Reserve config for symbol ${symbol} not found in reservesConfig.ts.`);
        }
        if (!reserveAssets[symbol]) {
            throw new Error(`Reserve asset address for symbol ${symbol} not found in market config.`);
        }
        const asset = reserveAssets[symbol];
        if (!isAddress(asset)) {
            throw new Error("Invalid asset address provided.");
        }
        const { poolAdmin } = await hre.getNamedAccounts();
        const poolConfigurator = (await getPoolConfiguratorProxy()).connect(
            await hre.ethers.getSigner(poolAdmin)
        );

        await deployReserv({ symbol, hre, poolConfig, reservesConfig, reserveAssets, poolConfigurator });
        await activateReserv({ asset, symbol, poolConfigurator });
    });

async function deployReserv({ symbol, hre, poolConfig, reservesConfig, reserveAssets, poolConfigurator }: DeployReservParams): Promise<void> {
    const network = (process.env.FORK ? process.env.FORK : hre.network.name) as eNetwork;
    const singleReserveConfig = { [symbol]: reservesConfig[symbol] };
    const singleReserveAsset = { [symbol]: reserveAssets[symbol] };
    const { poolAdmin } = await hre.getNamedAccounts();
    const treasury = await getTreasuryAddress(poolConfig, network);
    const incentivesController = ZERO_ADDRESS; // Or fetch if needed

    await initReservesByHelper(
        singleReserveConfig,
        singleReserveAsset,
        poolConfig.ATokenNamePrefix,
        poolConfig.StableDebtTokenNamePrefix,
        poolConfig.VariableDebtTokenNamePrefix,
        poolConfig.SymbolPrefix,
        poolAdmin,
        treasury,
        incentivesController
    );
    console.log(`Reserve for asset ${symbol} successfully deployed and initialized.`);

    await configureReservesByHelper(
        singleReserveConfig,
        singleReserveAsset
    );
    console.log(`Reserve for asset ${symbol} successfully configured.`);
}

interface DeployReservParams {
    symbol: string;
    hre: HardhatRuntimeEnvironment;
    poolConfig: any;
    reservesConfig: Record<string, any>;
    reserveAssets: Record<string, string>;
    poolConfigurator: any;
}

interface ActivateReservParams {
    asset: string;
    symbol: string;
    poolConfigurator: any;
}

async function activateReserv({ asset, symbol, poolConfigurator }: ActivateReservParams): Promise<void> {
    console.log(`Activating reserve for asset: ${asset}`);
    const activateTx = await poolConfigurator.setReserveActive(asset, true);
    await activateTx.wait();
    console.log(`Reserve for asset ${symbol} successfully activated.`);
}