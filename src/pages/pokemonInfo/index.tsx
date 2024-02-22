import React from 'react'
import Header from '../../components/Header/Header'

const PokemonInfo = ({pokemonName}) => {
  return (
    <div className='mainInfos'>
        <Header/>
        <div className='pokemonShow'>

            <h1>just a pokemon name: {pokemonName}</h1>
        </div>
    </div>
  )
}

export default PokemonInfo