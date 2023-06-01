//creates unshuffled Deck
import { SelectSuit } from "@/components/games/blackjack/temp/SelectSuit"

function CreateDeck() {
  const Deck = []
  const Suits = ["Heart", "Club", "Diamond", "Spade"]
  const CardNumber = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

  for (let suit of Suits) {
    for (let card of CardNumber) {
      Deck.push({ suit, card })
    }
  }
  return Deck;
}

function ShuffleDeck(Deck) {
  const copy = Deck;
  for (let Index in Deck) {
    let swapIndex = Math.floor(Math.random() * copy.length);

    let tempCard = copy[swapIndex];
    copy[swapIndex] = copy[Index];
    copy[Index] = tempCard;
  }
  return copy;

}

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

let Deck = CreateDeck();
let ShuffledDeck = ShuffleDeck(Deck);

export function BlackJackGame() {
  let deck = [];
  var gameState = 0;
  let dealerHand = [];
  let playerHand = [];
  let dealer = [];
  let player = [];
  let shownDealerHand = [];
  console.log(1);

  while (true) {
    if (gameState === 0) {
      deck = ShuffleDeck(CreateDeck());
      dealer = [];
      player = [];
      gameState = 1;
    }
    // else should allow player to do actions & receive inputs
    else {
      dealer.push(DrawCard(ShuffledDeck));
      player.push(DrawCard(ShuffledDeck)); 
      dealer.push(DrawCard(ShuffledDeck));
      player.push(DrawCard(ShuffledDeck));

      for (let i of player) {
        let CardNumber = i.card;
        let Suit = SelectSuit(i.suit);
        let Black = true
        playerHand.push([CardNumber, Suit, Black]);
      }

      for (let i of dealer) {
        let CardNumber = i.card;
        let Suit = SelectSuit(i.suit);
        let Black = true
        dealerHand.push([CardNumber, Suit, Black]);
      }

      shownDealerHand = [dealerHand[0]]

      return(
        [playerHand, dealerHand, shownDealerHand, ShuffledDeck]
      )
    }
  }
}




