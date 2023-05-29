'use client';

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BsFillMoonFill, BsFillSunFill, BsLaptopFill } from "react-icons/bs";

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
          < BsFillMoonFill size={10} />
        </button>
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
