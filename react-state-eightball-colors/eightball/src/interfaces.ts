
interface IAnswer {
  msg: string;
  color: string;
}

interface IColorCount {
  [red:string]: number;
  goldenrod: number;
  green: number;
}

export type { IAnswer, IColorCount }