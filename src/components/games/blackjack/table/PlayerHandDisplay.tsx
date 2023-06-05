'use client';

import { GameCard } from "../../GameCard";

interface PlayerHandDisplayProps {
  hands?: Player["hands"]
  cards?: [string, React.ReactNode, boolean][],
  cardPoints?: number
}

export function PlayerHandDisplay({
  hands,
  cards,
  cardPoints
}: PlayerHandDisplayProps) {
  var max = 5;
  if (cards != undefined) {
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
      <div className="flex col">
        {cards?.map((card, index) => {
          return (
            <GameCard top_left={card[0]} bottom_right={card[1]} border={true} colour={card[2]} />
          )
        })}
        {[...Array(max)].map((x, i) => {
          return (<GameCard border={false} />)
        }
        )}
        {/* {hands?.map((hand, index) => {
          let cards = hand.cards
          let cardsLength = cards.length
          if (cards === undefined){
            cardsLength = 0
          }
          return (
            <div className="flex">            
              {cards?.map((card, index) => {
                return (
                  <GameCard top_left={card[0]} bottom_right={card[1]} border={true} colour={card[2]} /> 
                )})
              }
              {[...Array(5 - cards.length)].map((x, i) => {
                return (<GameCard border={false}/>)
              })}
            </div> 
          )})
        } */}
      </div>
    </div>
  )
}