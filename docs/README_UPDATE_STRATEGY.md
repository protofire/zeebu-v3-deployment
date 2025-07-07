# Update Interest Rate Strategy Script Instructions

This document outlines the process for deploying and linking a new interest rate strategy to a token using the [`deploy-and-link-strategies.ts`](../tasks/misc/deploy-and-link-strategies.ts) script.

---

## What is this script changing?

The `deploy-and-link-strategies.ts` script automates two critical protocol operations:

1. **Deploys a New Interest Rate Strategy Contract:**
   - Using the parameters defined in the hardcoded `strategy` object, the script deploys a new interest rate strategy contract. This contract governs the interest rate model for a specific token/reserve.

2. **Links the New Strategy to a Token/Reserve:**
   - The script updates the protocol configuration via the `PoolConfigurator`, setting the interest rate strategy for the specified token/reserve to the new contract. All subsequent borrow/lend operations for that token will use the new model.

> **Note:** These changes are on-chain and take effect immediately.

---

## Why is it necessary to deploy a new interest rate strategy?

Interest rate strategy contracts are immutable by design. Any change to the parameters—whether for risk management, market adaptation, or protocol upgrades requires deploying a new contract. The protocol then updates the reference for the relevant token/reserve to point to the new strategy.

This approach ensures:
- **Immutability:** Strategy logic and parameters cannot be altered post deployment, providing strong guarantees to users.
- **Auditability:** Each contract is a permanent, auditable record of the parameters in use.
- **Flexibility:** Multiple tokens can share a strategy if parameters match, or use custom strategies as needed.

> In short: Parameter changes always require a new deployment and relinking due to contract immutability.

---

## 1. Required Parameters

When running the script, provide the following parameters:

- `--symbol` (string): Token symbol (e.g., USDT, DAI). Used for logging and linking.
- `--market` (string): Market to use reservesConfigs from (e.g., aave, polygon, avalanche, etc.).
- `--token` (address): Address of the token to link the strategy to.
- `--provider` (address): Address of the PoolAddressesProvider.
- `--configurator` (address): Address of the PoolConfigurator.
- `--network` (string, optional): Hardhat network to use (must be configured in `hardhat.config.ts`).

---

## 2. Edit the Hardcoded Strategy Object

**Important:** The script uses a hardcoded `strategy` object at the top of [`deploy-and-link-strategies.ts`](../tasks/misc/deploy-and-link-strategies.ts). Edit this object directly to set the desired interest rate parameters **before running the script**.

**Example `strategy` object:**

```ts
const strategy: IInterestRateStrategyParams = {
  name: "rateStrategyVolatileOne",
  optimalUsageRatio: parseUnits("0.45", 27).toString(),
  baseVariableBorrowRate: parseUnits("0.051", 27).toString(),
  variableRateSlope1: parseUnits("0.07", 27).toString(),
  variableRateSlope2: parseUnits("3", 27).toString(),
  stableRateSlope1: parseUnits("0.07", 27).toString(),
  stableRateSlope2: parseUnits("3", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};
```

**Field explanations:**
- `name`: (string) Label for the strategy (for reference/logging only)
- `optimalUsageRatio`: (string) Utilization rate at which the variable borrow rate slope changes
- `baseVariableBorrowRate`: (string) Base variable borrow rate
- `variableRateSlope1`: (string) Slope before optimal usage
- `variableRateSlope2`: (string) Slope after optimal usage
- `stableRateSlope1`: (string) Slope before optimal usage
- `stableRateSlope2`: (string) Slope after optimal usage
- `baseStableRateOffset`: (string) Offset for the base stable rate
- `stableRateExcessOffset`: (string) Additional offset when above optimal
- `optimalStableToTotalDebtRatio`: (string) Optimal ratio of stable to total debt

> All values should be stringified numbers, typically using `parseUnits(value, 27).toString()` for 27 decimals.

---

## 3. Example Command

```sh
npx hardhat deploy-and-link-strategies \
  --symbol USDT \
  --market aave \
  --token 0xdac17f958d2ee523a2206206994597c13d831ec7 \
  --provider 0xb3837043E2b76Cf4E6920fB25179E59d943B70b7 \
  --configurator 0x12A49254C83C97B4302C9d9c1aD8aFf2EF92471C \
  --network mainnet
```
