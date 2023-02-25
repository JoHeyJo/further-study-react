import React from 'react';
import { IPokecard, IPokedex } from './interfaces';
import Pokecard from './Pokecard';
import './pokedex.css'

/** Contains all individual pokemon cards
 * 
 * Props:
 * - pokemon: [{},{},..]
 * 
 */
function Pokedex({ pokemon, totalXp, isWinner }: IPokedex) {
  return (
    <div className='Pokedex-pokedex'>
      {pokemon.map((p) => <div>
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience} />
      </div>)}
      <div className='Pokedex-score'>{totalXp}</div>
      <div className='Pokedex-result'>{isWinner ? 'YOU WIN' : 'YOU LOOSE'}</div>
    </div>
  )
}

export default Pokedex;

