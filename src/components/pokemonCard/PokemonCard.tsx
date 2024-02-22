import "./style.css"
import { Link } from "react-router-dom"
import React from 'react'
// pokemonName no state
const PokemonCard = ({ pokemonName, goToPokemon}) => {
  return (
    <div className="cardPokemonContainer" onClick={goToPokemon}>

       <Link to={`/pokemoninfo`}>
       <p className="pokemonName">
       {pokemonName}
       </p>
       </Link>

    </div>
  )
}

export default PokemonCard