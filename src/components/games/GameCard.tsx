'use client';

import { IconType } from "react-icons";

interface GameCardProps {
    top_left?: string 
    bottom_right?: React.ReactNode
    border?: boolean
}

export function GameCard ({
    top_left,
    bottom_right,
    border,
}: GameCardProps) {
    return (
        <div className={`
          w-24
          h-36
          grid
          grid-cols-1
          px-4
          py-4
          border-2
          content-between
          ${border ? 'border-black' : 'border-slate-400/25' }
        `}>
            <div className="justify-start text-left">
              {top_left && <p className="text-xl font-normal">{top_left}</p>}
            </div>
            <div className="flex justify-end text-right">
              {bottom_right}
            </div>
        </div>
    )
}