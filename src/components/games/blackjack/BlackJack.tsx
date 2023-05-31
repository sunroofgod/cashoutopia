'use client';

import { BlackJackTable } from "./BlackJackTable";
import { Controls } from "./Controls";


export function BlackJack ({
}) {
    return (
      <div className="flex">
      <div className="w-3/4">
        <BlackJackTable />
      </div>
      <div className="w-1/4">
        <Controls />
      </div>
      </div>
    )
}