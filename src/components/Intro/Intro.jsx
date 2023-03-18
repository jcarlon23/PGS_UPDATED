import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <h1>
      <p>Ciao!!👋👋👋</p>{" "}
      <span className="title">
        Coordiniamo le attività sportive da sempre promosse all'interno degli
        Istituti Salesiani e degli Oratori.
      </span>
      Lo facciamo anche noi.........
      <span className="container-flip">
        <span className="flip flip-fermented">scuoiare.⛷️🏂</span>
        <span className="flip flip-pluviophile">pallacanestro.⛹️‍♂️⛹️‍♀️</span>
        <span className="flip flip-optimist">pallavolo.🏐</span>
        <span className="flip flip-world">calcio a cinque.⚽</span>
        <span className="flip flip-cat">canoa.🛶🛶</span>
        <span className="flip flip-superhero">scherma.🤺🤺</span>
        <span className="flip flip-snowboarder">gare di scacchi.♟️♛♞</span>
        <span className="flip flip-bookworm">
          celebrazione eucaristica.⛪⛪
        </span>
      </span>
    </h1>
  );
};

export default Intro;
