import { Hit } from "./Hit";
import { Stand } from "./Stand";

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function Double(
  playerCards,
  dealerCount,
  shownDealerCards,
  remainingDeck,
  playerGameCondition
) {
  let playerCount = 0
  let hit = Hit(playerCards, remainingDeck)
  let stand = Stand(
    hit.playerCount,
    dealerCount,
    shownDealerCards,
    hit.remainingDeck,
    hit.playerGameCondition
  )
  // DoubleBet Amount
  playerGameCondition = stand.playerGameCondition
  dealerCount = stand.dealerCount
  shownDealerCards = stand.shownDealerCards
  playerCards = hit.playerCards
  playerCount = hit.playerCount

  return(
    {
      playerCount,
      playerGameCondition,
      dealerCount,
      shownDealerCards,
      playerCards
    }
  )

}