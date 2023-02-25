import { IAnswer } from "./interfaces";

/** returns random number within maxNum parameter */
const randomNum = (maxNum: number): number => Math.floor(Math.random() * maxNum);


/** returns a randomly selected element based on argument's parameter length */
function chooseRandom(choices: IAnswer[]): IAnswer {
  return choices[randomNum(choices.length)]
}

export { randomNum, chooseRandom };