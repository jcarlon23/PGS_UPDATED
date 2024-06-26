import "./Home.css";
import React, { useEffect, Component, useRef } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Cards, Intro, Video } from "../../components";
import WebViewer from "@pdftron/webviewer";
import front from "./PGS_Palermo.mp4";
import { Link } from "react-router-dom";
import image from "/Users/jamescarlon/code/my-react-app/src/pages/Home/Image1.jpg";


import card1 from "../../assets/cards/About.png";
import card2 from "../../assets/cards/PGS2.png";
import card5 from "../../assets/cards/PGS3.png";
import card9 from "../../assets/cards/PGS4.png";
import card3 from "../../assets/cards/PGS5.png";
import card7 from "../../assets/cards/PGS6.png";
import card8 from "../../assets/cards/PGS7.png";
import card6 from "../../assets/cards/PGS8.png";
import card4 from "../../assets/cards/PGS9.png";


import card10 from "../../assets/cards/PGS10.png";

import event1 from "../../assets/cards/event6.png";
import event2 from "../../assets/cards/event2.png";
import event3 from "../../assets/cards/event3.png";
import event4 from "../../assets/cards/event4.png";
import event5 from "../../assets/cards/event5.png";
import event6 from "../../assets/cards/event7.png";
import event7 from "../../assets/cards/event8.png";

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

class Completed extends Component {
  render() {
    return <span>L'evento è in diretta!!!🎉🎉🎉</span>;
  }
}

class RenderByUsingReactChild extends Component {
  render() {
    return (
      <FlipClockCountdown to={new Date().getTime() + 552 * 3600 * 1000 + 5000}>
        <Completed />
      </FlipClockCountdown>
    );
  }
}

class RenderByUsingCallback extends Component {
  constructor(props) {
    super(props);

    this.endTime = new Date().getTime() + 552 * 3600 * 1000 + 5000;
    this.state = {
      isCompleted: false,
    };

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
        <div
          dangerouslySetInnerHTML={{
            __html: `<video
          className="w-auto min-w-full "
          playsinline
          autoPlay
          loop
          muted>
          <source src=${front} type="video/mp4" />
          Your browser does not support the video tag.
    </video>`,
          }}
        />
      </div>

      <div className=" w-auto min-w-full max-w-none ">
        <h2 className="md:pt-60 md:pb-40 py-10 lg:text-5xl text-2xl text-center ">
          Coordiniamo da sempre le attività sportive promosse all'interno degli
          Istituti Salesiani e degli Oratori.
        </h2>

        <Link to="https://sites.google.com/educandatomariadelaide.it/pgs-2024/home">
          <div className=" Comming Soon md:shrink justify-center pb-2 pt-6 flex flex-wrap text-xl">
            <img
              src={card10}
              alt=""
              className=" rounded-full w-80 flex flex-wrap text-xl"
            />
          </div>
          <div className=" text-center text-xl "> PGS Natura</div>
        </Link>

        <div className="grid lg:grid-cols-8 grid-cols-2 md:grid-cols-4 gap-4 lg:pb-80 pb-20 pt-8 ">
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

      <div className=" w-auto min-w-full lg:pt-1 sm:bg-contain	bg-cover">
        <div style={{ backgroundImage:`url(${image})` , position: "relative" , backgroundRepeat:"no-repeat", backgroundSize:"contain" }}>
          <h2 className="pt-10 lg:pl-10 pb-10 text-3xl text-white font-semibold text-center ">
            Prossimamente
          </h2>
          <Link to="https://sites.google.com/educandatomariadelaide.it/pgs-2024/home">
            <div className="Comming Soon flex md:shrink justify-center pb-2 pt-6">
              <img src={event6} alt="" className=" md:w-1/3 rounded " />
            </div>
          </Link>

          <div className=" flex justify-center pt-2 pb-20 aspect-auto ">
            <FlipClockCountdown
              to={new Date("2024-05-17T05:00:00.635Z").getTime()}
              labels={["GIORNI", "ORE", "MINUTI", "SECONDI"]}
              labelStyle={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase",
              }}
              digitBlockStyle={{ width: 29, height: 70, fontSize: 40 }}
              dividerStyle={{ color: "white", height: 1 }}
              className="  "
              duration={0.5}
            ></FlipClockCountdown>
          </div>

          <div className="grid lg:grid-cols-5 gap-8  lg:ml-8 pt-20">
            {events.map((events) => (
              <div className="flex justify-center" key={events.img}>
                <img
                  src={events.img}
                  alt="card2"
                  className=" h-full w-80 rounded hover:scale-125 transition-all duration-500 cursor-pointer "
                />
              </div>
            ))}
            <div className=" flex md:shrink justify-center pb-2 pt-6"></div>
          </div>

          {/* <Feed /> */}

      </div>

      <div className=" w-auto min-w-full max-w-none  ">

        <h2 className=" md:text-4xl text-center text-white ">
          Sede centrale: Viale Libertà, 199 - (90100) Palermo
          <div className="pt-5">
            <iframe id="iframeId" height="600px" width="100%"></iframe>
          </div>

        </h2>

      </div>
      </div>
    </div>
  );
};

export default Home;
