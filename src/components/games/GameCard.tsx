'use client';

interface GameCardProps {
    top_left?: string | number
    bottom_right?: React.ReactNode
    border?: boolean
    colour?: boolean
}

export function GameCard ({
    top_left,
    bottom_right,
    border,
    colour,
}: GameCardProps) {
    return (
        <div className={`
          bg-white
          mx-1
          w-24
          h-36
          grid
          grid-cols-1
          px-4
          py-4
          border-2
          content-between
          ${border ? 'shadow-lg' : 'border-slate-400/30' }
          ${border ? 'border-none': 'border-dashed'}
        `}>
            <div className={`
              justify-start 
              text-left
              ${colour? 'text-black': 'text-red-500'}
            `}>
              {top_left && <p className="text-2xl font-medium text-{}">{top_left}</p>}
            </div>
            <div className="flex justify-end text-right">
              {bottom_right}
            </div>
        </div>
    )
}