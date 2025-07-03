# Zeebu Protocol Deployment Guide

This guide covers all steps required to deploy the protocol, including adding new tokens, configuring oracles, setting up admin wallets, running the deployment, and configuring network RPCs.

---

### 0. Adding a New Network

If you want to deploy to a new network, follow the instructions in [README_ADD_NETWORK.md](./README_ADD_NETWORK.md) to register your network in all required configuration files before proceeding with the deployment.

---

## 1. Adding a Token

**File:** `markets/aave/index.ts`

- Locate the `ReservesConfig` and `ReserveAssets` objects.
- To add a new token:
  1. Import or define its strategy in `reservesConfigs.ts`.
  2. Add the token symbol and strategy to `ReservesConfig`.
  3. Add the token address to each relevant network in `ReserveAssets`.

**Example:**
```ts
import { strategyNEW } from "./reservesConfigs";
// ... existing code ...
ReservesConfig: {
  // ... existing tokens ...
  NEW: strategyNEW,
},
ReserveAssets: {
  [eEthereumNetwork.main]: {
    // ... existing tokens ...
    NEW: "0xYourTokenAddress",
  },
  // ... other networks ...
}
```

---

## 2. Adding an Oracle

**File:** `markets/aave/commons.ts`

- Locate the `ChainlinkAggregator` object.
- Add your token and its oracle address under the relevant network.

**Example:**
```ts
ChainlinkAggregator: {
  [eEthereumNetwork.main]: {
    // ... existing tokens ...
    NEW: "0xYourOracleAddress",
  },
  // ... other networks ...
}
```

---

## 3. Configuring Admin Wallets

**File:** `helpers/constants.ts`

- The following roles are required for deployment and protocol operation:
  - `deployer`
  - `aclAdmin`
  - `emergencyAdmin`
  - `poolAdmin`
  - `addressesProviderRegistryOwner`
  - `treasuryProxyAdmin`
  - `incentivesProxyAdmin`
  - `incentivesEmissionManager`
  - `incentivesRewardsVault`

- **How wallet assignment works:**
  - Each role is mapped to an account index using `{ default: N }`, where `N` is the position in the list of accounts provided by Hardhat.
  - `{ default: 0 }` means the first account (index 0), `{ default: 1 }` means the second account (index 1), and so on.
  - The accounts are determined by your Hardhat configuration (mnemonic or private keys). The order in which they are listed determines their index.
  - **Note:** These accounts are typically derived from the `MNEMONIC` value set in your `.env` file. Make sure your `.env` file is configured properly with the correct mnemonic phrase to generate the intended wallets.

- **Assigning arbitrary EOA addresses:**
  - You can also assign any admin role to a specific externally owned account (EOA) address, not just to an account derived from your mnemonic.
  - To do this, simply set the value to the desired address as a string, e.g., `aclAdmin: "0xYourAdminEOAAddressHere"`.
  - This is useful for production deployments where you want to use a multisig or a secure admin wallet that is not managed by your deployer mnemonic.
  - **Note:** If you assign an EOA address directly, Hardhat will not have the private key for that account unless you provide it separately. This is fine for roles that only need to be set as an admin, but if you need to sign transactions as that admin during deployment, you must ensure the private key is available to Hardhat.

**Example:**
Suppose your Hardhat node or config provides these accounts:
- 0xAAA... (index 0)
- 0xBBB... (index 1)
- 0xCCC... (index 2)

You can assign roles as follows:
```ts
export const DEFAULT_NAMED_ACCOUNTS = {
  deployer: { default: 0 },         // 0xAAA... (first wallet)
  aclAdmin: { default: 1 },         // 0xBBB... (second wallet)
  emergencyAdmin: { default: 2 },   // 0xCCC... (third wallet)
  poolAdmin: { default: 0 },        // 0xAAA... (first wallet)
  // ...etc.
};
```
- To use a different wallet for a role, just change the index number.
- You can override these in your Hardhat config or via CLI.

**Account Index Table:**

| Index | Account Used         | How to Reference in Config |
|-------|----------------------|---------------------------|
| 0     | First wallet/address | `{ default: 0 }`           |
| 1     | Second wallet        | `{ default: 1 }`           |
| 2     | Third wallet         | `{ default: 2 }`           |
| ...   | ...                  | ...                       |

**How to check your account order:**
You can see which accounts Hardhat is using (and their order) by running:
```sh
npx hardhat accounts --network <your-network>
```
This will list the addresses and their order, so you can assign the correct index to each role.

---

## 4. Setting the Network RPC

**File:** `hardhat.config.ts`

- Networks are configured in the `networks` section.
- To add or update an RPC for a network (e.g., `main`), ensure the `getCommonNetworkConfig` function is called with the correct network name and chain ID.

**Example:**
```ts
networks: {
  main: getCommonNetworkConfig(eEthereumNetwork.main, 1),
  // ... other networks ...
}
```
- The actual RPC URL is typically set via environment variables or in the `getCommonNetworkConfig` helper.

---

## 5. Running the Deployment

To deploy to a specific network (e.g., `main`), use:

```sh
HARDHAT_NETWORK=main npx hardhat deploy
```

- Make sure your environment variables (such as RPC URLs and private keys) are set up as required by your Hardhat configuration.

---

## 6. Summary Checklist

- [ ] If adding a new network, follow the instructions in [README_ADD_NETWORK.md](./README_ADD_NETWORK.md) before proceeding
- [ ] Add your token to `markets/aave/index.ts` (`ReservesConfig` and `ReserveAssets`)
- [ ] Add your oracle to `markets/aave/commons.ts` (`ChainlinkAggregator`)
- [ ] Ensure all required admin wallets are set in `helpers/constants.ts`
- [ ] Confirm the network RPC is set in `hardhat.config.ts`
- [ ] Set up all required environment variables (e.g., RPC URLs, private keys, MNEMONIC, INFURA/ALCHEMY keys, MARKET_NAME, etc.)
- [ ] Run the deployment command for your target network