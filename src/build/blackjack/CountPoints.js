export function CountPoints(Hand) {
    // Hand = [CardNumber:number|string, Suit:string, Black:boolean][]

    let totalPoints = 0
    let currPoints = 0
    let handCount = Hand.length
    let numberOfAces = 0

    for (let Card of Hand) {
        currPoints = Card[0]

        if (currPoints == "J" | currPoints == "Q" | currPoints == "K") {
            currPoints = 10
        } else if (currPoints == "A") {
          numberOfAces += 1
          currPoints = 11
        }
        totalPoints += currPoints
    }
    if (numberOfAces == 2 && handCount == 2){
      totalPoints = 12
      return totalPoints
    }
    if (totalPoints > 21 && numberOfAces >= 1) {
        for (let i = 0; i < numberOfAces; i++) {
            totalPoints -= 10
            if (totalPoints <= 21) {
                return totalPoints
            }
        }
    }
    return totalPoints
}