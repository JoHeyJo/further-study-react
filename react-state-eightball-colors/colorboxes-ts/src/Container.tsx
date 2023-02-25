import React, { useState } from 'react';
import Box from "./Box";
import './container.css'

function randomNum(num: number) {
  return Math.floor(Math.random() * num)
}

function choice(colors: string[]) {
  return colors[randomNum(colors.length)]
}

interface IContainer {
  colors: string[];
  numBoxes: number;
}

/** Container holding all the Box components
 * 
 * 
 * Props:
 * - colors: array or random colors
 * - numBoxes: num of boxes to manage
 * 
 * state:
 * - boxes: [color,color,color...]
 * 
 * 
 */

function Container({ colors, numBoxes }: IContainer) {
  const [boxes, setBoxes] = useState(getInitialRandomColors);

  /** populates initial state with 16 boxes */
  function getInitialRandomColors() {
    return Array.from(
      { length: numBoxes },
      () => choice(colors));
  }

  /** choose random box and change color */
  function randomBox() {
    setBoxes(boxes => {
      let idx = randomNum(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(colors);
      return boxCopy;
    })
  }

  const boxComponent = boxes.map((color, i) => <Box key={i} color={color} />)

  return (
    <div>
      <div className='Container-box'
        onClick={randomBox}>
        {boxComponent}
      </div>
    </div>
  )
}

export default Container;
