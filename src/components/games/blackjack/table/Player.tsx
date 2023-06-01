'use client';

import { GameCard } from "../../GameCard";

interface PlayerProps {
  cards?: [string, React.ReactNode, boolean][]
}

export function Player ({
  cards,
}: PlayerProps ) {
  var max = 5;
  if(cards != undefined){
    max = 5-cards.length;
  }
    return (
        <div className="
          flex
          flex-col
          items-center
          justify-center
          min-h-[40vh]
          py-5
        ">
          <h1 className="font-bold">Player</h1>
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