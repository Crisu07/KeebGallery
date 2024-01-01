import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='title'>Home</Link>
        <ul>
            <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/commission">Commission</NavLink>
            </li>
        </ul>
    </nav>
  )
}
