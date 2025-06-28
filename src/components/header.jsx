import React, {useState} from "react";
import './header.css'



const Header = ({onToggleDark} ) => {
      const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(prev => !prev);
    onToggleDark(); // Call parent toggle function
  };
    return (
        <>
          <div className="header-bar">
                        <div className="site-title">
                            <h1>Where in the World?</h1>
                            <button onClick={handleToggle}>
                                 <img
                                    src={isDarkMode ? "/images/sun-svgrepo-com.svg" : "/images/moon-svgrepo-com.svg"}
                                    alt={isDarkMode ? "image" : "Dark Mode Icon"}
                                />
                                &nbsp;{isDarkMode ? "Light Mode" : "Dark Mode"}
                            </button>
                        </div>
                    </div>
        </>
    )
}

export default Header