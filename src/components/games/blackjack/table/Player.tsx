'use client';

import { GameCard } from "../../GameCard";
import { BsFillSuitHeartFill } from "react-icons/bs"; 
import { BsFillSuitClubFill } from "react-icons/bs";

interface PlayerProps {
}

export function Player ({
} ) {
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
            <GameCard top_left="A" bottom_right={<BsFillSuitHeartFill size={23} color="red"/>} border={true} /> 
            <GameCard border={false} /> 
            <GameCard border={false} /> 
            <GameCard border={false} /> 
            <GameCard border={false} /> 
          </div>
          <br></br>
          <div className="flex">
            <GameCard top_left="A" bottom_right={<BsFillSuitClubFill size={23}/>} border={true} colour={true}/> 
            <GameCard border={false} /> 
            <GameCard border={false} /> 
            <GameCard border={false} /> 
            <GameCard border={false} /> 
          </div>
        </div>
    )
}