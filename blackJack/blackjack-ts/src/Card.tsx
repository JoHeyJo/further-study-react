import React from 'react';
import { ICard } from './interfaces';

const BASE_URL = "https://deckofcardsapi.com/static/img/"


/** renders card from API based on id
 * 
 * Props:
 * - id: number
 * - suit : string
 * 
 *  Hand -> Card
 */
function Card({ value, suit }: ICard) {
  const cardUrl = BASE_URL + value + suit + '.png';
  return (
    <div className='Card-card'>
      <img src={cardUrl} alt={value+suit} />
    </div>
  )
}

export default Card;