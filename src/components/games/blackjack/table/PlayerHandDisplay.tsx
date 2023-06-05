'use client';

import { GameCard } from "../../GameCard";
import { Player } from "../../PlayerClasses";

interface PlayerHandDisplayProps {
  hands?: Player["hands"]
  cardPoints?: number
}

export function PlayerHandDisplay({
  hands,
  cardPoints
}: PlayerHandDisplayProps) {
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
      <div className="flex col">
        {hands?.map((hand, index) => {
          let cards = hand.cards
          let cardsLength = cards.length

          return (
            <div className="flex">
              {cards?.map((card, index) => {
                return (
                  <GameCard top_left={card[0]} bottom_right={card[1]} border={true} colour={card[2]} />
                )
              })
              }
              {[...Array(5 - cards.length)].map((x, i) => {
                return (<GameCard border={false} />)
              })}
            </div>
          )
        })
        }
        {!hands && [...Array(5)].map((x, i) => {
          return (<GameCard border={false} />)
        })}
      </div>
    </div>
  )
}