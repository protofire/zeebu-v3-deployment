import {
  AssetType,
  eAvalancheNetwork,
  eFantomNetwork,
  eHarmonyNetwork,
  eOptimismNetwork,
  ePolygonNetwork,
  TransferStrategy,
  eBaseNetwork,
  eBscNetwork,
} from "./../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  ICommonConfiguration,
  eEthereumNetwork,
  eArbitrumNetwork,
} from "../../helpers/types";
import {
  rateStrategyStableOne,
  rateStrategyStableTwo,
  rateStrategyVolatileOne,
} from "./rateStrategies";
// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: "Commons Aave Market",
  ATokenNamePrefix: "Ethereum",
  StableDebtTokenNamePrefix: "Ethereum",
  VariableDebtTokenNamePrefix: "Ethereum",
  SymbolPrefix: "Eth",
  ProviderId: 8080,
  OracleQuoteCurrencyAddress: ZERO_ADDRESS,
  OracleQuoteCurrency: "USD",
  OracleQuoteUnit: "8",
  WrappedNativeTokenSymbol: "WETH",
  ChainlinkAggregator: {
    [eEthereumNetwork.main]: {
      USDC: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6",
      WBTC: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
      WETH: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
      USDT: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D",
      USDOX: "0x5c66322CA59bB61e867B28195576DbD8dA4b08dE",//.....DAI
      WSTZBU: '0xC7e9b623ed51F033b32AE7f1282b1AD62C28C183',//....LINK
      ZBU: "0xF02C1e2A3B77c1cacC72f72B44f7d0a4c62e4a85",//.......AAVE
    },
    [eEthereumNetwork.sepolia]: {
      USDC: '0https://sepolia.etherscan.io/tx/0xdc2aa0cf98f210c53a07871faf3b76049270c2f8b2fdb6f5b673140e70b1a10cxA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E',
      WBTC: '0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43',
      WETH: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
      USDT: '0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E',
      USDOX: '0x3268F7B3860d6d41135E53A7c053EFd26E8F7Bd7',
      WSTZBU: '0x0FCf7bCbfD45eCe6724c43EE7233E21261098E53',
      ZBU: '0xA83fE18C7AcccBFeCB461122c7645f9FcbB6e043',
      DLP: '0xA83fE18C7AcccBFeCB461122c7645f9FcbB6e043',
    },
    [eEthereumNetwork.baseSepolia]: {
      USDC: '0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165',
      WBTC: '0x0FB99723Aee6f420beAD13e6bBB79b7E6F034298',
      WETH: '0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1',
      USDT: '0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165',
      USDOX: '0xB4b83BFc71bedc0fc793C462ec5eB34BbB0f61a8',
      WSTZBU: '0x6081aA0C60D3562F1F1c52eA8C0f004Ee406B833',
      ZBU: '0x45347837B2Ab23cAe89F8C9bA80e11cd3a6Fd8fa',
    },
    [eEthereumNetwork.rinkeby]: {
      LINK: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      DAI: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      EURS: ZERO_ADDRESS,
    },
    [eBscNetwork.testnet]: {
      USDC: '0x90c069C4538adAc136E051052E14c1cD799C41B7',
      WBTC: '0x5741306c21795FdCBb9b265Ea0255F499DFe515C',
      WETH: '0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7',
      USDT: '0xEca2605f0BCF2BA5966372C99837b1F182d3D620',
      USDOX: '0x83de4272a6b4a62e099A5dBeDf597747F59288D7',
      WSTZBU: '0xac537f752eDfc5fe9064a21dBf31dc32Bd551487',
      ZBU: '0xD119F31dA03362a40EB2BF259aA8B6B6B974AdB5',
    },
  },
  ReserveFactorTreasuryAddress: {
    [eEthereumNetwork.kovan]: "0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c",
    [eEthereumNetwork.main]: "0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c",
    [eArbitrumNetwork.arbitrumTestnet]:
      "0xeC67987831C4278160D8e652d3edb0Fc45B3766d",
    [eEthereumNetwork.rinkeby]: ZERO_ADDRESS,
    [eEthereumNetwork.sepolia]: ZERO_ADDRESS,
    [eEthereumNetwork.baseSepolia]: ZERO_ADDRESS,
    [eBscNetwork.testnet]: ZERO_ADDRESS,
  },
  FallbackOracle: {
    [eEthereumNetwork.kovan]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eArbitrumNetwork.arbitrum]: ZERO_ADDRESS,
    [eArbitrumNetwork.arbitrumTestnet]: ZERO_ADDRESS,
    [eEthereumNetwork.rinkeby]: ZERO_ADDRESS,
    [eEthereumNetwork.sepolia]: ZERO_ADDRESS,
    [eEthereumNetwork.baseSepolia]: ZERO_ADDRESS,
    [eBscNetwork.testnet]: ZERO_ADDRESS,
  },
  ReservesConfig: {},
  IncentivesConfig: {
    enabled: {
      [eArbitrumNetwork.arbitrum]: true,
      [ePolygonNetwork.polygon]: true,
      [eOptimismNetwork.main]: true,
      [eFantomNetwork.main]: true,
      [eHarmonyNetwork.main]: true,
      [eAvalancheNetwork.avalanche]: true,
    },
    rewards: {
      [eArbitrumNetwork.arbitrumTestnet]: {
        CRV: ZERO_ADDRESS,
        REW: ZERO_ADDRESS,
        BAL: ZERO_ADDRESS,
        StkAave: ZERO_ADDRESS,
      },
      [eEthereumNetwork.kovan]: {
        StkAave: ZERO_ADDRESS,
      },
      [eEthereumNetwork.rinkeby]: {
        StkAave: ZERO_ADDRESS,
      },
    },
    rewardsOracle: {
      [eArbitrumNetwork.arbitrumTestnet]: {
        StkAave: ZERO_ADDRESS,
        CRV: ZERO_ADDRESS,
        REW: ZERO_ADDRESS,
        BAL: ZERO_ADDRESS,
      },
      [eEthereumNetwork.kovan]: {
        StkAave: ZERO_ADDRESS,
      },
      [eEthereumNetwork.rinkeby]: {
        StkAave: ZERO_ADDRESS,
      },
    },
    incentivesInput: {
      [eArbitrumNetwork.arbitrumTestnet]: [
        {
          emissionPerSecond: "34629756533",
          duration: 7890000,
          asset: "DAI",
          assetType: AssetType.AToken,
          reward: "CRV",
          rewardOracle: "0",
          transferStrategy: TransferStrategy.PullRewardsStrategy,
          transferStrategyParams: "0",
        },
        {
          emissionPerSecond: "300801036720127500",
          duration: 7890000,
          asset: "USDC",
          assetType: AssetType.AToken,
          reward: "REW",
          rewardOracle: "0",
          transferStrategy: TransferStrategy.PullRewardsStrategy,
          transferStrategyParams: "0",
        },
        {
          emissionPerSecond: "300801036720127500",
          duration: 7890000,
          asset: "LINK",
          assetType: AssetType.AToken,
          reward: "REW",
          rewardOracle: "0",
          transferStrategy: TransferStrategy.PullRewardsStrategy,
          transferStrategyParams: "0",
        },
      ],
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      // assets: ["USDC", "USDT", "DAI", "EURS"],
      assets: ["USDC", "USDT"],
    },
  },
  L2PoolEnabled: {
    [eArbitrumNetwork.arbitrum]: true,
    [eArbitrumNetwork.goerliNitro]: true,
    [eArbitrumNetwork.arbitrumTestnet]: true,
    [eOptimismNetwork.main]: true,
    [eOptimismNetwork.testnet]: true,
    [eBaseNetwork.base]: true,
    [eBaseNetwork.baseGoerli]: true,
    [eEthereumNetwork.sepolia]: false,
    [eEthereumNetwork.baseSepolia]: false,
    [eBscNetwork.testnet]: false,
  },
  ParaswapRegistry: {
    [eEthereumNetwork.main]: "0xa68bEA62Dc4034A689AA0F58A76681433caCa663",
    [ePolygonNetwork.polygon]: "0xca35a4866747Ff7a604EF7a2A7F246bb870f3ca1",
    [eAvalancheNetwork.avalanche]: "0xfD1E5821F07F1aF812bB7F3102Bfd9fFb279513a",
    [eFantomNetwork.main]: "0x161383b5dAFc1cc05Ec058e5B0b0703BA175bdA6",
    [eArbitrumNetwork.arbitrum]: "0xdC6E2b14260F972ad4e5a31c68294Fba7E720701",
    [eBaseNetwork.base]: "0x7e31b336f9e8ba52ba3c4ac861b033ba90900bb3",
    [eBaseNetwork.baseGoerli]: "0x7e31b336f9e8ba52ba3c4ac861b033ba90900bb3",
    [eEthereumNetwork.tenderly]: "0xa68bEA62Dc4034A689AA0F58A76681433caCa663",
    [eOptimismNetwork.main]: "0x6e7bE86000dF697facF4396efD2aE2C322165dC3",
  },
  FlashLoanPremiums: {
    total: 0.0005e4,
    protocol: 0.0004e4,
  },
  RateStrategies: {
    rateStrategyVolatileOne,
    rateStrategyStableOne,
    rateStrategyStableTwo,
  },
};
