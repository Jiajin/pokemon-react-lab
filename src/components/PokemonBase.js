import React from "react";
import "./PokemonBase.css";

function PokemonBase({ stats }) {
  return (
    <div>
      {/* <p className="stats">HP: {stats.HP}</p>
      <p className="stats">Attack: {stats.Attack}</p>
      <p className="stats">Defence: {stats.Defence}</p>
      <p className="stats">SpAttack: {stats.SpAttack}</p>
      <p className="stats">SpDefence: {stats.SpDefence}</p>
      <p className="stats">Speed: {stats.Speed}</p> */}
      {Object.keys(stats).map((key) => (
        <p className="stats">
          {key}:{stats[key]}
        </p>
      ))}
    </div>
  );
}
export default PokemonBase;
