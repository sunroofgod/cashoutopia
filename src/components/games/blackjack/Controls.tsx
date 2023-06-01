'use client';

import { Button } from "@/components/ui/Button";
import { TbPokerChip } from "react-icons/tb";
import { TbCoins } from "react-icons/tb";
interface ControlsProps {
}

export function Controls ({
} ) {
    return (
      <div className="
      grid
      grid-rows-2 
      h-[80vh]
      justify-center
      ">
        <div className="grid row-span-1 grid-cols-2 h-[50vh] items-center">
          <div className="grid grid-rows-2 text-center justify-center">
          <TbPokerChip size={100} />
          50
          </div>
          <div className="grid grid-rows-2 text-center justify-center">
          <TbCoins size={100} />
          250
          </div>
          
          
        </div>

        <div className="grid row-span-1 grid-cols-2 h-[10vh] gap-5">
          <div><Button label={"Hit"}></Button></div>
          <div><Button label={"Double"}></Button></div>
          <div><Button label={"Stand"}></Button></div>
          <div><Button label={"Split"}></Button></div>
        </div>
        
      </div>
    )
}