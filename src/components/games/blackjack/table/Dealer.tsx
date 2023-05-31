'use client';

import { GameCard } from "../../GameCard";
import { BsFillSuitSpadeFill } from "react-icons/bs"; 
import { CardBack } from "../../CardBack";

interface DealerProps {
}

export function Dealer ({
} ) {
    return (
        <div className="
          flex
          flex-col
          items-center
          justify-center
          min-h-[40vh]
        ">
          <h1 className="font-bold">Dealer</h1>
          <br></br>
          <div className="flex">
            <GameCard top_left="7" bottom_right={<BsFillSuitSpadeFill size={23}/>} border={true} colour={true} /> 
            <CardBack />
          </div>
        </div>
    )
}