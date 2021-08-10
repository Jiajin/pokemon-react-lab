import React from "react";
import "./PokemonGallery.css";
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";

function PokemonGallery() {
  return (
    <div className="galleryParent">
      {pokemonData.map((currPokemon) => (
        <PokemonCard pokemon={currPokemon}></PokemonCard>
      ))}
    </div>
  );
}

export default PokemonGallery;
