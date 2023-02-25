interface ICard {
  value: string;
  suit: string;
}

interface Ideck {
  value: string;
  suit: string;
}

interface IHand {
  card1: ICard;
  card2: ICard;
  score: number
}

interface IWinner {
  isWinner: boolean;
  score: number
}

interface IPoints {
  [A:string]: string;
  K: string;
  Q: string;
  J: string;
}
export type { ICard, IHand, IWinner, IPoints };