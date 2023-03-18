import React from "react";
import about from "./About.png";
import "./About.css";

// const About = () => {
//   return (
//     <div className="About">
//       <img src={about} alt="" />
//       <div
//         className="container mx-auto"
//         style={{
//           position: "absolute",
//           top: "300px",
//           left: "300px",
//           right: "300px",
//           width: "900px",
//           backgroundColor: "rgba(0,0,0,0.65)",
//           borderRadius: "20px",
//           padding: "30px",
//         }}
//       >
//         <h1 className="text-center text-7xl mb-4">CHI SIAMO</h1>

//         <p className="text-xl mb-4">
//           L’Associazione Nazionale "POLISPORTIVE GIOVANILI SALESIANE" già
//           promossa dagli Enti "Centro Nazionale Opere Salesiane CNOS" e "Centro
//           Italiano Opere Femminili Salesiane CIOFS", è costituita con atto del 9
//           novembre 1967 rep. 36226 presso il dott. Vincenzo Pompili, notaio in
//           Roma.
//         </p>
//         <p className="text-xl mb-4">
//           L’associazione viene indicata con la sigla "P.G.S.". L’Associazione
//           Nazionale "PGS" è stata riconosciuta Ente di Promozione Sportiva la
//           prima volta con delibera del CONI n. 117 del 22 febbraio 1979, ai
//           sensi dell’art. 31 del DPR n. 530/1974, e, successivamente, con
//           delibere del 27 febbraio 2002 e del 18 dicembre 2008.
//         </p>
//         <p>
//           È riconosciuta Ente Nazionale a carattere assistenziale con i Decreti
//           del Ministero dell’Interno n. 10.6255/12000.A (78) del 22 febbraio
//           1984 e n. 10.14116/12000.A (78) del 17 ottobre 1984 ai sensi dell’art.
//           2, IV comma della Legge 524/1974 e art. 20 del DPR n. 640/1972. È
//           iscritta al Registro Nazionale delle Associazioni di Promozione
//           Sociale ai sensi e per gli effetti delle legge 7 dicembre 2000, n.
//           383, con il n. 62.
//         </p>
//       </div>
//     </div>
//   );
// };

const About = () => {
  return (
    <div className="About md:columns-2 mt-8">
      <div className="container mx-auto">
        <h1 className="text-center text-7xl mb-4">CHI SIAMO</h1>

        <p className="text-xl mb-4">
          L’Associazione Nazionale "POLISPORTIVE GIOVANILI SALESIANE" già
          promossa dagli Enti "Centro Nazionale Opere Salesiane CNOS" e "Centro
          Italiano Opere Femminili Salesiane CIOFS", è costituita con atto del 9
          novembre 1967 rep. 36226 presso il dott. Vincenzo Pompili, notaio in
          Roma.
        </p>
        <p className="text-xl mb-4">
          L’associazione viene indicata con la sigla "P.G.S.". L’Associazione
          Nazionale "PGS" è stata riconosciuta Ente di Promozione Sportiva la
          prima volta con delibera del CONI n. 117 del 22 febbraio 1979, ai
          sensi dell’art. 31 del DPR n. 530/1974, e, successivamente, con
          delibere del 27 febbraio 2002 e del 18 dicembre 2008.
        </p>
        <p>
          È riconosciuta Ente Nazionale a carattere assistenziale con i Decreti
          del Ministero dell’Interno n. 10.6255/12000.A (78) del 22 febbraio
          1984 e n. 10.14116/12000.A (78) del 17 ottobre 1984 ai sensi dell’art.
          2, IV comma della Legge 524/1974 e art. 20 del DPR n. 640/1972. È
          iscritta al Registro Nazionale delle Associazioni di Promozione
          Sociale ai sensi e per gli effetti delle legge 7 dicembre 2000, n.
          383, con il n. 62.
        </p>
      </div>
      <img src={about} alt="" />
    </div>
  );
};

export default About;
