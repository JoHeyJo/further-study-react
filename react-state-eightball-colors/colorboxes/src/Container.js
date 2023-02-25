import React, { useState } from "react";
import Box from './Box.js';
import './container.css';
import { randInt, choice } from "./utils.js";


// At the bottom of all of the boxes should be a button labeled “Change”.

// Initially, each box should have a background color chosen from a random list of colors.

// When you click the button:

// it should select a random box
// it should change the background color of that random box to a new color from the possible colors list.
// Before building anything, think about the structure of your React app.This entire thing shouldn’t be one giant component.

/** Container holds all boxes and interactions
 * 
 * 
 * Props:
 * - colors: array of random colors
 * - numBoxes: # of boxes to manage
 * 
 * State:
 * - boxes: array of box colors
 * 
 */
function Container({ colors = defaultColors, numBoxes = 16 }) {
  const [boxes, setBoxes] = useState(getInitialRandomColors);


  /** Return array of random colors */
  function getInitialRandomColors(){
    return Array.from(
      { length: numBoxes },
      () => choice(colors));
  }

 /** On button click: pick random box, change to random color */
 function handleClick(evt){
  setBoxes(boxes => {
    let idx = randInt(numBoxes);
    let boxCopy = [...boxes];
    boxCopy[idx] = choice(colors);
    return boxCopy;
  }); 
 }

 const boxComponents = boxes.map((color, i) => <Box key={i} color={color}/>)

  return (
    <div className="Container-interface">
      <div className="Container-box">
        {boxComponents}
      </div>
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default Container;


const defaultColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
