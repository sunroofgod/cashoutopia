'use client';

import { GameCard } from "../../GameCard";

interface PlayerProps {
  cards?: [string, React.ReactNode, boolean][],
  cardPoints?: number
}

export function Player ({
  cards,
  cardPoints
}: PlayerProps ) {
  var max = 5;
  if(cards != undefined){
    max = 5 - cards.length;
  }
    return (
        <div className="
          flex
          flex-col
          items-center
          justify-start
          min-h-[40vh]
          py-3
        ">
          <h1 className="font-bold">Player ({cardPoints})</h1>
          <br></br>
          <div className="flex">
            {cards?.map((card, index) => {
              return (
                <GameCard top_left={card[0]} bottom_right={card[1]} border={true} colour={card[2]} />
              )
            })}
            {[...Array(max)].map((x, i) => {
                return (<GameCard border={false} />)
            }
            )}
          </div>
        </div>
    )
}