import { Card } from "@/components/ui/Card"
import { GameCard } from "@/components/games/GameCard"
import { BsFillSuitSpadeFill } from "react-icons/bs"
export default function HorseRacing() {
  return (
    <Card children={<GameCard top_left="A" bottom_right={<BsFillSuitSpadeFill size="23"/>} border={true}/>} 
    />
  )
}