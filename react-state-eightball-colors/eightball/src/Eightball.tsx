import React, { useState } from "react";
import { messages } from './messages'
import './Eightball.css'
import { IAnswer, IColorCount } from './interfaces'
import { chooseRandom } from "./utils";

const defaultAnswer: IAnswer = { msg: "Think of a question", color: "black" }
const defaultCount: IColorCount = { red: 0, goldenrod: 0, green: 0 }

/** Eightball component, renders randomly chosen message
 * 
 * Props:
 * - answers: [{},{},{}...]
 * 
 * State:
 * - answer: {msg: string, color: string}
 */
function Eightball() {
  const [answer, setAnswer] = useState<IAnswer>(defaultAnswer);
  const [count, setCount] = useState<IColorCount>(defaultCount)

  /** sets answer to randomly chosen answer when sphere is clicked */
  function updateAnswer(): void {
    setAnswer(chooseRandom(messages))
    updateCount(answer.color)
}

function updateCount(color: string): void{
  setCount(c => {
    c[color] += 1
    return c
  })
}

/** sets state back to default */
function reset(): void { setAnswer(defaultAnswer); setCount(defaultCount) }

return (
  <div className="EightBall-interface">
    <div className="EightBall-count">{count.red}{count.goldenrod}{count.green}</div>
    <div className="EightBall-sphere"
      style={{ backgroundColor: answer.color }}
      onClick={updateAnswer}>
      <div className="EightBall-text">
        {answer.msg}
      </div>
    </div>
    <button onClick={reset} className="EightBall-button">RESET</button>
  </div>
)
}

export default Eightball;