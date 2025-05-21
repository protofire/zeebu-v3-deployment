HARDHAT_NETWORK=sepolia npx hardhat deploy
Nothing to compile
No need to generate any newer typings.

Accounts
========
┌─────────┬──────────────────────────────────┬──────────────────────────────────────────────┬─────────────────────────┐
│ (index) │               name               │                   account                    │         balance         │
├─────────┼──────────────────────────────────┼──────────────────────────────────────────────┼─────────────────────────┤
│    0    │            'deployer'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.963307883009552402' │
│    1    │            'aclAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.963307883009552402' │
│    2    │         'emergencyAdmin'         │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.963307883009552402' │
│    3    │           'poolAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.963307883009552402' │
│    4    │ 'addressesProviderRegistryOwner' │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.963307883009552402' │
│    5    │       'treasuryProxyAdmin'       │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │          '2.0'          │
│    6    │      'incentivesProxyAdmin'      │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │          '2.0'          │
│    7    │   'incentivesEmissionManager'    │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.963307883009552402' │
│    8    │     'incentivesRewardsVault'     │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.963307883009552402' │
└─────────┴──────────────────────────────────┴──────────────────────────────────────────────┴─────────────────────────┘
deploying "PoolAddressesProviderRegistry" (tx: 0xd9aa33b9aaf6f5a2b158733796e0c1bd03ad2a7cdd3c8955f02cf7fdca13b385)...: deployed at 0xdBDa92ca3C9B618dE766c3E68Ff8e12a54347bcD with 799752 gas
[Deployment] Transferred ownership of PoolAddressesProviderRegistry to: 0x9ab5672BCF516A73c1aB035220646e823C59556A 
deploying "SupplyLogic" (tx: 0x4475ae7d40b454a2622475916d6b84e169ac34091ae1e8f09fb0d477742f5ea6)...: deployed at 0xc9efF245Ad7cf246c7ba1D5BFf30500BE88eb042 with 3433575 gas
deploying "BorrowLogic" (tx: 0xa7603f0dd465dbf6581498fcf266ead533e0679ac69f07274d26e9d646bdebe2)...: deployed at 0xf43a932b295Df533fa35592d67950b43D3E342cD with 4932060 gas
deploying "LiquidationLogic" (tx: 0x730ee8066814270f679e82f751b9a4a8d573c5f31dce5782d5c4ae8a337bb547)...: deployed at 0x64B2b0588d855A234B09F8Dd76358a6Fea6D1a4f with 3577442 gas
deploying "EModeLogic" (tx: 0x8450633fa69e2b83980502ab1cba01a201ff5b5329ff951faf7bbf4f22f7305b)...: deployed at 0x1ccdaa45bE31266DB740EFEF1974d595E4A8a455 with 1174900 gas
deploying "BridgeLogic" (tx: 0xf5fe86288f10bedf71efb62c3ae0ec1753f8b8e50899b9f926f87c7cfdd5a0a3)...: deployed at 0xcf64B1EA19bBa896f7A0CC1d4F835FB8ac7C7f3e with 1969919 gas
deploying "ConfiguratorLogic" (tx: 0xef92a3f2e80991ea35e55f6d0639947b986a7e6d4c3a05983e7ccaeef44eb7ea)...: deployed at 0xE0bE27648d8Bdb1c660b26994eFbA37A5D478a46 with 1928089 gas
deploying "FlashLoanLogic" (tx: 0x4b1e9fe1d76ecaa9826c91a96d9058ae0b450f23d8eb49d8a2359f49950518b1)...: deployed at 0xa7afeF24132D550b0Ac67A34B433bCDd77e56177 with 2447797 gas
deploying "PoolLogic" (tx: 0xc077c7de8863c433ebdc6f338aee7f7fe0a406fb211ae158d2b44657d08274ad)...: deployed at 0xCcddf477e03022FfcB0cdf0121Ac9e1d6e4d8D38 with 2124919 gas
deploying "Treasury-Controller" (tx: 0x0f11ee921cd7019aec63b03db5403a25b50bac341b19ed9a2d7ca68787c8e3c6)...: deployed at 0x455C5cb4B27186eAcF58034C29e84758C1505881 with 701912 gas
deploying "Treasury-Implementation" (tx: 0x4248c73c42d40287e1023efb7fc298591718b38f4bd7f0ba25272d546f7f874e)...: deployed at 0x78DE753BF854487238748Cd941c4218CC47d1552 with 2116786 gas
Live network: true
[Deployment] Skipping testnet token setup at production market
[NOTICE] Using ReserveAssets from configuration file
{
  USDC: '0x1c9b6337b001704d54B13FBA5C06Fe5D43061a8E',
  WBTC: '0x4647044B0B264C771510FdB2764587B1fc7B599B',
  WETH: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
  USDT: '0x2516196DA3849e85a6887B78edcb48C1eeF2eb89',
  USDOX: '0x8C97603960783e5EbaA727E50c02821C833de5b0',
  WSTZBU: '0xCB2693c8503F51fA42Cfd5952dc078951389448E',
  ZBU: '0x6098Bc6CA2fDFDa186847878726AFBad1d01f13D'
}
deploying "PoolAddressesProvider-Aave" (tx: 0xd8222d2bfb5421d0eff987a53d6f62baa113f33b7501b6a45b9d46dd6cff348c)...: deployed at 0x7a3DB50a655B722017f73A50835Dde9695efa9e5 with 2220804 gas
Added LendingPoolAddressesProvider with address "0x7a3DB50a655B722017f73A50835Dde9695efa9e5" to registry located at 0xdBDa92ca3C9B618dE766c3E68Ff8e12a54347bcD
deploying "PoolDataProvider-Aave" (tx: 0x18682fa858404153b437b50e9dc5269181daefed68b14075fa58cd2341cd5f0e)...: deployed at 0xd82A72832502A69180efB6182b657C2A889Ac82D with 2695430 gas
[NOTICE] Skipping deployment of testnet price aggregators
deploying "Pool-Implementation" (tx: 0xb1afec196e414cff1d8ea3f075ff3d7547c5359c07c192c461872ed027631294)...: deployed at 0x8732A5D70D29966EB64FA935f39e1d713DFa2164 with 4713168 gas
Initialized Pool Implementation
[INFO] Skipped L2 Pool due current network 'sepolia' is not supported
deploying "PoolConfigurator-Implementation" (tx: 0xa43e3298946b017ed148ce54f67dbf1d8c24a5d69e410cce3a15f86e5320f2c4)...: deployed at 0x6AB5A0c8F2D699E8C204FE5064a98eD036B5Db6b with 5249172 gas
Initialized PoolConfigurator Implementation
deploying "ACLManager-Aave" (tx: 0x6a1870f87284f2fb54b051cfd5bca6cd53eb4e451ddc2ffcd8a4252f08b171e7)...: deployed at 0x3E4371509270387ab45F200d24B816E28E5c6041 with 1155885 gas
== Market Admins ==
- ACL Admin 0x9ab5672BCF516A73c1aB035220646e823C59556A
- Pool Admin 0x9ab5672BCF516A73c1aB035220646e823C59556A
- Emergency Admin 0x9ab5672BCF516A73c1aB035220646e823C59556A
[NOTICE] Using ReserveAssets from configuration file
[NOTICE] Using ChainlinkAggregator from configuration file
deploying "AaveOracle-Aave" (tx: 0x1bcf3acc1d242b2a5b0e1c671b19f836d5fe6c545b8d14e0acbe30f10a6ebc6c)...: deployed at 0xB7c437D99bD1EEd8E8D0eC4fE865b70EfBFAc1f3 with 985792 gas
[Deployment] Added PriceOracle 0xB7c437D99bD1EEd8E8D0eC4fE865b70EfBFAc1f3 to PoolAddressesProvider
[Deployment] Attached Pool implementation and deployed proxy contract: 
- Tx hash: 0xb7e98087832635f748a86662c5dcb3e4cb7e5d274a3d0409288ec505bb0febc6
- Deployed Proxy: 0x283B3211781f939337A40b95F70114B050cF3051
[Deployment] Attached PoolConfigurator implementation and deployed proxy 
- Tx hash: 0x985feec17b76368b7ea787a813105fe2423b051bad727c00e4573fe8b49329b7
- Deployed Proxy: 0xccE6ef72b383d67f0A17F4459a43e394CF01D3BC
deploying "EmissionManager" (tx: 0xbee926e6d97a41cc807c7621931cb8a09993a179af64ca3af15f2bb715cc40dc)...: deployed at 0x71320bBE62661b6617e120Da0560aEfAce6087a6 with 1171030 gas
deploying "IncentivesV2-Implementation" (tx: 0xc55939a949292583e2a3be642b232048ee47bf857b151484e332b730ebd93b54)...: deployed at 0x51267361C18234cFAE7bF7f5d354a179125bde23 with 4061533 gas
[Deployment] Attached Rewards implementation and deployed proxy contract: 
- Tx hash: 0x1ed44d5e0c296ebf43a9f75fa364a4f3cd3c6bf5386bdfa7567a22d69e3385c3
deploying "AToken-Aave" (tx: 0x36c9187e1767dfdf6c1dcf351d37eefb93de994f7f65fca5d5fa6bd97da8031b)...: deployed at 0x270F7eF388f1C9AcFe514E0f85A6c4Bdb0308dd5 with 3074695 gas
deploying "DelegationAwareAToken-Aave" (tx: 0x8c2d8d308e4409f618419ff3abde6546a7db93e52d359c045d34ed33c1f9e3e6)...: deployed at 0x7361fee715b57641AC1418cB5Af07D12d8645c3B with 3213366 gas
deploying "StableDebtToken-Aave" (tx: 0x6601909b03bdb003a54cd0b2fad797c7d6377e525cff5cc8db767b0a25e4a67e)...: deployed at 0x2d5d22C2064603F4eD49E7807146702662Ef5C40 with 2417561 gas
deploying "VariableDebtToken-Aave" (tx: 0x174e656d3cd13d24cac36cd1dbf507c93bbbef0b80d02c18c0bfe73ec77e2953)...: deployed at 0x67a3dB47B593B33F2E53d5710cfcE877E917dC0b with 2137877 gas
deploying "ReserveStrategy-rateStrategyVolatileOne" (tx: 0x5a3aebb597248e2be534baf82766adaff778d089e232a2fa0b6222b2b00b8b29)...: deployed at 0xb52CfF69cC7f94d70dffdd796427e0Be617Af1ED with 723120 gas
deploying "ReserveStrategy-rateStrategyStableOne" (tx: 0xafb455a5af64a4ede97dbdaecd30dbd8ebcb67ff750f432f5d9f8f08c1cf57ef)...: deployed at 0x2B8603fa279eeD501a64eb97D0B5e98b04236f62 with 723108 gas
deploying "ReserveStrategy-rateStrategyStableTwo" (tx: 0x6b4c9ef6456ae73d51c06eaed3b1fc5a7574a16d5aabf5225e7c403d6b926aeb)...: deployed at 0x740Ac8c762f4D3d454b805B877d780171E84A0ed with 723108 gas
[WARNING] Using latest deployed Treasury proxy instead of ReserveFactorTreasuryAddress from configuration file
[NOTICE] Using ReserveAssets from configuration file
Strategy address for asset USDC: 0x2B8603fa279eeD501a64eb97D0B5e98b04236f62
Strategy address for asset WBTC: 0xb52CfF69cC7f94d70dffdd796427e0Be617Af1ED
Strategy address for asset WETH: 0xb52CfF69cC7f94d70dffdd796427e0Be617Af1ED
Strategy address for asset USDT: 0x2B8603fa279eeD501a64eb97D0B5e98b04236f62
Strategy address for asset USDOX: 0x2B8603fa279eeD501a64eb97D0B5e98b04236f62
Strategy address for asset WSTZBU: 0xb52CfF69cC7f94d70dffdd796427e0Be617Af1ED
Strategy address for asset ZBU: 0xb52CfF69cC7f94d70dffdd796427e0Be617Af1ED
- Reserves initialization in 3 txs
  - Reserve ready for: USDC, WBTC, WETH 
    - Tx hash: 0x29699fe6c572bdc20250175edf6ad6df9253023ed7681759b71f7997a8c9108c
  - Reserve ready for: USDT, USDOX, WSTZBU 
    - Tx hash: 0x5ab7bd58ceddf3a5c60451a696ec6163e4551b2a39986b9c0f1a88e1d7c9d31e
  - Reserve ready for: ZBU 
    - Tx hash: 0xe591c211db2d651146423ea4d5c86594b82abc2d4eec6e51b5acf353875da706
