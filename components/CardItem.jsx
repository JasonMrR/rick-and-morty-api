import React from "react";
import './CardItem.css'

const CardItem = ({character}) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div className="card-details">
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Type: {character.type}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
        <p>Episodes: {character.episode.length}</p>
        <a href={character.url} target="_blank" rel="noopener noreferrer">
          More info
        </a>
      </div>
    </div>
  );
};

export default CardItem;
