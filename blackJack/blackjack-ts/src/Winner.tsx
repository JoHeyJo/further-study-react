import React from "react";
import { IWinner } from './interfaces'

/** dictates winning logic for card game
 * 
 * Prop:
 * - boolean
 * 
 * Winner -> Hand
 */
function Winner( {isWinner, score}: IWinner ) {
  return (
    <div className="Winner-condition">
      <div className="Hand-score">{score}</div>
      { isWinner ? "Black Jack!" : ''}
    </div>
  )
}

export default Winner;