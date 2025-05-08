HARDHAT_NETWORK=sepolia npx hardhat deploy
Nothing to compile
No need to generate any newer typings.

Accounts
========
┌─────────┬──────────────────────────────────┬──────────────────────────────────────────────┬─────────────────────────┐
│ (index) │               name               │                   account                    │         balance         │
├─────────┼──────────────────────────────────┼──────────────────────────────────────────────┼─────────────────────────┤
│    0    │            'deployer'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.802057677404829428' │
│    1    │            'aclAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.802057677404829428' │
│    2    │         'emergencyAdmin'         │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.802057677404829428' │
│    3    │           'poolAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.802057677404829428' │
│    4    │ 'addressesProviderRegistryOwner' │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.802057677404829428' │
│    5    │       'treasuryProxyAdmin'       │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │          '2.0'          │
│    6    │      'incentivesProxyAdmin'      │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │          '2.0'          │
│    7    │   'incentivesEmissionManager'    │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.802057677404829428' │
│    8    │     'incentivesRewardsVault'     │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.802057677404829428' │
└─────────┴──────────────────────────────────┴──────────────────────────────────────────────┴─────────────────────────┘
deploying "PoolAddressesProviderRegistry" (tx: 0x689757e468c0aed68ac6dc81e2a8d80c7a9b0cd61af5a86cbd8720c7aef2cd6d)...: deployed at 0xac537f752eDfc5fe9064a21dBf31dc32Bd551487 with 799752 gas
[Deployment] Transferred ownership of PoolAddressesProviderRegistry to: 0x9ab5672BCF516A73c1aB035220646e823C59556A 
deploying "SupplyLogic" (tx: 0xa9ae5a90e47f482ca68f7d16f92a2791246eee66884b83939640706caf7a07f8)...: deployed at 0xcd3da7E23AB92f988cDfA38BD72D99E083145b33 with 3433575 gas
deploying "BorrowLogic" (tx: 0x999b156fea83f5d683036b3d2964448ce49a236b73446a5d2e5e10248d322bd0)...: deployed at 0x3ba0DB3380d40733Ce62bcB59223A7b06e9F7a35 with 4932060 gas
deploying "LiquidationLogic" (tx: 0xf0b068591325a37446e5cc15c3eb9c426749eff8232cde4d4f940e1a98fdcfd1)...: deployed at 0xF1242a875Df83Cee6e44D422BDD211ebdC3ea1B7 with 3577442 gas
deploying "EModeLogic" (tx: 0x09dc51563a6704932b1cf443f5d9e3664ed0ec4369c6ea2749b726182a19de47)...: deployed at 0x494D5025225B0EAb9Be5342B39fd45d62CF4C84F with 1174900 gas
deploying "BridgeLogic" (tx: 0x5690f244f1a3aaf8b34476efcedd235ec4197136c11de1d69c9e2039c35d76e3)...: deployed at 0x520268662f3d7BaFc18edA0F8e6FDb674B6936EF with 1969919 gas
deploying "ConfiguratorLogic" (tx: 0xf0657bf05e79add7b615c7c6a4b66656e4723d15a9cb4d569308f14cd982a775)...: deployed at 0x0f43721d262610f5d29A3eB14f2Fe0788D418fe1 with 1928089 gas
deploying "FlashLoanLogic" (tx: 0x89fe94eb4908ec3a4a513a71b5f6fe00321f88957f618a3487279af3719608e4)...: deployed at 0x84114955f148ADc0B6d4301eC541af07c84EC8cf with 2447797 gas
deploying "PoolLogic" (tx: 0xb4bb1906f744ff668f60ff83bcceeec39cdef63d70a2ce87cdbc0f176c1c47c1)...: deployed at 0x0Ebd385CAb1b02340A3d5114730d0841a513D9e0 with 2124919 gas
deploying "Treasury-Controller" (tx: 0xcef4b3c12b9e4be1255b57af9d739d6e4b977589375ccdc4730c0c2059f183d6)...: deployed at 0xBcfB116806fFBab112Fbc2061f0952B84210e728 with 701912 gas
deploying "Treasury-Implementation" (tx: 0x2dc5b4fab34b4b7ee0069218f0d2d20caede531f17a8bc08b311e13131e0958f)...: deployed at 0xDA60eFFDaEC369ede5c70F446787A9F029DE3cbA with 2116786 gas
Live network: true
[Deployment] Skipping testnet token setup at production market
[NOTICE] Using ReserveAssets from configuration file
{
  USDC: '0x1c9b6337b001704d54B13FBA5C06Fe5D43061a8E',
  WBTC: '0x4647044B0B264C771510FdB2764587B1fc7B599B',
  WETH: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
  USDT: '0x2516196DA3849e85a6887B78edcb48C1eeF2eb89'
}
deploying "PoolAddressesProvider-Aave" (tx: 0xedc1ab8952f626fb655fc0c84c8e7d2e74f88fade8e36ecb831e438a5f76afed)...: deployed at 0xD720A3E6c9931Cd175Cd28503e0558760a256d4d with 2220804 gas
Added LendingPoolAddressesProvider with address "0xD720A3E6c9931Cd175Cd28503e0558760a256d4d" to registry located at 0xac537f752eDfc5fe9064a21dBf31dc32Bd551487
deploying "PoolDataProvider-Aave" (tx: 0xfb88dcdf9cc4c96042e0d84d636ffad06890aa3b28eaa6c1d96224af9754a77c)...: deployed at 0xDd30e8C09055b6DC35748D0C1918B99c0A6C2bBA with 2695430 gas
[NOTICE] Skipping deployment of testnet price aggregators
deploying "Pool-Implementation" (tx: 0x65e95d3cccf3e8fecbc7a684a436217a354495b00d2ee8b6ddea5b9667cdcd13)...: deployed at 0x4A05970592F2b4F1ae747512a078a275094B8234 with 4713168 gas
Initialized Pool Implementation
[INFO] Skipped L2 Pool due current network 'sepolia' is not supported
deploying "PoolConfigurator-Implementation" (tx: 0xe6fc706dd6589c4dd49a694e6f26480f96bdf7db5937a93ae89055eabf38c201)...: deployed at 0xC441d94b41fDD5442bdC8247dBf7a95451fE93A1 with 5249172 gas
Initialized PoolConfigurator Implementation
deploying "ACLManager-Aave" (tx: 0x7ed07bbcd32bc448336f24172302258e2bfa61ac7eb4cfa2164e6e8024bad521)...: deployed at 0x8BFEc17929F8163a78F91BFe6Acb7f599c1BEbC8 with 1155885 gas
== Market Admins ==
- ACL Admin 0x9ab5672BCF516A73c1aB035220646e823C59556A
- Pool Admin 0x9ab5672BCF516A73c1aB035220646e823C59556A
- Emergency Admin 0x9ab5672BCF516A73c1aB035220646e823C59556A
[NOTICE] Using ReserveAssets from configuration file
[NOTICE] Using ChainlinkAggregator from configuration file
deploying "AaveOracle-Aave" (tx: 0xc6dd0a24c7515bb1aa2d284982aeb69aca6ef6a5efe0a815adfce1967acce809)...: deployed at 0x77796AEb0a3E6F4dB72E524E1064Dbf412420a05 with 909916 gas
[Deployment] Added PriceOracle 0x77796AEb0a3E6F4dB72E524E1064Dbf412420a05 to PoolAddressesProvider
[Deployment] Attached Pool implementation and deployed proxy contract: 
- Tx hash: 0x1f230b79ccb95c671c24a0b8e2855f7ec90cf856d5350b0e4cec0ec16436c79d
- Deployed Proxy: 0xf5abb3653B352fBE010A5ABbd2aC78B9921553Cc
[Deployment] Attached PoolConfigurator implementation and deployed proxy 
- Tx hash: 0xf2b7fbbf2deaf91ab6187308a5e468e3f6637e36155d0fc07f2d65f8d420af95
- Deployed Proxy: 0xc6C08AD7B3B3346d41258825002c6a4E973caCa6
deploying "EmissionManager" (tx: 0x89db2836c426a853dd5fa6aed99353ebbaff7b730c64dcbedeaf1a9397317725)...: deployed at 0x3Acb7978003312DEf913E36653EAF931f68477F0 with 1171030 gas
deploying "IncentivesV2-Implementation" (tx: 0x438cf990e57b92dfa22cd1127ffbfa1eee930fece7ab38fa153478e022d430f7)...: deployed at 0xE6C7246c0BA92281928ded9092E6677C8555997B with 4061521 gas
[Deployment] Attached Rewards implementation and deployed proxy contract: 
- Tx hash: 0xec7f74fc4391f36a294bd2573dc3cb9f44b0ece503522035b6c901a97d6e8485
deploying "AToken-Aave" (tx: 0x85ac503bb01693e257296cce71568c4567dc78f12ec8b79429c9be91259ddcb3)...: deployed at 0xe4CE106111614cd222Be2b16710d1f1D85bdD2d0 with 3074695 gas
deploying "DelegationAwareAToken-Aave" (tx: 0x5447f241cd75bb3b9fb0459cab4bd9fd432602b22e6691318e85bc81f1378a81)...: deployed at 0x9D569c13B7837E8293Bbc4e56C96B7bD3434A8ff with 3213366 gas
deploying "StableDebtToken-Aave" (tx: 0xe15dfd5c9273bc2e024290bd126fade9354af91bff338776bae267e8dcf184e4)...: deployed at 0x02fC02cC2A9106b66dbc994F4e3C6D99d48e29b2 with 2417561 gas
deploying "VariableDebtToken-Aave" (tx: 0x38924d2dfa3815aaabec6944e7eaa5ed504efb4e95b1e5aabae66c81ed81779e)...: deployed at 0x2059BBCb70cF879C6382b0157B027eC7C0C1E802 with 2137877 gas
deploying "ReserveStrategy-rateStrategyVolatileOne" (tx: 0xbc3f15f259601a143bbeb9e1f14e94384aa565effa75a5d3553f773af690451b)...: deployed at 0xC0c7d68f8fA612304652987909eFBfA943b3E52A with 723120 gas
deploying "ReserveStrategy-rateStrategyStableOne" (tx: 0x918a9f735bf0bbb64e99d5f9d6b9953abec9e6789823b6b0ac411789d43ad50f)...: deployed at 0x5E4F1997e6F905b09461f91f51bC9FA3EB01bF4a with 723108 gas
deploying "ReserveStrategy-rateStrategyStableTwo" (tx: 0x277706d0f85615cd4a6fa9fde571e1a5485cf68750031add8892f9c7dd65fa9e)...: deployed at 0xECEB4CDa0355C653F931a20D24A4694922A5b7Cd with 723108 gas
[WARNING] Using latest deployed Treasury proxy instead of ReserveFactorTreasuryAddress from configuration file
[NOTICE] Using ReserveAssets from configuration file
Strategy address for asset USDC: 0x5E4F1997e6F905b09461f91f51bC9FA3EB01bF4a
Strategy address for asset WBTC: 0xC0c7d68f8fA612304652987909eFBfA943b3E52A
Strategy address for asset WETH: 0xC0c7d68f8fA612304652987909eFBfA943b3E52A
Strategy address for asset USDT: 0x5E4F1997e6F905b09461f91f51bC9FA3EB01bF4a
- Reserves initialization in 2 txs
  - Reserve ready for: USDC, WBTC, WETH 
    - Tx hash: 0xa06834b69bf56925c9860118b999836f54c8f77857477646643406ec22e753b4
  - Reserve ready for: USDT 
    - Tx hash: 0x282a196556d8ed32c0cf580c403f2663d9d0e3dd81212c709263a04c09a172ca
