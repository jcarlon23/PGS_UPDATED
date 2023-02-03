import React from 'react'
import card2 from "./PGS2.png"
import card3 from "./PGS3.png"
import card4 from "./PGS4.png"
import card5 from "./PGS5.png"
import "./Cards.css";

const Cards = () => {

const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach(element => {
  let state = {
    mouseX: 0,
    mouseY: 0,
    height: element.clientHeight,
    width: element.clientWidth
  };

  element.addEventListener("mousemove", ele => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
    state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

    // parallax angle in card
    const angleX = (state.mouseX / state.width) * 30;
    const angleY = (state.mouseY / state.height) * -30;
    card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

    // parallax position of background in card
    const posX = (state.mouseX / state.width) * -40;
    const posY = (state.mouseY / state.height) * -40;
    cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
  });

  element.addEventListener("mouseout", () => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    card.style.transform = `rotateY(0deg) rotateX(0deg) `;
    cardBg.style.transform = `translateX(0px) translateY(0px)`;
  });

});


  return (
<div className="container">
  <div className="cardWrap">
    <div className="card">
      <div className="cardBg">
    <img src={card2} height={500} alt="card2" />
     </div>
     <div className="cardInfo">
        <h3 className="cardTitle">
          Sign up Now !!!
        </h3>
        <p>Come and enjoy the fun with us at Gambarie</p>
     </div>
     </div>
     </div>


    <div className="cardWrap">
    <div className="card">
      <div className="cardBg">
    <img src={card3} height={500} alt="card3" />
     </div>
    <div className="cardInfo">
        <h3 className="cardTitle">
          Sign up Now !!!
        </h3>
        <p>Come and enjoy the fun with us at Gambarie</p>
     </div>
     </div>
     </div>

    <div className="cardWrap">
    <div className="card">
      <div className="cardBg">
    <img src={card4} height={500} alt="card4" />
     </div>
    <div className="cardInfo">
        <h3 className="cardTitle">
          Sign up Now !!!
        </h3>
        <p>Come and enjoy the fun with us at Gambarie</p>
     </div>
     </div>
     </div>

     <div className="cardWrap">
    <div className="card">
      <div className="cardBg">
    <img src={card5} height={500} alt="card5" />
    </div>
    <div className="cardInfo">
        <h3 className="cardTitle">
          Sign up Now !!!
        </h3>
        <p>Come and enjoy the fun with us at Gambarie</p>
     </div>
     </div>
     </div>
     </div>



  )
}

export default Cards
