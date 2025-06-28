import React from "react";
import './header.css'


const Header = ({onToggleDark} ) => {
    return (
        <>
          <div className="header-bar">
                        <div className="site-title">
                            <h1>Where in the World?</h1>
                            <button onClick={onToggleDark}>
                                <img src="/images/moon-svgrepo-com.svg" alt="Dark Mode Icon"/>
                                &nbsp;Dark Mode
                            </button>
                        </div>
                    </div>
        </>
    )
}

export default Header