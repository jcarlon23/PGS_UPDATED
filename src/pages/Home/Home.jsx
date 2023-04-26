import "./Home.css";
import React, { useEffect, Component } from "react";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
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
import event6 from "../../assets/cards/event7.png";

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
  { img: event6 },
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

class Completed extends Component {
  render() {
    return <span>The countdown is complete</span>
  }
}

class RenderByUsingReactChild extends Component {
  render() {
    return (
      <FlipClockCountdown to={new Date().getTime() + 552 * 3600 * 1000 + 5000}>
        <Completed />
      </FlipClockCountdown>
    )
  }
}

class RenderByUsingCallback extends Component {
  constructor(props) {
    super(props);

    this.endTime = new Date().getTime() + 552 * 3600 * 1000 + 5000;
    this.state = {
      isCompleted: false
    }

    this.handleComplete = this.handleComplete.bind(this);
  }



}



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
        <div
          className=" heading1 flex absolute md:absolute  md:left-1/4
        justify-center lg:justify-center items-center
        text-3xl  md:text-7xl lg:text-8xl font-semibold tracking-wider
      "
        >
          PGS PALERMO
        </div>

        <div
          className=" heading2 flex absolute md:absolute
        lg:bottom-1/2 lg:top-2/3
        	md:bottom-1/2 sm:inset-y-2/3 justify-center md:justify-center lg:justify-center
        lg:text-4xl md:text-1xl sm:text-lg font-semibold tracking-wider hidden lg:block lg:mb-20	"
        >
          Per saperne di più
        </div>
        <div className="arrow md:pt-40 md:top-3/4 hidden lg:block ">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <video
          src={front}
          type="video/mp4"
          className="w-auto min-w-full "
          playsinline={true}
          autoPlay={true}
          loop={true}
          muted={true}
        />
      </div>

      <div className=" w-auto min-w-full max-w-none ">
        <h2 className="md:pt-60 md:pb-60 py-10 lg:text-5xl text-2xl text-center ">
          Coordiniamo da sempre le attività sportive promosse all'interno degli
          Istituti Salesiani e degli Oratori.
        </h2>
        <div className="grid lg:grid-cols-8 grid-cols-2 md:grid-cols-4 gap-4 lg:pb-80 pb-20 ">
          {activities.map((activity) => (
            <div className="flex justify-center flex-col" key={activity.img}>
              <img
                src={activity.img}
                alt="card2"
                className="rounded-full  md:w-full w-40 "
              />
              <div className="text-center pr-4 md:text-xl mt-2">
                {activity.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-auto min-w-full lg:pt-10 bg-gray-700 ">
        <h2 className="pt-10 lg:pl-10 pb-10 text-3xl text-white font-semibold text-center ">
          Prossimamente
        </h2>
        <div className="Comming Soon flex justify-center pb-2 pt-6">
          <img
          src={event2}
          alt=""
          className=" md:w-1/3 rounded "/>
        </div>
        <div className=" flex justify-center pt-2 pb-20  text-9xl ">
        <FlipClockCountdown
        to={new Date('2023-05-19T05:00:00.635Z').getTime()}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        // labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
        // digitBlockStyle={{ width: 40, height: 80, fontSize: 40 }}
        // dividerStyle={{ color: 'white', height: 1 }}
        // separatorStyle={{ color: 'red', size: '6px' }}
        duration={0.5}

      >
        Finished
      </FlipClockCountdown>
      </div>

        <div className="grid lg:grid-cols-5 gap-8 md:pb-40 lg:ml-8 pb-10 ">
          {events.map((events) => (
            <div className="flex justify-center" key={events.img}>
              <img
                src={events.img}
                alt="card2"
                className=" h-full w-80 rounded "
              />
            </div>
          ))}
        </div>
        {/* <Feed /> */}
      </div>
      <div className=" w-auto min-w-full max-w-none  ">
        <h2 className="pt-10 pb-5 md:text-4xl text-center text-white ">
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
