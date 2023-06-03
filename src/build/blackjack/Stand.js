import { CountPoints } from "./CountPoints";

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function Stand(
  playerCount,
  dealerCount,
  shownDealerCards,
  remainingDeck,
  playerGameCondition
) {
  if (playerGameCondition === 1) {
    // possible implementation of return Win Screen here
    return ({playerGameCondition, shownDealerCards, dealerCount})
  }
  else if (dealerCount > 16) {
    if (playerCount > dealerCount) {
      playerGameCondition = 1
      return ({playerGameCondition, shownDealerCards, dealerCount})
    } else if (playerCount < dealerCount) {
      playerGameCondition = -1
      return ({playerGameCondition, shownDealerCards, dealerCount})
    } else {
      playerGameCondition = 0
      return ({playerGameCondition, shownDealerCards, dealerCount})
    }
  } else {
    while (dealerCount <= 16) {
      let drawnCard = DrawCard(remainingDeck)
      shownDealerCards.push(drawnCard)
      dealerCount = CountPoints(shownDealerCards)
    }
    if (dealerCount > 21) {
      playerGameCondition = 1
      return ({playerGameCondition, shownDealerCards, dealerCount})
    } else if (playerCount < dealerCount) {
      playerGameCondition = 1
      return ({playerGameCondition, shownDealerCards, dealerCount})
    } else if (playerCount < dealerCount) {
      playerGameCondition = -1
      return ({playerGameCondition, shownDealerCards, dealerCount})
    } else {
      playerGameCondition = 0
      return ({playerGameCondition, shownDealerCards, dealerCount})
    }
  }
}