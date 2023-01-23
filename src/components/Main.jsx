
import React from 'react'
import Video from '../assets/video.mp4'
import logo from  '../assets/logo.png';


const Main = () => {
  return (
    <div className='Main'>
        <div className="overlay">
      <video src={Video} autoPlay loop muted />
      </div>
      <nav class="nav">
        <div class="container">
            <div class="logo">
            <img src={logo} alt="logo"/>
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

            </div>


    )
 }

export default Main
