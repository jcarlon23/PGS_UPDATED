import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "./logo.png";
import React, { useState } from 'react';




const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
    <div className='header'>
    <nav className='navbar'>
        <a href='/' className='logo'>
            <img src={logo} alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <a href='/' onClick={closeMenu}>About</a>
            </li>
            <li className='nav-item'>
                <a href='#about' onClick={closeMenu}>Gallery</a>
            </li>
            <li className='nav-item'>
                <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
            </li>
            <li className='nav-item'>
                <a href='#demo' onClick={closeMenu}>Contact Us</a>
            </li>
        </ul>
      </nav>
      </div>
  )
}

export default Navbar