[Deployment] Initialized all reserves
- Configure reserves in 1 txs
  - Init for: USDC, WBTC, WETH, USDT, USDOX, WSTZBU, ZBU 
    - Tx hash: 0xbd45f61bf81a01b59093cc9b83552e4df3b9440546b8c71d4e99b66ef6580803
[Deployment] Configured all reserves
deploying "WalletBalanceProvider" (tx: 0x027de4f76fc953262f90c1a3863e19814d513723edf692d69abbac4e5b0554f4)...: deployed at 0x5e6Ac0E002310b9Ad19653D0D3526b129B908Bd0 with 761401 gas
deploying "UiPoolDataProviderV3" (tx: 0x120819598930ed89fbf52afbf951c7209576f99750664f4f9de9f2ebbdfdce36)...: deployed at 0xb9D5cBA62B67D967FCd60b66761a8436a4dDaaAA with 2722961 gas
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
- Checking reserve USDOX , normalized symbol USDOX
  - Reserve USDOX Borrow Stable Rate follows the expected configuration
- Checking reserve wstZBU , normalized symbol WSTZBU
  - Reserve WSTZBU Borrow Stable Rate follows the expected configuration
- Checking reserve ZBU , normalized symbol ZBU
  - Reserve ZBU Borrow Stable Rate follows the expected configuration
