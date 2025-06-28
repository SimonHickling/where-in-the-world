import React from "react";
import { useState, useEffect } from "react";
import './card.css'

const Card = ({ name, population, region, capital, flags, onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className="image-wrapper">
        <img src={flags?.svg} alt={`Flag of ${name}`} />
      </div>
      <div className="country-info-container">
        <h2 className="country-name">{name}</h2>
        <p className="population">Population: {population}</p>
        <p className="region">Region: {region}</p>
        <p className="capital">Capital: {capital}</p>
      </div>
    </div>
  );
};

export default Card