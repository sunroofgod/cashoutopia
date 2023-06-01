'use client';
import { Dealer } from "./table/Dealer";
import { Player } from "./table/Player";
import { Button } from "@/components/ui/Button";

import { BlackJackGame } from "@/build/blackjack/BlackJackGame";
import { Hit } from "@/build/blackjack/Hit";

import { useEffect, useState } from 'react';

interface BlackJackTableProps {
}

export function BlackJackTable ({
}) {
  const [dealerCards, setDealerCards] = useState([]);
  const [shownDealerCards, setShownDealerCards] = useState([]);
  const [dealerCount, setDealerCount] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerCount, setPlayerCount] = useState(0);
  const [startingHands, setStartingHands] = useState([]);
  const [endOfGame, setEndOfGame] = useState(false);
  
  const [hit, setHit] = useState([]);
  
  // 
  const [remainingDeck, setRemainingDeck] = useState([]);
  
  // start of gameState
  useEffect(() => setPlayerCards(startingHands[0]), [startingHands])
  useEffect(() => setDealerCards(startingHands[2]), [startingHands])
  useEffect(() => setRemainingDeck(startingHands[3]), [startingHands])
  useEffect(() => setShownDealerCards(startingHands[1]), [startingHands])

  // showDealerCards at the endOfGame
  useEffect(() => setDealerCards(shownDealerCards), [endOfGame])

  // on playerAction "Hit"
  useEffect(() => setPlayerCards(hit[0]), [hit])
  useEffect(() => setRemainingDeck(hit[1]), [hit])
  
    return (
        <div className="
          flex
          flex-col
          justify-between
          min-h-[80vh]
          px-4
        ">
          <div>
            <Dealer cards={dealerCards}/>
          </div>
          <hr></hr>
          <div>
            <Player cards={playerCards}/>
          </div>
          <Button label={"Start game"} onClick={() => setStartingHands(BlackJackGame())} />
          <Button label={"Hit"} onClick={() => setHit(Hit(playerCards, remainingDeck))} />
        </div>
    )
}