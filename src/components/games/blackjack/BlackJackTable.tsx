'use client';
import { Dealer } from "./table/Dealer";
import { Player } from "./table/Player";

import { SelectSuit } from "./temp/SelectSuit";

import { BlackJackGame } from "@/build/blackjack/BlackJackGame";

interface BlackJackTableProps {
}

export function BlackJackTable ({
}) {
  const hands = BlackJackGame()
  const dealer = hands[1]
  const player = hands[0]

  var playerHand: [string, React.ReactNode, boolean][]
  var dealerHand: [string, React.ReactNode, boolean][]
  var CardNumber
  var Suit
  var Black

  playerHand = []
  dealerHand = []
  
  for (let i of dealer) {
    CardNumber = i.card;
    Suit = SelectSuit(i.suit);
    Black = true
    dealerHand.push([CardNumber, Suit, Black]);
  }

  for (let i of player) {
    CardNumber = i.card;
    Suit = SelectSuit(i.suit);
    Black = true
    playerHand.push([CardNumber, Suit, Black]);
  }
  
    return (
        <div className="
          flex
          flex-col
          justify-between
          min-h-[80vh]
          px-4
        ">
          <div>
            <Dealer cards={dealerHand}/>
          </div>
          <hr></hr>
          <div>
            <Player cards={playerHand}/>
          </div>
        </div>
    )
}