import React, { useState } from "react";
import "./EightBall.css";
import { random } from "./utils";

/** Eightball component 
 * 
 * 
 * State:
 * - color
 * - msg
 * -count -> number of times each color shows up
 * 
 *
 * EightBall -> App
 */

interface Ioption {
  msg: string;
  color: string;
}

interface Icount {
  
}

function EightBall() {
  const [color, setColor] = useState('black');
  const [msg, setMsg] = useState("Think of a question...");
  const [count, setCount] = useState({ "green": 0, "goldenrod": 0, "red": 0 })

  /** changes state of color and msg when invoked */
  function shakeEightball() {
    const option = options[random(options.length)];
    console.log(option)
    setColor(option.color);
    setMsg(option.msg);
    trackColorCount(option);
  }

  /** sets default state when invoked */
  function reset() {
    setColor('black');
    setMsg("Think of a question...")
  }

  /** adjusts count for each color */
  function trackColorCount(option: Ioption) {
    const color = option.color;

    setCount(curr => {
      curr[color] += 1;
      return { ...curr }
     } 
    )
  }

  // console.log('count',count["red"])

  return (
    <div className="EightBall-interface">
      <div className="EightBall-count">
        <div>{count["red"]}</div>
        <div>{count.goldenrod}</div>
        <div>{count.green}</div>
      </div>
      <div className="EightBall-sphere"
        style={{ backgroundColor: color }}
        onClick={shakeEightball}>
        <div className="EightBall-text">
          {msg}
        </div>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default EightBall;

const options = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]