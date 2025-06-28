import React from "react";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({onToggleDark} ) => {
    return (
        <>
          <div className="header-bar">
                        <div className="site-title">
                            <h1>Where in the World?</h1>
                            <button onClick={onToggleDark}>
                                <FontAwesomeIcon icon={faMoon} className="dark-mode-icon" />
                                &nbsp;Dark Mode
                            </button>
                        </div>
                    </div>
        </>
    )
}

export default Header