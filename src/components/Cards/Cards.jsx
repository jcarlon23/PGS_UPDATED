// import React, { useEffect } from "react";
// // import card2 from "./PGS2.png";
// // import card3 from "./PGS3.png";
// // import card4 from "./PGS4.png";
// // import card5 from "./PGS5.png";
// // import card6 from "./PGS6.png";
// // import card7 from "./PGS7.png";
// // import card8 from "./PGS8.png";
// // import card9 from "./PGS9.png";
// import "./Cards.css";

// const Cards = () => {
//   useEffect(() => {
//     const wrapper = document.querySelectorAll(".cardWrap");

//     wrapper.forEach((element) => {
//       let state = {
//         mouseX: 0,
//         mouseY: 0,
//         height: element.clientHeight,
//         width: element.clientWidth,
//       };

//       element.addEventListener("mousemove", (ele) => {
//         const card = element.querySelector(".card");
//         const cardBg = card.querySelector(".cardBg");
//         state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
//         state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

//         // parallax angle in card
//         const angleX = (state.mouseX / state.width) * 30;
//         const angleY = (state.mouseY / state.height) * -30;
//         card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

//         // parallax position of background in card
//         const posX = (state.mouseX / state.width) * -40;
//         const posY = (state.mouseY / state.height) * -40;
//         cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
//       });

//       element.addEventListener("mouseout", () => {
//         const card = element.querySelector(".card");
//         const cardBg = card.querySelector(".cardBg");
//         card.style.transform = `rotateY(0deg) rotateX(0deg) `;
//         cardBg.style.transform = `translateX(0px) translateY(0px)`;
//       });
//     });
//   });

//   return (
//     <div className="container">
//       <div className="cardWrap">
//         <div className="card">
//           <div className="cardBg">
//             <img src={card2} height={500} alt="card2" />
//           </div>
//           <div className="cardInfo">
//             <h3 className="cardTitle">Sta accadendo ora !! 🏂 ⛷️</h3>
//             <p>Vieni a divertirti con noi di Gambarie!!</p>
//           </div>
//         </div>
//       </div>

//       <div className="cardWrap">
//         <div className="card">
//           <div className="cardBg">
//             <img src={card3} height={500} alt="card3" />
//           </div>
//           <div className="cardInfo">
//             <h3 className="cardTitle">Programma per Gambarie 📖 📖</h3>
//             <p>Vieni a divertirti con noi di Gambarie!!</p>
//           </div>
//         </div>
//       </div>

//       <div className="cardWrap">
//         <div className="card">
//           <div className="cardBg">
//             <img src={card6} height={500} alt="card6" />
//           </div>
//           <div className="cardInfo">
//             <h3 className="cardTitle">Programma per Gambarie 📖 📖</h3>
//             <p> 21, 22, 23, 24 Febbraio.</p>
//           </div>
//         </div>
//       </div>

//       <div className="cardWrap">
//         <div className="card">
//           <div className="cardBg">
//             <img src={card7} height={500} alt="card7" />
//           </div>
//           <div className="cardInfo">
//             <h3 className="cardTitle">Ginnastica Ritmica 🩰</h3>
//             <p>Vieni e unisciti a noi !!</p>
//           </div>
//         </div>
//       </div>

//       <div className="cardWrap">
//         <div className="card">
//           <div className="cardBg">
//             <img src={card9} height={500} alt="card9" />
//           </div>
//           <div className="cardInfo">
//             <h3 className="cardTitle">Promo Twirling 🩰 🩰</h3>
//             <p>Vieni e unisciti a noi !!</p>
//           </div>
//         </div>
//       </div>
//       <div className="cardWrap">
//         <div className="card">
//           <div className="cardBg">
//             <img src={card8} height={500} alt="card8" />
//           </div>
//           <div className="cardInfo">
//             <h3 className="cardTitle">
//               Le 𝗣𝗜𝗚𝗜𝗘𝗦𝗦𝗜𝗔𝗗𝗜 𝟮𝟬𝟮𝟯 si svolgeranno a Ragusa
//             </h3>
//             <p>- Athena resort 🏨 🏨</p>
//           </div>
//         </div>
//       </div>
//       <div className="cardWrap">
//         <div className="card">
//           <div className="cardBg">
//             <img src={card5} height={500} alt="card5" />
//           </div>
//           <div className="cardInfo">
//             <h3 className="cardTitle">
//               Corso Aggiornamento Allenatore PGS ⚽ ⚽
//             </h3>
//             <p>Vieni e unisciti a noi !!</p>
//           </div>
//         </div>
//       </div>
//       <div className="cardWrap">
//         <div className="card">
//           <div className="cardBg">
//             <img src={card4} height={500} alt="card4" />
//           </div>
//           <div className="cardInfo">
//             <h3 className="cardTitle">Guarda questo 👀 👀</h3>
//             <p>..............</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
