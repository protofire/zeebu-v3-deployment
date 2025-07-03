## How to Add a New Network

To make a new network available for deployment (so it can be used with the `HARDHAT_NETWORK=yournetwork npx hardhat deploy` command), you must update several files and configuration points:

### 1. Define the Network Enum

**File:** `helpers/types.ts`

- Add your new network to the appropriate enum (e.g., `eEthereumNetwork`, `ePolygonNetwork`, etc.) or create a new enum if it's a new chain family.
- If it's a new family, also update the `eNetwork` union type.

**Example:**
```ts
export enum eEthereumNetwork {
  // ... existing
  mynet = "mynet",
}
```

### 2. Add a Config Name

**File:** `helpers/market-config-helpers.ts`

- Add a new entry to the `ConfigNames` enum if your network will have a distinct market config.

**Example:**
```ts
export enum ConfigNames {
  // ... existing
  MyNet = "MyNet",
}
```

### 3. Add the Network to the Market Config

**File:** `markets/aave/index.ts`

- Add your network to the `ReserveAssets` and any other relevant config objects.

**Example:**
```ts
ReserveAssets: {
  // ... existing
  [eEthereumNetwork.mynet]: {
    // token addresses
  },
}
```

### 4. Add the Network's RPC URL

**File:** `helpers/hardhat-config-helpers.ts`

- Add your network to the `NETWORKS_RPC_URL` object.
- If needed, add to `LIVE_NETWORKS` and `GAS_PRICE_PER_NET`.

**Example:**
```ts
[eEthereumNetwork.mynet]: "https://rpc.mynet.org",
```

### 5. Register the Network in Hardhat

**File:** `hardhat.config.ts`

- Add your network to the `networks` section, using `getCommonNetworkConfig` with the correct enum and chain ID.

**Example:**
```ts
[eEthereumNetwork.mynet]: getCommonNetworkConfig(eEthereumNetwork.mynet, 12345),
```

### 6. Add to Etherscan/Block Explorer (Optional)

- If you want to use contract verification, add your network to the `etherscan.customChains` array in `hardhat.config.ts`. Otherwise, contract verification will not be possible for that network.

---

## 7. Summary Checklist

- [ ] Add your network to the appropriate enum in `helpers/types.ts` (e.g., `eEthereumNetwork`)
- [ ] Add a config name to `helpers/market-config-helpers.ts` (`ConfigNames` enum)
- [ ] Add your network to the market config in `markets/aave/index.ts` (`ReserveAssets` and other relevant objects)
- [ ] Add your network's RPC URL to `helpers/hardhat-config-helpers.ts` (`NETWORKS_RPC_URL` and others if needed)
- [ ] Register your network in the `networks` section of `hardhat.config.ts`
- [ ] (Optional) Add your network to `etherscan.customChains` in `hardhat.config.ts` for contract verification