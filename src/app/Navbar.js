import React from 'react'

export const Navbar = () => {
    return(
        <nav className="main-nav">
            <ul>
                <li>
                    <h2>Where in the world?</h2>
                </li>
                <li className="nav-darkmode">
                    <button><b>Dark Mode</b>
                        <div>
                            <img className="icons moon" src="icons8-moon-symbol-50.png" alt="moon"></img>
                        </div>
                    </button>
                </li>
            </ul>
        </nav>
        
    )
}