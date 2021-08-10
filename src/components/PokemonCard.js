import React from "react";
import PokemonBase from "./PokemonBase";
import "./PokemonCard.css";
import PokemonType from "./PokemonType";
function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;

  return (
    <div className="card">
      <img
        className="cardImage"
        src={process.env.PUBLIC_URL + "./pokemonImage/" + id + ".png"}
        alt=""
      ></img>
      <div className="cardName">{name.english}</div>
      <PokemonType types={type}></PokemonType>
      <PokemonBase stats={base}></PokemonBase>
    </div>
  );
}

export default PokemonCard;
