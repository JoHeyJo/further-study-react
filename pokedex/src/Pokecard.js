import React from "react";
import './Pokecard.css'

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


/** Individual Pokemon card.
 * 
 * Props:
 * - title aka name
 * - image from id
 * - type
 * - exp 
 */

  function Pokecard({name, type, id, xp}){
    const pokeImg = `${POKE_API}${id}.png.`
    return (
      <div className="Pokecard">
        <div className="Pokecard-title">{name}</div>
        <img className="Pokecard-image" src={pokeImg} alt={name} />
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {xp}</div>
      </div>
    );
  }

  export default Pokecard;