'use client';

import { GameCard } from "../../GameCard";
import { CardBack } from "../../CardBack";

interface DealerHandDisplayProps {
  cards?: [string, React.ReactNode, boolean][]
  cardPoints?: number
  reveal?: boolean
}

export function DealerHandDisplay ({
  cards,
  cardPoints,
  reveal
}: DealerHandDisplayProps) {
  let maxCardBack = 2;
  let maxEmptySlots = 3;

  if(cards != undefined){
    let cardsLength = cards.length
    maxCardBack = maxCardBack - cardsLength;
    if (maxCardBack < 0){
      maxCardBack = 0
    }
    maxEmptySlots = 5 - cardsLength - maxCardBack; 
  }
    return (
        <div className="
          flex
          flex-col
          items-center
          justify-center
          min-h-[30vh]
          pb-7
          pt-2
        ">
          <h1 className="font-bold">Dealer ({reveal && cardPoints})</h1>
          <br></br>
          <div className="flex">
            {cards?.map((card, index) => {
              return (
                <GameCard top_left={card[0]} bottom_right={card[1]} border={true} colour={card[2]} />
              )
            })}
            {[...Array(maxCardBack)].map((x, i) => {
                return (<CardBack />)
            }
            )}
            {[...Array(maxEmptySlots)].map((x, i) => {
                return (<GameCard border={false} />)
            })}
          </div>
        </div>
    )
}


