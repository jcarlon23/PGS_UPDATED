
import React from 'react'
import Video from '../assets/video.mp4'
import logo from  '../assets/logo.png';
import PGS from  '../assets/PGS.png';


const Main = () => {
  return (
    <div className='Main'>
        <div className="overlay">
      <video src={Video} autoPlay loop muted />

  <h1><p>Hello!!</p> <span class="title">We coordinate sporting activities that have always been promoted within the Salesian Institutes and Oratories.</span> We also do <span class="container-flip">
  <span class="flip flip-fermented">skining.⛷️🏂</span>
  <span class="flip flip-pluviophile">basketball.⛹️‍♂️⛹️‍♀️</span>
  <span class="flip flip-optimist">volleyball.🏐</span>
  <span class="flip flip-world">five-a-side football .⚽</span>
  <span class="flip flip-cat">canoeing.🛶🛶</span>
  <span class="flip flip-superhero">fencing.🤺🤺</span>
  <span class="flip flip-snowboarder">chess competitions.♟️♛♞</span>
  <span class="flip flip-bookworm">eucharistic celebration.⛪⛪</span>
</span>
</h1>

<div class ="PGS">
            <img src={PGS} alt="PGS"/>
            </div>
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
