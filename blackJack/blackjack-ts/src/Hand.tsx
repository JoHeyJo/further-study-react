import React from "react";
import Card from './Card'
import { randomCard, createDeckOfCards } from "./utils";
import { IHand } from './interfaces'
import Winner from './Winner'

/** Contains individual cards
 * 
 * Props:
 * - cards: array of card objects
 * 
 * Table -> Hand -> Card
 * 
*/
function Hand({ card1, card2 }: IHand) {

  return (
    <div className="Hand-table">
      <div className="Hand-card">
        <Card value={card1.value} suit={card1.suit} />
      </div>
      <div className="Hand-card">
        <Card value={card2.value} suit={card2.suit} />
      </div>
    </div>
  )
}

export default Hand;