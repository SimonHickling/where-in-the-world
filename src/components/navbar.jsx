import React from "react";
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({onSearch, onRegionChange }) => {
    const handleInput = (e) => {
        onSearch(e.target.value);
    };

    const handleRegion = (e) => {
        onRegionChange(e.target.value); 
    };

    return (
        <nav className="nav-container">
          
            <div className="search-functions">
                <div className="search-input-wrapper">
                     <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    <input type="text" name="query" onChange={handleInput} placeholder="Search for a country..." />
                </div>
                    <select onChange={handleRegion} defaultValue={""}>
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                
            </div> 
        </nav>
    
    )
}

export default Navbar