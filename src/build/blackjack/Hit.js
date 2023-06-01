import { SelectSuit } from "@/components/games/blackjack/temp/SelectSuit";

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function Hit(playerCards, remainingDeck) {
  var newCard = DrawCard(remainingDeck)
  var properNewCard = []

  let CardNumber = newCard.card;
  let Suit = SelectSuit(newCard.suit);
  let Black = true

  properNewCard = [CardNumber, Suit, Black]

  playerCards.push(properNewCard)

  return [playerCards, remainingDeck]
}