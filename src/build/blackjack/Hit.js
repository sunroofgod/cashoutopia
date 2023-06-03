import { SelectSuit } from "@/components/games/blackjack/temp/SelectSuit";
import { CountPoints } from "./CountPoints";

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function Hit(playerCards, remainingDeck) {
  let newCard = DrawCard(remainingDeck)
  let properNewCard = []

  let playerCount = 0
  let CardNumber = newCard.card;
  let Suit = SelectSuit(newCard.suit);
  let Black = true
  let playerLose = false
  let playerWin = false

  properNewCard = [CardNumber, Suit, Black]

  playerCards.push(properNewCard)

  playerCount = CountPoints(playerCards)

  if (playerCount > 21) {
    playerLose = true;
  }
  if (playerCards.length == 5 && playerCount <= 21){
    playerWin = true
  }

  return {playerCards, remainingDeck, playerCount, playerLose, playerWin}
}