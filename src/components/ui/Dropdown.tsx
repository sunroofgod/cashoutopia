'use client';

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BsFillMoonFill, BsFillSunFill, BsLaptopFill } from "react-icons/bs";
import { useTheme } from 'next-themes';

export function DarkmodeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="absolute bottom-0 right-0 h-16 w-16">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="transition data-[state=closed]:animate-accordian-up data-[state=open]:animate-accordion-down min-w-32 rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white dark:bg-black outline-none hover:ring-2 hover:ring-gray-300 focus:shadow-[0_0_0_2px] focus:shadow-black"
            aria-label="Customise options"
          >
            
            < BsFillSunFill className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" size={10} />
            < BsFillMoonFill className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" size={10} />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] bg-white dark:bg-black rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item onClick = {() => setTheme('dark')} 
            className="hover:bg-gray-500 group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              < BsFillMoonFill size={10} />
              <div className="pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                Dark Mode
              </div>
            </DropdownMenu.Item>

            <DropdownMenu.Item onClick = {() => setTheme("light")} 
            className="hover:bg-gray-500 group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              < BsFillSunFill size={10} />
              <div className="pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                Light Mode
              </div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>

  );
};


