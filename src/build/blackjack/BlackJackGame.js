import { CountPoints } from "./CountPoints"
import { BsFillSuitSpadeFill } from "react-icons/bs"
import { BsFillSuitClubFill } from "react-icons/bs" 
import { BsFillSuitHeartFill } from "react-icons/bs"
import { BsFillSuitDiamondFill } from "react-icons/bs"

//creates unshuffled Deck
function CreateDeck() {
  const Deck = []
  const Suits = [
    [<BsFillSuitHeartFill size={23} color="red"/>, false], 
    [<BsFillSuitClubFill size={23}/>, true],
    [<BsFillSuitDiamondFill size={23} color="red"/>, false], 
    [<BsFillSuitSpadeFill size={23}/>, true]
  ]
  const CardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
  
  for (let suit of Suits) {
    for (let card of CardNumber) {
      Deck.push([card, suit[0], suit[1]])
    }
  }
  return Deck;
}

function ShuffleDeck(Deck) {
  const copy = Deck;
  for (let Index in Deck) {
    let swapIndex = Math.floor(Math.random() * copy.length)

    let tempCard = copy[swapIndex]
    copy[swapIndex] = copy[Index]
    copy[Index] = tempCard
  }
  return copy;
}

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function BlackJackGame(betAmount) {
  let remainingDeck = ShuffleDeck(CreateDeck());
  let dealerCards = [];
  let playerCards = [];
  let shownDealerCards = [];
  let playerGameCondition = 2;
  let gameStart = true

  let dealerCount = 0;
  let playerCount = 0;

  while (true) {
      for (let i = 0; i <= 1; i++){
        let drawnCard = DrawCard(remainingDeck);
        shownDealerCards.push(drawnCard);
        drawnCard = DrawCard(remainingDeck);
        playerCards.push(drawnCard); 
      }

      dealerCards = [shownDealerCards[0]]

      playerCount = CountPoints(playerCards)
      dealerCount = CountPoints(shownDealerCards)

      return({
        playerCards, 
        dealerCards, 
        shownDealerCards, 
        remainingDeck, 
        betAmount, 
        playerCount, 
        dealerCount, 
        playerGameCondition,
        gameStart
      }
      )
  }
}




