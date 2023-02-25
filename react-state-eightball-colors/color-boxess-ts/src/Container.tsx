import React, { useState } from 'react';
import Box from './Box';
import { randomNum, chooseRandom } from './utils';
import './Container.css';


const defaultColors = [
  "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
  "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
  "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen",
];

/** holds all box components
 * 
 * Props:
 * - colors
 * - numBoxes: default number of boxes
 * 
 * State:
 * - boxes: []
 */
function Container({ numBoxes = 16 }) {
  const [colors, setColors] = useState<string[]>(createInitialBoxes)
  const [index, setIndex] = useState<number | null>(null)

  /** Return array of random colors */
  function createInitialBoxes() {
    return Array.from(
      { length: numBoxes },
      () => chooseRandom(defaultColors)
    )
  }

  /** on button click: changes color of selected box */
  function changeColor(): void {
    const newColor = chooseRandom(colors);
    const idx = randomNum(colors.length);
    setIndex(idx);
    setColors(c => {
      let copy = [...c] // don't forget to create copy of state before mutating
      copy[idx] = newColor
      return copy
    })
  }

  const boxes = colors.map((color, i) => <Box key={i} color={color} isChanged={i === index} />)

  return (
    <div>
      <div className='Container-box'>
        {boxes}
      </div>
      <button onClick={changeColor}>Change</button>
    </div>

  )
}

export default Container;