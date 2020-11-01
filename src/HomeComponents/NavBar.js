import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className="nav">
            <li>
                <NavLink to="/">About</NavLink>
            </li>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/items">My account</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;