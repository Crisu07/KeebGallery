// Nav Bar
import React, { useState } from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

function handleClick() {
    window.location.href = 'https://chrisnguyen.netlify.app/';
  }

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
        <Link to="/about" className='title'>Keyboard Gallery</Link>
        <div className='menu' onClick={() => {setOpenMenu(!openMenu)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        {/* if the menu is opened, add a class open otherwise don't */}
        <ul className={openMenu ? 'open' : ''}>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/portfolio' >Portfolio</NavLink>
            </li>
            <li>
                <NavLink to='/commission'>Commission</NavLink>
            </li>
            {/* TO DO: Jump back to personal Site */}
            <li>
            <a onClick={handleClick}>Contact</a>
            </li>
        </ul>
    </nav>
  )
}