[Deployment] Initialized all reserves
- Configure reserves in 1 txs
  - Init for: USDC, WBTC, WETH, USDT 
    - Tx hash: 0x0e1568896dddecc95fa699386b3f8d555463bf5ee248ffffd9433f28cd307ea8
[Deployment] Configured all reserves
deploying "WalletBalanceProvider" (tx: 0x0d1e99607c12698a90138e1316f33b09e9ecd10eb8456b8dc39486bee484e93a)...: deployed at 0x9E820a9FAA46962d32B8aF63D97BaA4E6b3A14B2 with 761401 gas
deploying "UiPoolDataProviderV3" (tx: 0xc66aa4e0ccd3b04910d870fb325090149777f85b342966ea8acbb708d8adddf4)...: deployed at 0xdE44015210C683A02040c9081E11055bA376fD79 with 2722961 gas
[WARNING] Skipping the deployment of the Paraswap adapters due missing 'ParaswapRegistry' address at pool configuration.
=== Post deployment hook ===
- Enable stable borrow in selected assets
- Checking reserve USDC , normalized symbol USDC
  - Reserve USDC Borrow Stable Rate follows the expected configuration
- Checking reserve WBTC , normalized symbol WBTC
  - Reserve WBTC Borrow Stable Rate follows the expected configuration
