import { SelectSuit } from "@/components/games/blackjack/temp/SelectSuit";
import { CountPoints } from "./CountPoints";

function DrawCard(ShuffledDeck) {
  return ShuffledDeck.pop();
}

export function Stand(playerCount, dealerCount, shownDealerCards, remainingDeck) {
  let playerWin = false
  let playerDraw = false
  let playerLose = false

  if(dealerCount >= 16){
    if(playerCount > dealerCount){
      playerWin = true
      return 
    }
  }else{
    // dealer will have to draw
    while(dealerCount < 16){
      let drawnCard = DrawCard(remainingDeck)
      
    }
  }
}