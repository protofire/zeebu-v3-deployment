Accounts after deployment
========
┌─────────┬──────────────────────────────────┬──────────────────────────────────────────────┬────────────────────────┐
│ (index) │               name               │                   account                    │        balance         │
├─────────┼──────────────────────────────────┼──────────────────────────────────────────────┼────────────────────────┤
│    0    │            'deployer'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '0.969261140210272271' │
│    1    │            'aclAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '0.969261140210272271' │
│    2    │         'emergencyAdmin'         │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '0.969261140210272271' │
│    3    │           'poolAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '0.969261140210272271' │
│    4    │ 'addressesProviderRegistryOwner' │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '0.969261140210272271' │
│    5    │       'treasuryProxyAdmin'       │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │         '1.0'          │
│    6    │      'incentivesProxyAdmin'      │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │         '1.0'          │
│    7    │   'incentivesEmissionManager'    │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '0.969261140210272271' │
│    8    │     'incentivesRewardsVault'     │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '0.969261140210272271' │
└─────────┴──────────────────────────────────┴──────────────────────────────────────────────┴────────────────────────┘

Deployments
===========
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                 │                   address                    │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│      PoolAddressesProviderRegistry      │ '0x85aA94fC4f4623a5fCAbF8Fbc1f392d6d1F0e4b6' │
│               SupplyLogic               │ '0x6565422a18013bA760d3069d95f530927948c596' │
│               BorrowLogic               │ '0x6dd01c1Def73AD0d560DFA515993bafFC82F729f' │
│            LiquidationLogic             │ '0x54AAA74CbF7671669e3d43d4Fce7d7787bF2b625' │
│               EModeLogic                │ '0x868Ec8AF6b82B9d9584B9a3Aa94555Db5C6A6C6A' │
│               BridgeLogic               │ '0x7df2E85B2633E05EeB96bEA25771ae39DE3662dc' │
│            ConfiguratorLogic            │ '0xE1A0334731c5c385A9d10F8869b531A895F78936' │
│             FlashLoanLogic              │ '0x08eF635E91D96F6Ab98D2Afe5Bd8743Cf83B91e9' │
│                PoolLogic                │ '0x359A6b46542F9D7E0a1a6A478A9fFebd31b763a6' │
│              TreasuryProxy              │ '0xF136eE5178Ff6F4374FBeC9808824D7281568f90' │
│           Treasury-Controller           │ '0x5f5838B1A86A95722eE340213c07ca6C02071296' │
│         Treasury-Implementation         │ '0x5390f591a9F35f23AE1f0927c1bfa8e5A86ffCC7' │
│       PoolAddressesProvider-Aave        │ '0x5606a320da1aB8a5f110aB97664c1ea16C08A110' │
│          PoolDataProvider-Aave          │ '0x539368D2b9491891FefE3c368aB94Dc95ae95719' │
│           Pool-Implementation           │ '0x04279589F1d90289b6F41a3D61E9e8BfEbbd0119' │
│     PoolConfigurator-Implementation     │ '0x18e449AA6ce305d37Ef4e3Db272e6BF5ba71Bc51' │
│           ReservesSetupHelper           │ '0x53C7b88adEe0255Abc1D94211897F339cb481220' │
│             ACLManager-Aave             │ '0x53f07FE1370452E68F8A08D4697D10F098AB3197' │
│             AaveOracle-Aave             │ '0x8d8A0455A4e2bce4c06e854E0887686D1a60B830' │
│             Pool-Proxy-Aave             │ '0x3ae17858FfD0225201Ab7c2005FAF55764CfB44e' │
│       PoolConfigurator-Proxy-Aave       │ '0xE9a8F3dfC1f4Dc11297cAAD272612C29917F5F33' │
│             EmissionManager             │ '0x632eB1Be1310B33A818003B2E5420589d83eD1Cb' │
│       IncentivesV2-Implementation       │ '0x8C34Bf1a441b2Ec2bCd75945CD693FFFc19D9Da0' │
│             IncentivesProxy             │ '0xa1356bD741347fdD224a0FA7a2c76d7Ee37c5226' │
│               AToken-Aave               │ '0x97C72783374DE404ec9b5f5b87e5D8E58dcCf81B' │
│       DelegationAwareAToken-Aave        │ '0x9de87C34E8B337b749385a35827e0A257c94bcEA' │
│          StableDebtToken-Aave           │ '0xD2bC2329dd9cEb6FA713088CC4cf2119Ac92E6F5' │
│         VariableDebtToken-Aave          │ '0xC5A44fC1CEb88729Fb35dd54518C56F00695283b' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0x236B2764fB3ECaeFf9518457C4f04Ba24e42C1B0' │
│  ReserveStrategy-rateStrategyStableOne  │ '0x564b00Da04658Eb0c529A8011Ff603989AfdDA3a' │
│  ReserveStrategy-rateStrategyStableTwo  │ '0x2f0c60a9CB8691C8b332787ACfAE2564e8C293d1' │
│            USDC-AToken-Aave             │ '0x5a9F8616b7E8eC8fD90aF56C3bF5147E814d7C53' │
│       USDC-VariableDebtToken-Aave       │ '0x144d645179E2e049e3b3e70dc2e78a737eabc360' │
│        USDC-StableDebtToken-Aave        │ '0x42197c298ea5D0bfaC3eE37FCF32D55259fE050d' │
│            WBTC-AToken-Aave             │ '0x2385FD1F653b9C8C30E3ECCa1De9bD4FC16afFa7' │
│       WBTC-VariableDebtToken-Aave       │ '0x42C95640ff2Eec215c1C509ddfe5893c0dc000F9' │
│        WBTC-StableDebtToken-Aave        │ '0x437d4Cf5C86480A8d998a955E86C45aee3e7aD35' │
│            WETH-AToken-Aave             │ '0x30D722A1101e45a96047bE7580CFc4D22760F9F1' │
│       WETH-VariableDebtToken-Aave       │ '0xA00a8bCe43Bb6e606A8848A52a1DBFB26AeF27A0' │
│        WETH-StableDebtToken-Aave        │ '0x29364C275E6FcB7419bcC96E292246E84Aff24a2' │
│            USDT-AToken-Aave             │ '0x44d7D42ce7889685313B567580D768E1D39e5a06' │
│       USDT-VariableDebtToken-Aave       │ '0x47a38b9233FD66B9Af276eCACc0722653855a0F9' │
│        USDT-StableDebtToken-Aave        │ '0xE4A1334207262D36E9700645B9Cd79cBFb266E92' │
│            USDOX-AToken-Aave            │ '0x99E1faf2370d00D4dD143a06A01ECfDE4E350540' │
│      USDOX-VariableDebtToken-Aave       │ '0x7D59610D59aF7485D4B32C8cCC1E24bFe5FFa87a' │
│       USDOX-StableDebtToken-Aave        │ '0x217c2ED8C633226b92252A801bA1d9277e088C51' │
│           WSTZBU-AToken-Aave            │ '0xB095f0210c3bdB81E6804F70Aa73a08e8F4bD469' │
│      WSTZBU-VariableDebtToken-Aave      │ '0xc0aaBd718Bcd0b909449CEa562a279B6D49Ae07b' │
│       WSTZBU-StableDebtToken-Aave       │ '0x6F529C31a27E77726a09006960b5896aA77dbf67' │
│             ZBU-AToken-Aave             │ '0xf39C3aF87fC3c77F34f08ccE7eC0DbdE1536734F' │
│       ZBU-VariableDebtToken-Aave        │ '0x27050c4663bCf45450E5472cDA59A60D3E6e14Cd' │
│        ZBU-StableDebtToken-Aave         │ '0x2897a919635F3aDE23B8e96Af4B8fB980F6aA734' │
│          WrappedTokenGatewayV3          │ '0xDe041C0E7fc7E68a0Be95B7B5C8f0F19de085231' │
│          WalletBalanceProvider          │ '0xDca5675bab0D68A857971D1665576e1BF3E755da' │
│        UiIncentiveDataProviderV3        │ '0x6225de340D503c25024c934f194473D2eBc669e4' │
│          UiPoolDataProviderV3           │ '0xcdE0abDDe00A461120874EfBF762a5aE6e23287a' │
│           ZBUPriceAggregator            │ '0x88fddd9D052b71Cf62aEF6670B0F21B93aD1822D' │
│          WSTZBUPriceAggregator          │ '0x29b1b65b6429b3840ae31A028f3350d0aE2f296B' │
│          USDOXPriceAggregator           │ '0xA0B668DF9ff2a11F4a59A9eb5a8BE16f5ea4C5e3' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘

Mintable Reserves and Rewards
┌─────────┐
│ (index) │
├─────────┤
└─────────┘