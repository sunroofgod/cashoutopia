'use client';

class Player {
  hands: playerHand[];
  playerID: string;

  constructor(
    hands: playerHand[],
    playerID: string
  ) {
    this.hands = hands;
    this.playerID = playerID;
  }
  getHands(){
    return(this.hands)
  }
}

class playerHand {
  cards: [string, React.ReactNode, boolean][];
  handID: number;
  betAmount: number;
  outcome: number;

  constructor(
    cards: [string, React.ReactNode, boolean][],
    handID: number,
    betAmount: number,
    outcome: number
  ) {
    this.cards = cards;
    this.handID = handID;
    this.betAmount = betAmount;
    this.outcome = outcome;
  }
}