- Checking reserve WETH , normalized symbol WETH
  - Reserve WETH Borrow Stable Rate follows the expected configuration
- Checking reserve USDT , normalized symbol USDT
  - Reserve USDT Borrow Stable Rate follows the expected configuration
- Review rate strategies
- Checking reserve USDC , normalized symbol USDC
  - Reserve USDC Interest Rate Strategy matches the expected configuration
- Checking reserve WBTC , normalized symbol WBTC
  - Reserve WBTC Interest Rate Strategy matches the expected configuration
- Checking reserve WETH , normalized symbol WETH
  - Reserve WETH Interest Rate Strategy matches the expected configuration
- Checking reserve USDT , normalized symbol USDT
  - Reserve USDT Interest Rate Strategy matches the expected configuration
- Setup Debt Ceiling
- Updated debt ceiling of USDT at 5,000,000.00
- Successfully setup debt ceiling: USDT
- Setup Borrowable assets in Isolation Mode
- Successfully setup isolation mode for: USDC, USDT
- Setup E-Modes
- Added E-Mode:
  - Label: Stablecoins
  - Id: 1
  - LTV: 9700
  - LQT: 9750
  - LQB: 10100
  - Oracle: undefined with address 0x0000000000000000000000000000000000000000
  - Added USDC asset to E-Mode Stablecoins
  - Added USDT asset to E-Mode Stablecoins
