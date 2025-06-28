import React from "react";
import './navbar.css'



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
                    <img src="/images/magnifying-glass-8-svgrepo-com.svg" alt="Search Icon" className="magnifying-icon" />
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