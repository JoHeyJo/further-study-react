import React from "react";
import Pokedex from './Pokedex'

const defaultPokemon = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]

/** Returns sum of experience in hand */
function totalXp(hand) {
  return hand.reduce((total, next) => total += next.base_experience, 0);
}

/** Pokegame: shows two hands (pokedexes)
 * 
 * Props:
 * - pokemon (list of pokemon to use; defaults to default list)
 */

function Pokegame(pokemon=defaultPokemon) {

  const randNum = () => Math.floor(Math.random() * (pokemon.length - 1));

  function pickRand() {
    let hand = [];
    for (let i = 0; i < 4; i++) {
      hand.push(pokemon[randNum()]);
    }
    return hand;
  }

  const hand1 = pickRand();
  const hand2 = pickRand();

  const hand1TotalXp = totalXp(hand1);
  const hand2TotalXp = totalXp(hand2);



  return (
    <>
      <p>HAND 1</p>
      <Pokedex pokemon={hand1} xp={hand1TotalXp} isWinner={hand1TotalXp > hand2TotalXp} />
      <p>HAND 2</p>
      <Pokedex pokemon={hand2} xp={hand2TotalXp} isWinner={hand1TotalXp < hand2TotalXp} />
    </>
  )
}

export default Pokegame;