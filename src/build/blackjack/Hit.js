import { CountPoints } from "./CountPoints";

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function Hit(playerCards, remainingDeck) {
  let newCard = DrawCard(remainingDeck)
  let playerCount = 0
  let playerLose = false
  let playerWin = false

  playerCards.push(newCard)

  playerCount = CountPoints(playerCards)

  if (playerCount > 21) {
    playerLose = true
  }
  if (playerCards.length == 5 && playerCount <= 21){
    playerWin = true
  }

  return {playerCards, remainingDeck, playerCount, playerLose, playerWin}
}