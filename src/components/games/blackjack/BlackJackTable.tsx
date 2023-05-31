'use client';
import { Dealer } from "./table/Dealer";
import { Player } from "./table/Player";

interface BlackJackTableProps {
}

export function BlackJackTable ({
} ) {
    return (
        <div className="
          flex
          flex-col
          justify-between
          min-h-[80vh]
          px-4
        ">
          <div>
            <Dealer />
          </div>
          <hr></hr>
          <div>
            <Player />
          </div>
        </div>
    )
}