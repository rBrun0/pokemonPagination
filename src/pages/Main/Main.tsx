import "./style.css"
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import React, {  useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
// import { PokemonContext } from "../../contexts/pokemonContext";

const Main = () => {

  const [pokemonItem, setPokemonItem] = useState([]);
  // const {pokemonItem, setPokemonItem} = useContext(PokemonContext)
  const [minorIndex, setMinorIndex] = useState(0);
  const [majorIndex, setMajorIndex] = useState(4); 

  function prevPokemons(){
    if(minorIndex <= 0){
      return
    }

    if(majorIndex <=4){
      return
    }


    setMinorIndex(minorIndex-4)
    setMajorIndex(majorIndex-4)
  }

  function nextPokemons(){
    setMinorIndex(minorIndex+4)
    setMajorIndex(majorIndex+4)
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json()).then(res => setPokemonItem(res.results))
  }, []);

  const goToPokemon = (pokemonName) => {
    console.log(pokemonName)
  }

  return (
    <div className="screenContainer">
      <Header/>
      <div className="mainPokedexList">
        {
          pokemonItem.slice(minorIndex,majorIndex).map((poke) => (
            
             <PokemonCard pokemonName={poke.name} goToPokemon={() => goToPokemon(poke.name)}/>
          ))
        }
      </div>

      <div className="pagination">
        <span onClick={prevPokemons}>prev</span>
        <span onClick={nextPokemons}>Next</span>
      </div>
    </div>
  )
}

export default Main