- Review rate strategies
- Checking reserve USDC , normalized symbol USDC
  - Reserve USDC Interest Rate Strategy matches the expected configuration
- Checking reserve WBTC , normalized symbol WBTC
  - Reserve WBTC Interest Rate Strategy matches the expected configuration
- Checking reserve WETH , normalized symbol WETH
  - Reserve WETH Interest Rate Strategy matches the expected configuration
- Checking reserve USDT , normalized symbol USDT
  - Reserve USDT Interest Rate Strategy matches the expected configuration
- Checking reserve USDOX , normalized symbol USDOX
  - Reserve USDOX Interest Rate Strategy matches the expected configuration
- Checking reserve wstZBU , normalized symbol WSTZBU
  - Reserve WSTZBU Interest Rate Strategy matches the expected configuration
- Checking reserve ZBU , normalized symbol ZBU
  - Reserve ZBU Interest Rate Strategy matches the expected configuration
- Setup Debt Ceiling
- Updated debt ceiling of USDT at 5,000,000.00
- Successfully setup debt ceiling: USDT
- Setup Borrowable assets in Isolation Mode
- Successfully setup isolation mode for: USDC, USDT, USDOX
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
- Successfully setup liquidation protocol fee: USDC, WBTC, WETH, USDT, USDOX, WSTZBU, ZBU

