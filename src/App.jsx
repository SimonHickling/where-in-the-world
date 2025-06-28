import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'
import Header from './components/header'
import CountryPage from './components/country'

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilt, setRegionFilt] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);


  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((countries) => {
        setData(countries);
        setFiltered(countries);
      });
  }, []);

useEffect(() => {
  let filteredResults = data;

  if (searchTerm !== "") {
    filteredResults = filteredResults.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (regionFilt !== "") {
    filteredResults = filteredResults.filter((country) =>
      country.region.toLowerCase() === regionFilt.toLowerCase()
    );
  }

  setFiltered(filteredResults);
}, [searchTerm, regionFilt, data]);
 


 return (
  <>
  <Header onToggleDark={() => setDarkMode(prev => !prev)} />
    {selectedCountry ? (
      <CountryPage 
        {...selectedCountry} 
        onBack={() => setSelectedCountry(null)} 
         allCountries={data}
      />
    ) : (
      <>
        <Navbar 
          onSearch={setSearchTerm} 
          onRegionChange={setRegionFilt} 
        />
        <div className="card-grid">
          {filtered.map((country, index) => (
            <Card 
              key={index} 
              {...country} 
              onClick={() => setSelectedCountry(country)} 
            />
          ))}
        </div>
      </>
    )}
  </>
)}


export default App
