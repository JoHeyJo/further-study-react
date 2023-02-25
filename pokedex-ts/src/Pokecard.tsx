import React from "react";
import { IPokecard } from './interfaces'
import './pokecard.css';

const BASE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

/** Renders styling and data about pokemon card
 * 
 * Prop: 
 * - id: Number (image based on id)
 * - name: String
 * - type: String
 * - base_experience: Number (aka exp)
 * 
 * Pokedex -> Pokecard
 */
function Pokecard({ id, name, type, base_experience }: IPokecard) {

  const imgSource = BASE_API + `${id}.png.`
  return (
    <div className="Pokecard-card">
      <img className="Pokecard-img" src={imgSource}></img>
      <div className="Pokecard-name">{name}</div>
      <div className="Pokecard-type">{type}</div>
      <div className="Pokecard-exp">{base_experience}</div>
    </div>
  )
}

export default Pokecard;