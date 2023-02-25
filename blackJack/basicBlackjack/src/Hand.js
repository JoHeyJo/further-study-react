import React from "react";
import Card from "./Card";
import './hand.css'

// A = 11; 
// 10, J, Q, K = 10
// every other card  = value

// Requirments
// show images of the two random cards 
// total score for those two cards. 
// If the score is 21, show an additional message letting the user know that they have blackjack!


/** generates random number based on 52 card deck */

const randomCard = () => Math.floor(Math.random() * 52);

const BlackjackGame = {
  values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"],
  suits: ["C", "D", "H", "S"]
};

const deck = [];

const points = {
  'A': 11,
  'K': 10,
  'Q': 10,
  'J': 10,
  '0': 10,
};


/** creates array of 52 'cards' with corresponding value & suit  */
for(let cardValue of BlackjackGame.values){
  for(let cardSuit of BlackjackGame.suits){
    deck.push(
      {
        suit: cardSuit,
        value: cardValue,
        card: cardValue + cardSuit
      }
    )
  }
}

/** Hand of player: shows pair of cards 
 * 
 * Props: 
 * - points
 * - score
*/

function Hand(){
  

  const card1 = deck[randomCard()]
  const card2 = deck[randomCard()]

  console.log('card1Value', points, card1.value)
  const card1Value = points[card1.value] ? points[card1.value] : card1.value;
  const card2Value = points[card2.value] ? points[card2.value] : card2.value;

  const score = +card1Value + +card2Value;

  return (
    <>
    <div className="Hand-cards">
      <Card card={card1}/>
      <Card card={card2}/>
    </div>
    <div>Score: {score}</div>
    <div>{score === 21 && "BLACKJACK"}</div>
    </>
  )
};

export default Hand;