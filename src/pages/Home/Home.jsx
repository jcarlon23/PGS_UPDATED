import React from "react";
import { Cards, Intro, Video } from "../../components";
import front from "./PGS_Palermo.mp4";

import card2 from "../../assets/cards/PGS2.png";
import card5 from "../../assets/cards/PGS3.png";
import card9 from "../../assets/cards/PGS4.png";
import card3 from "../../assets/cards/PGS5.png";
import card7 from "../../assets/cards/PGS6.png";
import card8 from "../../assets/cards/PGS7.png";
import card6 from "../../assets/cards/PGS8.png";
import card4 from "../../assets/cards/PGS9.png";

// const Home = () => {
//   return (
//     <div>
//       <div className="main">
//         <video src={front} autoPlay loop muted />
//       </div>
//       <Intro />
//       <Cards />//     </div>
//   );
// };

const activities = [
  { label: "Sciare", img: card2 },
  { label: "Pallacanestro", img: card3 },
  { label: "Pallavolo", img: card4 },
  { label: "Calcio a cinque", img: card5 },
  { label: "Canoa", img: card6 },
  { label: "Scherma", img: card7 },
  { label: "Scacchi", img: card8 },
  { label: "Celebrazione eucaristica", img: card9 },
];

const cards = [
  {
    img: card2,
    title: "Sta accadendo ora !! 🏂 ⛷️",
    text: "Vieni a divertirti con noi di Gambarie!!",
  },
  {
    img: card3,
    title: "Programma per Gambarie 📖 📖",
    text: "Vieni a divertirti con noi di Gambarie!!",
  },
  {
    img: card6,
    title: "Programma per Gambarie 📖 📖",
    text: " 21, 22, 23, 24 Febbraio.",
  },
  {
    img: card7,
    title: "Ginnastica Ritmica 🩰",
    text: "Vieni e unisciti a noi !!",
  },
  {
    img: card9,
    title: "Promo Twirling 🩰 🩰",
    text: "Vieni e unisciti a noi !!",
  },
  {
    img: card8,
    title: "Le 𝗣𝗜𝗚𝗜𝗘𝗦𝗦𝗜𝗔𝗗𝗜 𝟮𝟬𝟮𝟯 si svolgeranno a Ragusa",
    text: "- Athena resort 🏨 🏨",
  },
  {
    img: card5,
    title: "Corso Aggiornamento Allenatore PGS ⚽ ⚽",
    text: "Vieni e unisciti a noi !!",
  },
  {
    img: card4,
    title: "Guarda questo 👀 👀",
    text: "..............",
  },
];

const Home = () => {
  return (
    <div>
      <div>Banner</div>
      <div>
        <h2>
          Coordiniamo le attività sportive da sempre promosse all'interno degli
          Istituti Salesiani e degli Oratori.
        </h2>
        <div className = "grid grid-cols-8 gap-4">
          {activities.map((activity) => (
            <div>

            <img src={activity.img} height={150} alt="card2" className = "rounded-full" />
            <div className = "text-center text-xl mt-2">{activity.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {cards.map((card) => (
          <div className="cardWrap">
            <div className="card">
              <div className="cardBg">
                <img src={card.img} height={500} alt="card2" />
              </div>
              <div className="cardInfo">
                <h3 className="cardTitle">{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
