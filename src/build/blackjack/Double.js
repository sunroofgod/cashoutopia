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
  // if playerCards.length >= 3:
  //    then should just return everything as is (means entire baord doesnt change), 
  //    but also return double:error = true --> toast popup
  // alternative, the button can just be disabled
  let playerCount = 0
  let endOfGame = true
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
      playerCards,
      endOfGame
    }
  )

}