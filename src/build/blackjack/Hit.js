import { CountPoints } from "./CountPoints";

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function Hit(playerCards, remainingDeck, shownDealerCards, dealerCards) {
  // if playerCards.length === 5:
  //    then should just return everything as is (means entire baord doesnt change), 
  //    but also return hit:error = true --> toast popup
  // alternative, the button can just be disabled
  let newCard = DrawCard(remainingDeck)
  let playerCount = 0
  let playerGameCondition = 2
  let endOfGame = false

  playerCards.push(newCard)

  playerCount = CountPoints(playerCards)

  if (playerCount > 21) {
    playerGameCondition = -1
    endOfGame = true
  }
  else if (playerCards.length == 5 && playerCount <= 21){
    playerGameCondition = 1
    endOfGame = true
    // possible implementation of return Win Screen here
  }else{
    shownDealerCards = dealerCards
  }

  return {playerCards, remainingDeck, playerCount, playerGameCondition, endOfGame, shownDealerCards}
}