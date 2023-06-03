import { CountPoints } from "./CountPoints";

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function Hit(playerCards, remainingDeck) {
  let newCard = DrawCard(remainingDeck)
  let playerCount = 0
  let playerGameCondition = 0

  playerCards.push(newCard)

  playerCount = CountPoints(playerCards)

  if (playerCount > 21) {
    playerGameCondition = -1
  }
  if (playerCards.length == 5 && playerCount <= 21){
    playerGameCondition = 1
    // possible implementation of return Win Screen here
  }

  return {playerCards, remainingDeck, playerCount, playerGameCondition}
}