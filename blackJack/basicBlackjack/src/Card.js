import React from "react";
import './Card.css'

/** Holds individual card data 
 * 
 * Props:
 * - card => card id, as used at decOfCardsApi.com
*/



function Card({ card }) {
  console.log(card)
  
  return (
    <div className="Card">
      <img className="Card-img" src={`https://deckofcardsapi.com/static/img/${card.card}.png`} alt={card.id}/>
    </div>
  )
}

export default Card;