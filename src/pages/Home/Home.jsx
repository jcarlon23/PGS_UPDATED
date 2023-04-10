import "./Home.css";
import React, { useEffect } from "react";
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

import event1 from "../../assets/cards/event6.png";
import event2 from "../../assets/cards/event2.png";
import event3 from "../../assets/cards/event3.png";
import event4 from "../../assets/cards/event4.png";
import event5 from "../../assets/cards/event5.png";

const activities = [
  { label: "Sci", img: card2 },
  { label: "Basket", img: card3 },
  { label: "Pallavolo", img: card4 },
  { label: "Calcio a cinque", img: card5 },
  { label: "Canoa", img: card6 },
  { label: "Scherma", img: card7 },
  { label: "Scacchi", img: card8 },
  { label: "Celebrazione eucaristica", img: card9 },
];

const events = [
  { img: event1 },
  { img: event2 },
  { img: event3 },
  { img: event4 },
  { img: event5 },
];

// const cards = [
//   {
//     img: card2,
//     title: "Sta accadendo ora !! 🏂 ⛷️",
//     text: "Vieni a divertirti con noi di Gambarie!!",
//   },
//   {
//     img: card3,
//     title: "Programma per Gambarie 📖 📖",
//     text: "Vieni a divertirti con noi di Gambarie!!",
//   },
//   {
//     img: card6,
//     title: "Programma per Gambarie 📖 📖",
//     text: " 21, 22, 23, 24 Febbraio.",
//   },
//   {
//     img: card7,
//     title: "Ginnastica Ritmica 🩰",
//     text: "Vieni e unisciti a noi !!",
//   },
//   {
//     img: card9,
//     title: "Promo Twirling 🩰 🩰",
//     text: "Vieni e unisciti a noi !!",
//   },
//   {
//     img: card8,
//     title: "Le 𝗣𝗜𝗚𝗜𝗘𝗦𝗦𝗜𝗔𝗗𝗜 𝟮𝟬𝟮𝟯 si svolgeranno a Ragusa",
//     text: "- Athena resort 🏨 🏨",
//   },
//   {
//     img: card5,
//     title: "Corso Aggiornamento Allenatore PGS ⚽ ⚽",
//     text: "Vieni e unisciti a noi !!",
//   },
//   {
//     img: card4,
//     title: "Guarda questo 👀 👀",
//     text: "..............",
//   },
// ];
// const Feed = React.memo((props) => {
//   React.useEffect(() => {
//     const script = document.createElement("script");

//     script.src =
//       "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <React.Fragment>
//       <div
//         className="fb-page"
//         data-href="https://www.facebook.com/pgs.palermo.5"
//         data-show-posts="true"
//         data-width="500px"
//         data-height="500px"
//         data-small-header="false"
//         data-adapt-container-width="true"
//         data-hide-cover="false"
//         data-show-facepile="true"
//       >
//         <blockquote
//           cite="https://www.facebook.com/pgs.palermo.5"
//           className="fb-xfbml-parse-ignore"
//         >
//           <a href="https://www.facebook.com/pgs.palermo.5">Your Page</a>
//         </blockquote>
//       </div>
//     </React.Fragment>
//   );
// });
const Home = () => {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    const lat = 38.1434359;
    const lon = 13.3437342;
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  return (
    <div>
      <div>
        <div className=" flex absolute inset-x-0 bottom-1/2 top-1/2 justify-center items-center text-9xl font-semibold tracking-wider ">
          PGS PALERMO
        </div>
        <div className=" flex absolute inset-x-0 bottom-1/2 top-2/3	 justify-center items-center text-3xl font-semibold tracking-wider ">
          Per saperne di più
        </div>
        <div className="arrow pt-20">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <video
          src={front}
          className=" w-auto min-w-full "
          autoPlay
          loop
          muted
        />
      </div>

      <div className=" w-auto min-w-full max-w-none pt-20">
        <h2 className="pt-20 pb-60  text-5xl text-center ">
          Coordiniamo le attività sportive da sempre promosse all'interno degli
          Istituti Salesiani e degli Oratori.
        </h2>
        <div className="grid grid-cols-8 gap-4 pb-80 ">
          {activities.map((activity) => (
            <div key={activity.img}>
              <img src={activity.img} alt="card2" className="rounded-full" />
              <div className="text-center text-xl mt-2">{activity.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-auto min-w-full pt-10 bg-gray-700 ">
        <h2 className="pt-2 pl-10 pb-20 text-3xl text-left text-white font-semibold ">
          Presto in arrivo
        </h2>

        <div className="grid grid-cols-5 gap-8 pb-40 ml-8 ">
          {events.map((events) => (
            <div key={events.img}>
              <img
                src={events.img}
                alt="card2"
                className=" h-full w-80 rounded "
              />
              <div className="text-center text-xl mt-2 text-black font-semibold">
                {events.label}
              </div>
            </div>
          ))}
        </div>
        {/* <Feed /> */}
      </div>
      <div className=" w-auto min-w-full max-w-none  ">
        <h2 className="pt-10 pb-5 text-4xl text-center text-white ">
          Sede centrale: Viale Libertà, 199 - (90100) Palermo
          <div className="pt-10">
            <iframe id="iframeId" height="600px" width="100%"></iframe>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Home;
