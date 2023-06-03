//creates unshuffled Deck
import { SelectSuit } from "@/components/games/blackjack/temp/SelectSuit"
import { CountPoints } from "./CountPoints"

function CreateDeck() {
  const Deck = []
  const Suits = ["Heart", "Club", "Diamond", "Spade"]
  const CardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
  
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

export function BlackJackGame(betAmount) {
  let remainingDeck = [];
  var gameState = 0;
  let dealerCards = [];
  let playerCards = [];
  let dealer = [];
  let player = [];
  let shownDealerCards = [];
  let gameStart = true;

  let dealerCount = 0;
  let playerCount = 0;

  while (true) {
    if (gameState === 0) {
      remainingDeck = ShuffleDeck(CreateDeck());
      dealer = [];
      player = [];
      gameState = 1;
    }
    // else should allow player to do actions & receive inputs
    else {
      for (let i = 0; i <= 1; i++){
        let drawnCard = DrawCard(remainingDeck);
        dealer.push(drawnCard);
        drawnCard = DrawCard(remainingDeck);
        player.push(drawnCard); 
      }

      // configure format of cards to be read into GameCard.tsx
      for (let i of player) {
        let CardNumber = i.card;
        let Suit = SelectSuit(i.suit);
        let Black = true
        playerCards.push([CardNumber, Suit, Black]);
      }
      for (let i of dealer) {
        let CardNumber = i.card;
        let Suit = SelectSuit(i.suit);
        let Black = true
        shownDealerCards.push([CardNumber, Suit, Black]);
      }
      dealerCards = [shownDealerCards[0]]

      playerCount = CountPoints(playerCards)
      dealerCount = CountPoints(dealerCards)

      return(
        {playerCards, dealerCards, shownDealerCards, remainingDeck, betAmount, gameStart, playerCount, dealerCount}
      )
    }
  }
}




