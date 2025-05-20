Accounts after deployment
========
┌─────────┬──────────────────────────────────┬──────────────────────────────────────────────┬──────────────────┐
│ (index) │               name               │                   account                    │     balance      │
├─────────┼──────────────────────────────────┼──────────────────────────────────────────────┼──────────────────┤
│    0    │            'deployer'            │ '0x401bF2487073DDdA4Fc7FA9C215d32DeA90e6af0' │  '7.762015681'   │
│    1    │            'aclAdmin'            │ '0x401bF2487073DDdA4Fc7FA9C215d32DeA90e6af0' │  '7.762015681'   │
│    2    │         'emergencyAdmin'         │ '0x401bF2487073DDdA4Fc7FA9C215d32DeA90e6af0' │  '7.762015681'   │
│    3    │           'poolAdmin'            │ '0x401bF2487073DDdA4Fc7FA9C215d32DeA90e6af0' │  '7.762015681'   │
│    4    │ 'addressesProviderRegistryOwner' │ '0x401bF2487073DDdA4Fc7FA9C215d32DeA90e6af0' │  '7.762015681'   │
│    5    │       'treasuryProxyAdmin'       │ '0x6B6EBb930b969a312Bf14813b6d0B1F397EF690B' │ '0.900557222572' │
│    6    │      'incentivesProxyAdmin'      │ '0x6B6EBb930b969a312Bf14813b6d0B1F397EF690B' │ '0.900557222572' │
│    7    │   'incentivesEmissionManager'    │ '0x401bF2487073DDdA4Fc7FA9C215d32DeA90e6af0' │  '7.762015681'   │
│    8    │     'incentivesRewardsVault'     │ '0x401bF2487073DDdA4Fc7FA9C215d32DeA90e6af0' │  '7.762015681'   │
└─────────┴──────────────────────────────────┴──────────────────────────────────────────────┴──────────────────┘

