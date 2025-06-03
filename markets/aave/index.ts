import { eOptimismNetwork, eBscNetwork } from "./../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers";
import {
  IAaveConfiguration,
  eEthereumNetwork,
  eArbitrumNetwork,
} from "../../helpers/types";

import { CommonsConfig } from "./commons";
import {
  // strategyDAI,
  strategyUSDC,
  // strategyAAVE,
  // strategyLINK,
  strategyWBTC,
  strategyWETH,
  strategyUSDT,
  strategyUSDOX,
  strategyWSTZBU,
  strategyZBU,
  // strategyEURS,
} from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveMarket: IAaveConfiguration = {
  ...CommonsConfig,
  MarketId: "Ethereum Aave Market V2",
  ATokenNamePrefix: "Ethereum",
  StableDebtTokenNamePrefix: "Ethereum",
  VariableDebtTokenNamePrefix: "Ethereum",
  SymbolPrefix: "Eth",
  ProviderId: 31,
  ReservesConfig: {
    // DAI: strategyDAI,
    // LINK: strategyLINK,
    // AAVE: strategyAAVE,
    // EURS: strategyEURS,
    USDC: strategyUSDC,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    USDT: strategyUSDT,
    USDOX: strategyUSDOX,
    WSTZBU: strategyWSTZBU,
    ZBU: strategyZBU,
  },
  ReserveAssets: {
    [eEthereumNetwork.main]: {
      // DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      // LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      // AAVE: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      // EURS: "0xdb25f211ab05b1c97d595516f45794528a807ad8",
    },
    [eEthereumNetwork.sepolia]: {
      USDC: '0x1c9b6337b001704d54B13FBA5C06Fe5D43061a8E',
      WBTC: '0x4647044B0B264C771510FdB2764587B1fc7B599B',
      WETH: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
      USDT: '0x2516196DA3849e85a6887B78edcb48C1eeF2eb89',
      USDOX: '0x8C97603960783e5EbaA727E50c02821C833de5b0',
      WSTZBU: '0xCB2693c8503F51fA42Cfd5952dc078951389448E',
      ZBU: '0x6098Bc6CA2fDFDa186847878726AFBad1d01f13D',
    },
    [eEthereumNetwork.baseSepolia]: {
      USDC: '0xC30752a94e043DDcb9DCf313e8CAEADF5Ad5Aa36',
      WBTC: '0x7d226DcE7B3D201B3FC5e73b8114EFd7c7b8E84B',
      WETH: '0x4200000000000000000000000000000000000006',
      USDT: '0xdB71c6cf8ffc2330ffb6Cb66d049cAdE0c2fa78F',
      USDOX: '0x1825CF470a297aE6355a284330723d7224aA80CE',
      WSTZBU: '0x2A81f942c5DA841dA04964B03e28286800735782',
      ZBU: '0x28f915a466a5D4b66e98f5878fCA1d4254F4DA04',
    },
    [eEthereumNetwork.rinkeby]: {
      // AAVE: ZERO_ADDRESS,
      // DAI: ZERO_ADDRESS,
      // LINK: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      // EURS: ZERO_ADDRESS,
    },
    [eBscNetwork.testnet]: {
      USDC: '0xBA959085D18a436e38C49dfBB4dE1577A04Cfc82',
      WBTC: '0xb5F8e2C38b25D914d7E87562A8fE5f379EfbF720',
      WETH: '0x24C9184c7DA6CA2F3B5cF55E646E9CD581b89dA7',
      USDT: '0x2dfad6c444039A9E56801FbaF819851A485e254A',
      USDOX: '0xc5D09E73599a5ba321bC4A9c4D20B2EaAc9F5680',
      WSTZBU: '0x19f59C5bAabaEf87E1bc1Df1ec8868711ADC22e6',
      ZBU: '0xb9494eE5c37A44df967dc2826df9c9D2269aBB4A',
    },
  },
  StkAaveProxy: {
    [eEthereumNetwork.main]: "0x4da27a545c0c5B758a6BA100e3a049001de870f5",
  },
};

export default AaveMarket;
