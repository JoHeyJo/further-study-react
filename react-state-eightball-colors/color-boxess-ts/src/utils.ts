
/** returns random number within maxNum param */
const randomNum = (maxNum: number) => Math.floor(Math.random() * maxNum);

/** choose random element from passed argument */
function chooseRandom(choices: string[]): string {
  return choices[randomNum(choices.length)]
}

export { randomNum, chooseRandom };