Accounts after deployment
========
┌─────────┬──────────────────────────────────┬──────────────────────────────────────────────┬─────────────────────────┐
│ (index) │               name               │                   account                    │         balance         │
├─────────┼──────────────────────────────────┼──────────────────────────────────────────────┼─────────────────────────┤
│    0    │            'deployer'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.913961459212066231' │
│    1    │            'aclAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.913961459212066231' │
│    2    │         'emergencyAdmin'         │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.913961459212066231' │
│    3    │           'poolAdmin'            │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.913961459212066231' │
│    4    │ 'addressesProviderRegistryOwner' │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.913961459212066231' │
│    5    │       'treasuryProxyAdmin'       │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │          '2.0'          │
│    6    │      'incentivesProxyAdmin'      │ '0x5C6718A6cf2bD8Fd339A8B98338D7861862fcDbc' │          '2.0'          │
│    7    │   'incentivesEmissionManager'    │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.913961459212066231' │
│    8    │     'incentivesRewardsVault'     │ '0x9ab5672BCF516A73c1aB035220646e823C59556A' │ '11.913961459212066231' │
└─────────┴──────────────────────────────────┴──────────────────────────────────────────────┴─────────────────────────┘

Deployments
===========
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                 │                   address                    │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│      PoolAddressesProviderRegistry      │ '0xdBDa92ca3C9B618dE766c3E68Ff8e12a54347bcD' │
│               SupplyLogic               │ '0xc9efF245Ad7cf246c7ba1D5BFf30500BE88eb042' │
│               BorrowLogic               │ '0xf43a932b295Df533fa35592d67950b43D3E342cD' │
│            LiquidationLogic             │ '0x64B2b0588d855A234B09F8Dd76358a6Fea6D1a4f' │
│               EModeLogic                │ '0x1ccdaa45bE31266DB740EFEF1974d595E4A8a455' │
│               BridgeLogic               │ '0xcf64B1EA19bBa896f7A0CC1d4F835FB8ac7C7f3e' │
│            ConfiguratorLogic            │ '0xE0bE27648d8Bdb1c660b26994eFbA37A5D478a46' │
│             FlashLoanLogic              │ '0xa7afeF24132D550b0Ac67A34B433bCDd77e56177' │
│                PoolLogic                │ '0xCcddf477e03022FfcB0cdf0121Ac9e1d6e4d8D38' │
│              TreasuryProxy              │ '0xB665a5b0142CbB8D889dE7bFDe5F099146f53C74' │
│           Treasury-Controller           │ '0x455C5cb4B27186eAcF58034C29e84758C1505881' │
│         Treasury-Implementation         │ '0x78DE753BF854487238748Cd941c4218CC47d1552' │
│       PoolAddressesProvider-Aave        │ '0x7a3DB50a655B722017f73A50835Dde9695efa9e5' │
│          PoolDataProvider-Aave          │ '0xd82A72832502A69180efB6182b657C2A889Ac82D' │
│           Pool-Implementation           │ '0x8732A5D70D29966EB64FA935f39e1d713DFa2164' │
│     PoolConfigurator-Implementation     │ '0x6AB5A0c8F2D699E8C204FE5064a98eD036B5Db6b' │
│           ReservesSetupHelper           │ '0x55764049516847Aa7f5A6A8294DE1EA0cE2564C5' │
│             ACLManager-Aave             │ '0x3E4371509270387ab45F200d24B816E28E5c6041' │
│             AaveOracle-Aave             │ '0xB7c437D99bD1EEd8E8D0eC4fE865b70EfBFAc1f3' │
│             Pool-Proxy-Aave             │ '0x283B3211781f939337A40b95F70114B050cF3051' │
│       PoolConfigurator-Proxy-Aave       │ '0xccE6ef72b383d67f0A17F4459a43e394CF01D3BC' │
│             EmissionManager             │ '0x71320bBE62661b6617e120Da0560aEfAce6087a6' │
│       IncentivesV2-Implementation       │ '0x51267361C18234cFAE7bF7f5d354a179125bde23' │
│             IncentivesProxy             │ '0x26cB2158E35840434b1F1346a1ba581e7ce89A72' │
│               AToken-Aave               │ '0x270F7eF388f1C9AcFe514E0f85A6c4Bdb0308dd5' │
│       DelegationAwareAToken-Aave        │ '0x7361fee715b57641AC1418cB5Af07D12d8645c3B' │
│          StableDebtToken-Aave           │ '0x2d5d22C2064603F4eD49E7807146702662Ef5C40' │
│         VariableDebtToken-Aave          │ '0x67a3dB47B593B33F2E53d5710cfcE877E917dC0b' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0xb52CfF69cC7f94d70dffdd796427e0Be617Af1ED' │
│  ReserveStrategy-rateStrategyStableOne  │ '0x2B8603fa279eeD501a64eb97D0B5e98b04236f62' │
│  ReserveStrategy-rateStrategyStableTwo  │ '0x740Ac8c762f4D3d454b805B877d780171E84A0ed' │
│            USDC-AToken-Aave             │ '0xd66EAa60c6C23E0bf954cd22619359Bf62F9DedA' │
│       USDC-VariableDebtToken-Aave       │ '0x81E8FaE7A55BDb41C8E323357a2BaBBC279d7B15' │
│        USDC-StableDebtToken-Aave        │ '0x26205138149713D5341113Dce28A2bB293bbE275' │
│            WBTC-AToken-Aave             │ '0x2A51807dA33E984f48e72328a49bA944ac7FA719' │
│       WBTC-VariableDebtToken-Aave       │ '0x713cec12c4ACeA1DCF4B3B644eb1fA2B6B11c663' │
│        WBTC-StableDebtToken-Aave        │ '0xB1b2113549745Abb594b07c5fBfF14Fd47F4dd21' │
│            WETH-AToken-Aave             │ '0x3A1b2a9b0B718956C182C2592E135E22D9d0aAD2' │
│       WETH-VariableDebtToken-Aave       │ '0x2FF8814d60078814022Bc6926D9C7686206351F5' │
│        WETH-StableDebtToken-Aave        │ '0xb06305b98b78fcb07B50833Aea8F18cbF0a4D81b' │
│            USDT-AToken-Aave             │ '0x2F9C680D75701289f4f5a0289Db1A5240953fC4A' │
│       USDT-VariableDebtToken-Aave       │ '0xEdFF1771d54A5F890547A58C0990630E8B1d5d17' │
│        USDT-StableDebtToken-Aave        │ '0xE9b015e923eE83af5C0DB18927de652Ec77A9Fd2' │
│            USDOX-AToken-Aave            │ '0x04727Df70B92f4d2a2b31b6B64e7eaD1f84a9325' │
│      USDOX-VariableDebtToken-Aave       │ '0xC2ca14f28B760fD16122e7e7D96254318f1C7b07' │
│       USDOX-StableDebtToken-Aave        │ '0x192165C35C0E5541677602F70c757630ac0b1F08' │
│           WSTZBU-AToken-Aave            │ '0xcCfA81d6B553cD21a1777D2A133e9E0176F6576D' │
│      WSTZBU-VariableDebtToken-Aave      │ '0x324F8f21DcDa2A309526687127845356E6A65f8e' │
│       WSTZBU-StableDebtToken-Aave       │ '0xEe870c3DDDF9a07200661dCE7c299Ee6D7F85771' │
│             ZBU-AToken-Aave             │ '0xDa769b37081817CB61026721731640E0B8E14FdB' │
│       ZBU-VariableDebtToken-Aave        │ '0x7dB46153502A240d877df1dc20b34DBB88542576' │
│        ZBU-StableDebtToken-Aave         │ '0x15560D010e431e2b63a643401170bCF566E4a448' │
│          WrappedTokenGatewayV3          │ '0xa8EA796371AAd9e4e89b74955F76D5a60720D1d6' │
│          WalletBalanceProvider          │ '0x5e6Ac0E002310b9Ad19653D0D3526b129B908Bd0' │
│        UiIncentiveDataProviderV3        │ '0xE3Cb929387726ce698d8B6a0b3fAAc6e50D1F75A' │
│          UiPoolDataProviderV3           │ '0xb9D5cBA62B67D967FCd60b66761a8436a4dDaaAA' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘

Mintable Reserves and Rewards
┌─────────┐
│ (index) │
├─────────┤
└─────────┘