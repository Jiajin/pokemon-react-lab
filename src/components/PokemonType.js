import React from "react";
import "./PokemonType.css";
function PokemonType({ types }) {
  console.log(types[0]);
  return (
    <div className="typeParent">
      {types.map((type) => (
        <div className={`pokeType ${type.toLowerCase()}`}>{type}</div>
      ))}
    </div>
  );
}

export default PokemonType;
