import React from "react";
import Pokecard from "./Pokecard";

/** Index of Pokemon: show individual cards.
 * 
 * Props:
 * - pokemon: array of pokemon: { id, name, type, base_experience }
 * - exp: total experience of all pokemon
 * - isWinner: true/false
 * 
 */


function Pokedex({ pokemon, xp, isWinner }) {
  return (
    <>
      {pokemon.map(pokeman =>
        <Pokecard
          name={pokeman.name}
          id={pokeman.id}
          type={pokeman.type}
          xp={pokeman.base_experience} />
      )}
      {isWinner && "THIS HAND WINS!"}
      XP: {xp}
    </>
  );
}

export default Pokedex;