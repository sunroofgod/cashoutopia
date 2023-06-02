'use client';

import { BlackJackTable } from "./BlackJackTable";
import { Controls } from "./Controls";


export function BlackJack ({
}) {
    return (
      <div className="w-[100vw]">
      <div>
        <BlackJackTable />
      </div>
      </div>
    )
}