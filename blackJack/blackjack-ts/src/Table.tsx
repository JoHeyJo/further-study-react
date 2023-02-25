import React from "react";
import Hand from "./Hand";
import { createDeckOfCards, randomCard } from "./utils";
import { IPoints, ICard } from "./interfaces"
import Winner from "./Winner";
import './Table.css'
const deck = createDeckOfCards();

const card1: ICard = deck[randomCard()];
const card2: ICard = deck[randomCard()];

const points: IPoints  = {
  A: '11',
  K: '10',
  Q: '10',
  J: '10'
}
/** contains game logic and renders cards
 * 
 * Props:
 * - 
 * 
 * App -> Table -> Hand
 */
function Table() {

const score: number = (+points[card1.value] || +card1.value) + (+points[card2.value] || +card2.value)
// const score = points[card1.value]
   

  return (
    <div className="Table-container">
      <Hand card1={card1} card2={card2} score={score}/>
      <Winner isWinner={score === 21} score={score} />
    </div>
  )
}

export default Table;