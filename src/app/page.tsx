import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export default function Home() {
  return (
    <Card title="We promise you nothing." 
      subtitle="This is 100% an appropriate use of your money." 
      children={<Button label="Get Started" outline={false} />}
    />
  )
}
