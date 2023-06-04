'use client';
import { Dealer } from "./table/Dealer";
import { Player } from "./table/Player";
import { Button } from "@/components/ui/Button";
import { TbPokerChip } from "react-icons/tb";
import { TbCoins } from "react-icons/tb";

import { BlackJackGame } from "@/build/blackjack/BlackJackGame";
import { Hit } from "@/build/blackjack/Hit";
import { Stand } from "@/build/blackjack/Stand";
import { Double } from "@/build/blackjack/Double";

import { use, useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BlackJackTableProps {
}

export function BlackJackTable({
}) {
  const [dealerCards, setDealerCards] = useState([]);
  const [shownDealerCards, setShownDealerCards] = useState([]);
  const [dealerCount, setDealerCount] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerCount, setPlayerCount] = useState(0);
  const [remainingDeck, setRemainingDeck] = useState([]);

  const [gameStartProps, setGameStartProps] = useState(
    {
      playerCards:[], 
      dealerCards:[], 
      shownDealerCards:[],
      remainingDeck:[], 
      betAmount:0, 
      playerCount:0,
      dealerCount:0,
      playerGameCondition:3,
      gameStart:false,
    });
  
  // Game States
  // PlayerGameCondition:
  //  3: Not Started
  //  2: Ongoing
  //  1: Win
  //  0: Draw
  //  -1: Lose
  const [playerGameCondition, setPlayerGameCondition] = useState(3);
  const [gameStart, setGameStart] = useState(false);
  const [endOfGame, setEndOfGame] = useState(false);
  const [betAmount, setBetAmount] = useState(0);

  // playerAction States
  const [hit, setHit] = useState(
    {
      playerCards:[], 
      remainingDeck:[],
      playerCount:0,
      playerGameCondition:3,
      endOfGame:false,
      shownDealerCards:[]
    });
  const [stand, setStand] = useState(
    {
      playerGameCondition:3,
      shownDealerCards:[],
      dealerCount:0,
      endOfGame:false
    }
  );
  const [double, setDouble] = useState(
    {
      playerCount:0,
      playerGameCondition:3,
      dealerCount:0,
      shownDealerCards:[],
      playerCards:[],
      endOfGame:false
    }
  );

  // start of gameState
  useEffect(() => setPlayerCards(gameStartProps.playerCards), [gameStartProps])
  useEffect(() => setDealerCards(gameStartProps.dealerCards), [gameStartProps])
  useEffect(() => setRemainingDeck(gameStartProps.remainingDeck), [gameStartProps])
  useEffect(() => setShownDealerCards(gameStartProps.shownDealerCards), [gameStartProps])
  useEffect(() => setBetAmount(gameStartProps.betAmount), [gameStartProps])
  useEffect(() => setPlayerGameCondition(gameStartProps.playerGameCondition), [gameStartProps])
  useEffect(() => setPlayerCount(gameStartProps.playerCount), [gameStartProps])
  useEffect(() => setDealerCount(gameStartProps.dealerCount), [gameStartProps])
  useEffect(() => setGameStart(gameStartProps.gameStart), [gameStartProps])

  // on playerAction "Hit"
  useEffect(() => setPlayerCards(hit.playerCards), [hit])
  useEffect(() => setRemainingDeck(hit.remainingDeck), [hit])
  useEffect(() => setPlayerCount(hit.playerCount), [hit])
  useEffect(() => setPlayerGameCondition(hit.playerGameCondition), [hit])
  useEffect(() => setEndOfGame(hit.endOfGame), [hit])
  useEffect(() => setDealerCards(hit.shownDealerCards), [hit])

  // on playerAction "Stand"
  useEffect(() => setDealerCards(stand.shownDealerCards), [stand])
  useEffect(() => setPlayerGameCondition(stand.playerGameCondition), [stand])
  useEffect(() => setDealerCount(stand.dealerCount), [stand])
  useEffect(() => setEndOfGame(stand.endOfGame), [stand])

  // on playerAction "Double"
  useEffect(() => setDealerCards(double.shownDealerCards), [double])
  useEffect(() => setPlayerGameCondition(double.playerGameCondition), [double])
  useEffect(() => setDealerCount(double.dealerCount), [double])
  useEffect(() => setPlayerCards(double.playerCards), [double])
  useEffect(() => setPlayerCount(double.playerCount), [double])
  useEffect(() => setEndOfGame(double.endOfGame), [double])

  //
  useEffect(() => setEndOfGame(false), [gameStartProps])

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
          {/* {endOfGame && (<p>endOfGame=true</p>)}
          {gameStart && (<p>gameStart=true</p>)} */}
        </div>
        <div>
          <Dealer cards={dealerCards} cardPoints={dealerCount} reveal={endOfGame}/>
        </div>
        <hr></hr>
        <div>
          <Player cards={playerCards} cardPoints={playerCount} />
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
              <form>
                Bet:
                {(endOfGame || !gameStart) && (<input
                type= "number"
                className="w-10" 
                id="bet" 
                placeholder = "10"
                value = {betAmount}
                onChange={(e) => setBetAmount(e.target.value)}/>)}
                {!endOfGame && betAmount}
              </form>
            </div>
            <div className="grid grid-rows-2 text-center justify-center">
              <TbCoins size={100} />
              250
            </div>
          </div>
          <div className="grid row-span-1 grid-cols-4 h-[10vh] gap-5">
            {/* Set Hit Button */}
            <div className="grid col-span-2">
              <Button label={"Hit"} onClick={() => setHit(Hit(playerCards, remainingDeck, shownDealerCards, dealerCards))} />
            </div>
            {/* Set Double Button 
            - should be disabled={true} after hit 
            */}
            <div className="grid col-span-2">
              <Button label={"Double"} 
                onClick={() => setDouble(
                  Double(
                    playerCards,
                    dealerCount,
                    shownDealerCards,
                    remainingDeck,
                    playerGameCondition
                  )
                )} 
              />
            </div>
            <div className="grid col-span-2">
              <Button label={"Stand"} 
                onClick={() => setStand(
                  Stand(
                    playerCount,
                    dealerCount,
                    shownDealerCards,
                    remainingDeck,
                    playerGameCondition
                  )
                )}
              />
            </div>
            <div className="grid col-span-2">
              <Button label={"Split"} disabled={true} />
            </div>
            {/* Set Bet Button */}
            <div className="grid col-start-2 col-span-2"><Button label={"Set Bet"} onClick={() => setGameStartProps(BlackJackGame(betAmount))} /></div>
          </div>
        </div>

      </div>

    </div>
  )
}