Deployments
===========
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                 │                   address                    │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│      PoolAddressesProviderRegistry      │ '0x61262F82A386999C75bdA0af0b672237E36810C7' │
│               SupplyLogic               │ '0xbFcA7EEC460Dc3845D6ed6a2607fbEAF3bA10869' │
│               BorrowLogic               │ '0xF3f6d13e3Af823DBd4A46f8ced3464e93CE77B20' │
│            LiquidationLogic             │ '0x533FCdaC496f29C297B52125ABb0C137176C9426' │
│               EModeLogic                │ '0xD59A5f58F20a774a38a99b7B7CFFE6eC36202B74' │
│               BridgeLogic               │ '0xD176E73118a6C14AC2DA6d762C79CA1992CE9270' │
│            ConfiguratorLogic            │ '0xB7AabdC573aee4e65c5e143e161282444b30338c' │
│             FlashLoanLogic              │ '0x2A7EB3Ad6937e53D680B91Bb3A561220Db05F6A7' │
│                PoolLogic                │ '0x7DCe87E72aA5A67839aA772750C0ac99145A828A' │
│              TreasuryProxy              │ '0x274CAaC704a0D17FdA52391913EB67f78e41ff5b' │
│           Treasury-Controller           │ '0x1fd6f94240f291392B057077561862559881e516' │
│         Treasury-Implementation         │ '0x3736590bD67482Dea6Ac98B8eA729E5EF16323A9' │
│       PoolAddressesProvider-Aave        │ '0xf7A30776861c113C36723b2c72E5223ae2552ec3' │
│          PoolDataProvider-Aave          │ '0xF47E0A89cec5f4881A30e7Ad000BaA9C354C816b' │
│           Pool-Implementation           │ '0x1b84c42C2413C8C4f86376f413171372e9783F74' │
│     PoolConfigurator-Implementation     │ '0x0a0f15ea041717D9B85dDCacA885D337b152Cc69' │
│           ReservesSetupHelper           │ '0xb8f25531d910135ef0635d955932e102Ba73d49B' │
│             ACLManager-Aave             │ '0xa69Aa57f332d4937A12D1dEBF941c669065Ea1D7' │
│             AaveOracle-Aave             │ '0xD2b329FC99Cb9546fbb32F3FFc87Fa4Cdd5cDCB3' │
│             Pool-Proxy-Aave             │ '0x3209a034368665a5BDEFc2478c6eC7e275b37aDF' │
│       PoolConfigurator-Proxy-Aave       │ '0x820Eb64EC03FF326071Bc77f2Cf293721E417E5F' │
│             EmissionManager             │ '0x3f8C443c15f97cd1d005039964931C16D4387F91' │
│       IncentivesV2-Implementation       │ '0xd3b9CA8992aF306e2943F63f95769395dD9ffA9D' │
│             IncentivesProxy             │ '0x58355dc13438795ed3a194Ba641eD27607e2fE56' │
│               AToken-Aave               │ '0x56f92d0d4fD0B32157228cf692093645C7c9c307' │
│       DelegationAwareAToken-Aave        │ '0x509EA74C482B2b6ca462D5D90d1978e86755c372' │
│          StableDebtToken-Aave           │ '0x10394f5767151280d571634f824416e334d2A77B' │
│         VariableDebtToken-Aave          │ '0x1Fa9EcFAff56bd737DFd3C9F7181b629AaDd5047' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0x8fCB18000fF78B2Bd3F0e7d47B265C91ad6a6112' │
│  ReserveStrategy-rateStrategyStableOne  │ '0x5bb27fBFa34F1341a3315622f898FC5d68c4C69D' │
│  ReserveStrategy-rateStrategyStableTwo  │ '0xE6030eA407dfb142103090a41f94eb50d17D4AB8' │
│            USDC-AToken-Aave             │ '0xaB6908611C6d5C7f928c637efA3F65ea947D750E' │
│       USDC-VariableDebtToken-Aave       │ '0x39c18b87745EFadCEC248E9Ed9D1bBaDf3d486cf' │
│        USDC-StableDebtToken-Aave        │ '0xc2B991a8aA56a0CD7fCB1771D5589870eC821831' │
│            WBTC-AToken-Aave             │ '0xc42469590402eD5039Be256181b6525E94F7D90f' │
│       WBTC-VariableDebtToken-Aave       │ '0xBA7bA76B60022db1F111E978870787A93686Cc33' │
│        WBTC-StableDebtToken-Aave        │ '0x0C051b4B7379fd6fa4CDd57CF7b84351ABBB485d' │
│            WETH-AToken-Aave             │ '0x6F55F33ec3c4DE7a927525e51769A423F529ecf8' │
│       WETH-VariableDebtToken-Aave       │ '0x88A0187211aE940fd68401816bdA659754A10fef' │
│        WETH-StableDebtToken-Aave        │ '0xC069f73624D9569a1555F2322AAe8C1f7AFDd855' │
│            USDT-AToken-Aave             │ '0x4A8a133aEE60f72ed43F2Fa5F1bF549a8E3E58d0' │
│       USDT-VariableDebtToken-Aave       │ '0xEF3A3CCF48D8E81fF691C6077A4AD1dE3428dCb9' │
│        USDT-StableDebtToken-Aave        │ '0x7dc51488F6ea587A13D316476f1218dEB8dd3A28' │
│            USDOX-AToken-Aave            │ '0xA4Ed15B281182C91Da401B61F03a88e508142a6c' │
│      USDOX-VariableDebtToken-Aave       │ '0x126C5B30378C74FaA23C9DD58AaB1541aaDbd86a' │
│       USDOX-StableDebtToken-Aave        │ '0x747838B1773190C5A861c5909919c6B2008807DE' │
│           WSTZBU-AToken-Aave            │ '0xDEfA9b03595edcF5D82EfBC0e7f2f6d2a3598ee3' │
│      WSTZBU-VariableDebtToken-Aave      │ '0xB08AbC201FAD948F31067ca259Aa2BCE356F7Bb9' │
│       WSTZBU-StableDebtToken-Aave       │ '0x86f60Fca5De5549A341A86168F44Df378f9d21AF' │
│             ZBU-AToken-Aave             │ '0x22a54466022671df0d4Bd57A88D6105fC3287FC4' │
│       ZBU-VariableDebtToken-Aave        │ '0xBE02017Da4d13d52D02Eb51E1C438EB6b6044f9b' │
│        ZBU-StableDebtToken-Aave         │ '0xbB36D946D1C311D005F1E2525E9d3DCB675CBEf6' │
│          WrappedTokenGatewayV3          │ '0xDF5276f995B8e678cA07a921c2736c1d7383E1d5' │
│          WalletBalanceProvider          │ '0xFa34fCcbb1b2fCad23D9C01113B856Bdaa6A438f' │
│        UiIncentiveDataProviderV3        │ '0xb0f3bCc0D3424731d9bd45Fd7310d75A9f9F1d60' │
│          UiPoolDataProviderV3           │ '0xa35F8D9AEa7Ff9ea84615Cf78F53f1DFaF4C2c20' │
│           ZBUPriceAggregator            │ '0xeaD3b80A10000226b99723db829eA10E7c223835' │
│          WSTZBUPriceAggregator          │ '0xc6a80b3aA6D2508C933C55837B88Cfc74a5EED2b' │
│          USDOXPriceAggregator           │ '0x51542dF2E0DdF1e4E7dd8a8d5F350be57507e63c' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘

Mintable Reserves and Rewards
┌─────────┐
│ (index) │
├─────────┤
└─────────┘