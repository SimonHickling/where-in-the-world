import React from "react";
import { useState, useEffect } from "react";
import './country.css'

const CountryPage = ({name, population, region, capital, flags, subregion, topLevelDomain, languages, currencies, nativeName, borders, allCountries, onBack }) => {

     

        const getBorderCountryNames = (codes) => {
            if (!codes || !allCountries) return [];
            return codes.map(code => {
            const match = allCountries.find(country => country.alpha3Code === code);
            return match ? match.name : code;
            });
        };

  const borderNames = getBorderCountryNames(borders);

    return (
          <>
          <div className="countryPage">
            <button className="back-btn" onClick={onBack}>← Back</button>
            <div className="country-container">
                
                <div className="flag-wrapper">
                    <img src={flags?.svg} alt={`Flag of ${name}`} />
                </div>
                <div className="countrypage-info-container">
                    <h2>{name}</h2>
                    <br />
                    <div class="info-boxes">
                    <div className="info-one">
                        <p><b>Native Name:</b> {nativeName}</p>
                        <p><b>Population:</b> {population}</p>
                        <p><b>Region:</b> {region}</p>
                        <p><b>Subregion:</b> {subregion}</p>
                        <p><b>Capital: </b>{capital}</p> 
                    </div>
                    <br />
                    <div className="info-two">
                        <p><b>Internet Domain:</b> {topLevelDomain}</p>
                        <p><b>Languages:</b> {languages?.map(lang => lang.name).join(', ')}</p>
                        <p><b>Currencies:</b> {currencies?.map(cur => cur.name).join(', ')}</p>
                    </div>
                    </div>
                    <br />
                    <p><b>Border Countries:</b></p><br />
                     <div className="border-countries">
                        {borderNames.length > 0 ? (
                            borderNames.map((name, idx) => (
                            <div key={idx} className="border-country-box">{name}</div>
                            ))
                        ) : (
                            <div class="no-borders">None</div>
                        )}
                     </div>
                    
                </div>
            </div>
            </div>
        </>
    )
      

    
        
}

export default CountryPage