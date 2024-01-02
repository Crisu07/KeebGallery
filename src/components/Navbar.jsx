import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='title'>Keyboard Gallery</Link>
        <ul>
            <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/about">Info</NavLink>
            </li>
            <li>
                <NavLink to="/commission">Commission</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            {/* TO DO: Jump back to personal Site */}
            <li>
                <NavLink to="/">About</NavLink>
            </li>
        </ul>
    </nav>
  )
}