- Setup Liquidation protocol fee
- Successfully setup liquidation protocol fee: USDC, WBTC, WETH, USDT

Accounts after deployment
========
┌─────────┬──────────────────────────────────┬──────────────────────────────────────────────┬─────────────────────────┐
│ (index) │               name               │                   account                    │         balance         │
├─────────┼──────────────────────────────────┼──────────────────────────────────────────────┼─────────────────────────┤
│    0    │            'deployer'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.801367394773669859' │
│    1    │            'aclAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.801367394773669859' │
│    2    │         'emergencyAdmin'         │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.801367394773669859' │
│    3    │           'poolAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.801367394773669859' │
│    4    │ 'addressesProviderRegistryOwner' │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.801367394773669859' │
│    5    │       'treasuryProxyAdmin'       │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │          '2.0'          │
│    6    │      'incentivesProxyAdmin'      │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │          '2.0'          │
│    7    │   'incentivesEmissionManager'    │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.801367394773669859' │
│    8    │     'incentivesRewardsVault'     │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '12.801367394773669859' │
└─────────┴──────────────────────────────────┴──────────────────────────────────────────────┴─────────────────────────┘

Deployments
===========
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                 │                   address                    │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│      PoolAddressesProviderRegistry      │ '0xac537f752eDfc5fe9064a21dBf31dc32Bd551487' │
│               SupplyLogic               │ '0xcd3da7E23AB92f988cDfA38BD72D99E083145b33' │
│               BorrowLogic               │ '0x3ba0DB3380d40733Ce62bcB59223A7b06e9F7a35' │
│            LiquidationLogic             │ '0xF1242a875Df83Cee6e44D422BDD211ebdC3ea1B7' │
│               EModeLogic                │ '0x494D5025225B0EAb9Be5342B39fd45d62CF4C84F' │
│               BridgeLogic               │ '0x520268662f3d7BaFc18edA0F8e6FDb674B6936EF' │
│            ConfiguratorLogic            │ '0x0f43721d262610f5d29A3eB14f2Fe0788D418fe1' │
│             FlashLoanLogic              │ '0x84114955f148ADc0B6d4301eC541af07c84EC8cf' │
│                PoolLogic                │ '0x0Ebd385CAb1b02340A3d5114730d0841a513D9e0' │
│              TreasuryProxy              │ '0x17521bE637529acd947fc73561B0B4063D2Ca2C8' │
│           Treasury-Controller           │ '0xBcfB116806fFBab112Fbc2061f0952B84210e728' │
│         Treasury-Implementation         │ '0xDA60eFFDaEC369ede5c70F446787A9F029DE3cbA' │
│       PoolAddressesProvider-Aave        │ '0xD720A3E6c9931Cd175Cd28503e0558760a256d4d' │
│          PoolDataProvider-Aave          │ '0xDd30e8C09055b6DC35748D0C1918B99c0A6C2bBA' │
│           Pool-Implementation           │ '0x4A05970592F2b4F1ae747512a078a275094B8234' │
│     PoolConfigurator-Implementation     │ '0xC441d94b41fDD5442bdC8247dBf7a95451fE93A1' │
│           ReservesSetupHelper           │ '0x26a84219311B5898E55d278C9fA91cf44130eb33' │
│             ACLManager-Aave             │ '0x8BFEc17929F8163a78F91BFe6Acb7f599c1BEbC8' │
│             AaveOracle-Aave             │ '0x77796AEb0a3E6F4dB72E524E1064Dbf412420a05' │
│             Pool-Proxy-Aave             │ '0xf5abb3653B352fBE010A5ABbd2aC78B9921553Cc' │
│       PoolConfigurator-Proxy-Aave       │ '0xc6C08AD7B3B3346d41258825002c6a4E973caCa6' │
│             EmissionManager             │ '0x3Acb7978003312DEf913E36653EAF931f68477F0' │
│       IncentivesV2-Implementation       │ '0xE6C7246c0BA92281928ded9092E6677C8555997B' │
│             IncentivesProxy             │ '0xa0bD4e1739b21842Ff1986861f64FedFab623E28' │
│               AToken-Aave               │ '0xe4CE106111614cd222Be2b16710d1f1D85bdD2d0' │
│       DelegationAwareAToken-Aave        │ '0x9D569c13B7837E8293Bbc4e56C96B7bD3434A8ff' │
│          StableDebtToken-Aave           │ '0x02fC02cC2A9106b66dbc994F4e3C6D99d48e29b2' │
│         VariableDebtToken-Aave          │ '0x2059BBCb70cF879C6382b0157B027eC7C0C1E802' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0xC0c7d68f8fA612304652987909eFBfA943b3E52A' │
│  ReserveStrategy-rateStrategyStableOne  │ '0x5E4F1997e6F905b09461f91f51bC9FA3EB01bF4a' │
│  ReserveStrategy-rateStrategyStableTwo  │ '0xECEB4CDa0355C653F931a20D24A4694922A5b7Cd' │
│            USDC-AToken-Aave             │ '0x6Ab1F13DeC97986422eD05B5AC99b3E8A0bb74EC' │
│       USDC-VariableDebtToken-Aave       │ '0xc8C14cc01B49A08777127d8d7BB14c0E9245dEc2' │
│        USDC-StableDebtToken-Aave        │ '0x186671b036ab6834B62D81A38b109A6006AEFBb2' │
│            WBTC-AToken-Aave             │ '0x82Cc9198781f908d94269f5135B57C1001E41Af3' │
│       WBTC-VariableDebtToken-Aave       │ '0x11e877cedE080d5e8bC6B642bE8a66c78af1A1f0' │
│        WBTC-StableDebtToken-Aave        │ '0xc080CA9BcC295Aec93Dd1F268285dBAa7338e4c4' │
│            WETH-AToken-Aave             │ '0x2408B89E16963A01c4D87594fe05cc890EB2cE76' │
│       WETH-VariableDebtToken-Aave       │ '0xD2C27b4bF3Fa23089f1f651836070466117AF235' │
│        WETH-StableDebtToken-Aave        │ '0x8Aa6f85DdCbA1bd2d446e97F69d1e5F2B1CC87D8' │
│            USDT-AToken-Aave             │ '0xB665D5C97Eb1aa8FE2B15Af0e1BF354Ff592407C' │
│       USDT-VariableDebtToken-Aave       │ '0xF981fe7b0da06840E8C69fE2A397b8F9631385f2' │
│        USDT-StableDebtToken-Aave        │ '0x1e95f6396a12F76C9512E5A0251A3842804D740b' │
│          WrappedTokenGatewayV3          │ '0xeD3A764d7f4181790e81a68d2e929e8BEb2e4c94' │
│          WalletBalanceProvider          │ '0x9E820a9FAA46962d32B8aF63D97BaA4E6b3A14B2' │
│        UiIncentiveDataProviderV3        │ '0x386a0d567Ad9013e977535B91Bb546ccea6DFc30' │
│          UiPoolDataProviderV3           │ '0xdE44015210C683A02040c9081E11055bA376fD79' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘

Mintable Reserves and Rewards
┌─────────┐
│ (index) │
├─────────┤
└─────────┘