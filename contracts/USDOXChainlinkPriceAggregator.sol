// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.0;

import './interfaces/IChainlinkAggregator.sol';

contract USDOXChainlinkPriceAggregator is IChainlinkAggregator {
  int256 public USDOX_USD_PRICE = 100000000; // $1.00 USD with 8 decimals
  uint256 public currentRoundId = 1;

  // Stores the price for each round ID
  mapping(uint256 => int256) private roundAnswers;

  // Stores the timestamp for each round ID
  mapping(uint256 => uint256) private roundTimestamps;

  event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 timestamp);
  event NewRound(uint256 indexed roundId, address indexed startedBy);

  /**
   * @notice Returns the number of decimals for the price feed.
   * @dev Chainlink price feeds typically use 8 decimals.
   */
  function decimals() external view override returns (uint8) {
    return 8;
  }

  function aggregator() external view returns (address) {
    return address(this);
  }

  function description() external view override returns (string memory) {
    return 'USDOX / USD';
  }

  /**
   * @notice Returns the latest USDOX/USD price with 8 decimals.
   * The price is fixed at $1.00 USD per USDOX by default.
   */
  function latestAnswer() external view override returns (int256) {
    return USDOX_USD_PRICE;
  }

  /**
   * @notice Returns the latest timestamp when the price was updated.
   */
  function latestTimestamp() external view override returns (uint256) {
    return roundTimestamps[currentRoundId];
  }

  /**
   * @notice Returns the latest round ID.
   */
  function latestRound() external view override returns (uint256) {
    return currentRoundId;
  }

  /**
   * @notice Returns the price for a specific round.
   * @param roundId The round ID to query.
   */
  function getAnswer(uint256 roundId) external view override returns (int256) {
    return roundAnswers[roundId];
  }

  /**
   * @notice Returns the timestamp for a specific round.
   * @param roundId The round ID to query.
   */
  function getTimestamp(uint256 roundId) external view override returns (uint256) {
    return roundTimestamps[roundId];
  }

  /**
   * @notice Sets a new USDOX/USD price for testing purposes.
   * @dev This function should only be available in test environments.
   * @param newPrice The new price to set.
   */
  function setPrice(int256 newPrice) external {
    USDOX_USD_PRICE = newPrice;
    emit AnswerUpdated(newPrice, currentRoundId, block.timestamp);
    _startNewRound(newPrice);
  }

  /**
   * @notice Internal function to start a new round.
   * Emits the `NewRound` event.
   * @param newPrice The price to associate with the new round.
   */
  function _startNewRound(int256 newPrice) internal {
    currentRoundId++;
    roundAnswers[currentRoundId] = newPrice;
    roundTimestamps[currentRoundId] = block.timestamp;

    emit NewRound(currentRoundId, msg.sender);
  }
}
