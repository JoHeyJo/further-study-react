import React from 'react';
import { IPokeGame } from './interfaces';
import Pokedex from './Pokedex';

const ranNum = (maxNum: number): number => Math.floor(Math.random() * maxNum)

function Pokegame({ pokemon }: IPokeGame) {

  function pullCards() {
    const hand = [];
    while (hand.length < 4) {
      hand.push(pokemon[ranNum(pokemon.length)])
    }
    return hand
  }

  const hand1 = pullCards();
  const hand2 = pullCards();

  const hand1Xp = hand1.reduce((total, card) => total += card.base_experience, 0)
  const hand2Xp = hand2.reduce((total, card) => total += card.base_experience, 0)

  return (
    <div>
      <>HAND1</>
      <div className='Pokegame-hands'><Pokedex
        pokemon={hand1}
        totalXp={hand1Xp}
        isWinner={hand1Xp > hand2Xp}
      /></div>
      <>HAND2</>
      <div className='Pokegame-hands'><Pokedex
        pokemon={hand2}
        totalXp={hand2Xp}
        isWinner={hand2Xp > hand1Xp}
      /></div>
    </div>
  )
}

export default Pokegame;