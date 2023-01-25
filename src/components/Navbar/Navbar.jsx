import React from 'react';
import "./Navbar.css";
import logo from "./logo.png";




const Navbar = () => {
  return (
    <nav class="nav">
        <div class="container">
            <div class="logo">
            <img src={logo} />
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
  

    </nav>
  )
}

export default Navbar
