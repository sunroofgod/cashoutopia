'use client';
import { GameCard } from "../GameCard";
import { BsFillSuitSpadeFill } from "react-icons/bs"; 

interface BlackJackTableProps {
}

export function BlackJackTable ({
} ) {
    return (
        <div className="
          flex
          justify-center
          items-center 
        ">
          <GameCard top_left="7" bottom_right={<BsFillSuitSpadeFill size={23}/>} border={true} />
        </div>
    )
}