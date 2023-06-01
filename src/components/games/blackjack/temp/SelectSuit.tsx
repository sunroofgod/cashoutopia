'use client';

import { BsFillSuitSpadeFill } from "react-icons/bs"; 
import { BsFillSuitClubFill } from "react-icons/bs"; 
import { BsFillSuitHeartFill } from "react-icons/bs"; 
import { BsFillSuitDiamondFill } from "react-icons/bs"; 

export function SelectSuit (suit:string) {
  switch(suit){
    case "Heart":
      return (<BsFillSuitHeartFill size={23}/>)
    case "Club":
      return (<BsFillSuitClubFill size={23}/>)
    case "Spade":
      return (<BsFillSuitSpadeFill size={23}/>)
    default:
      return (<BsFillSuitDiamondFill size={23}/>)
  }
};