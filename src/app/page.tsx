import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export default function Home() {
  return (
    <Card title="We promise you nothing." 
      subtitle="This is 100% an appropriate use of your money." 
      children={<button className="rounded-lg hover:opacity-90 transition bg-slate-900 text-white w-36 h-12 text-base">Get Started</button>}
    />
  )
}
