import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "./logo.png";
import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";




const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
    <div className='header'>
    <nav className='navbar'>
        <Link to='/' className='logo'>
            <img src={logo} alt='logo' />
        </Link>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <Link to='About' onClick={closeMenu}>About</Link>
            </li>
            <li className='nav-item'>
                <Link to='Gallery' onClick={closeMenu}>Gallery</Link>
            </li>
            <li className='nav-item'>
                <Link to='ContactUs' onClick={closeMenu}>Contact Us</Link>
            </li>
        </ul>
      </nav>
      </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar
