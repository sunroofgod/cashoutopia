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
  let endOfGame = true
  if (playerGameCondition === 1) {
    // possible implementation of return Win Screen here
    return ({playerGameCondition, shownDealerCards, dealerCount, endOfGame})
  }
  else if (dealerCount > 16) {
    if (playerCount > dealerCount) {
      playerGameCondition = 1
      return ({playerGameCondition, shownDealerCards, dealerCount, endOfGame})
    } else if (playerCount < dealerCount) {
      playerGameCondition = -1
      return ({playerGameCondition, shownDealerCards, dealerCount, endOfGame})
    } else {
      playerGameCondition = 0
      return ({playerGameCondition, shownDealerCards, dealerCount, endOfGame})
    }
  } else {
    while (dealerCount <= 16) {
      let drawnCard = DrawCard(remainingDeck)
      shownDealerCards.push(drawnCard)
      dealerCount = CountPoints(shownDealerCards)
    }
    if (dealerCount > 21) {
      playerGameCondition = 1
      return ({playerGameCondition, shownDealerCards, dealerCount, endOfGame})
    } else if (playerCount < dealerCount) {
      playerGameCondition = 1
      return ({playerGameCondition, shownDealerCards, dealerCount, endOfGame})
    } else if (playerCount < dealerCount) {
      playerGameCondition = -1
      return ({playerGameCondition, shownDealerCards, dealerCount, endOfGame})
    } else {
      playerGameCondition = 0
      return ({playerGameCondition, shownDealerCards, dealerCount, endOfGame})
    }
  }
}