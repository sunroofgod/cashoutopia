'use client';
import { Dealer } from "./table/Dealer";
import { Player } from "./table/Player";
import { Button } from "@/components/ui/Button";
import { TbPokerChip } from "react-icons/tb";
import { TbCoins } from "react-icons/tb";

import { BlackJackGame } from "@/build/blackjack/BlackJackGame";
import { Hit } from "@/build/blackjack/Hit";

import { useEffect, useState } from 'react';

interface BlackJackTableProps {
}

export function BlackJackTable({
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
    <div className="flex">
      <div className="
        w-3/4
        flex
        flex-col
        justify-between
        min-h-[80vh]          
        px-4
      ">
        <div>
          <Dealer cards={dealerCards} />
        </div>
        <hr></hr>
        <div>
          <Player cards={playerCards} />
        </div>
      </div>
      <div className="w-1/4">
        <div className="
          grid
          grid-rows-2 
          h-[80vh]
          justify-center
        ">
          <div className="grid row-span-1 grid-cols-2 h-[50vh] items-center">
            <div className="grid grid-rows-2 text-center justify-center">
              <TbPokerChip size={100} />
              50
            </div>
            <div className="grid grid-rows-2 text-center justify-center">
              <TbCoins size={100} />
              250
            </div>
          </div>
          <div className="grid row-span-1 grid-cols-4 h-[10vh] gap-5">
            <div className="grid col-span-2"><Button label={"Hit"} onClick={() => setHit(Hit(playerCards, remainingDeck))} /></div>
            <div className="grid col-span-2"><Button label={"Double"}></Button></div>
            <div className="grid col-span-2"><Button label={"Stand"}></Button></div>
            <div className="grid col-span-2"><Button label={"Split"}></Button></div>
            <div className="grid col-start-2 col-span-2"><Button label={"Start game"} onClick={() => setStartingHands(BlackJackGame())} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
