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
    <div className="aboutrow pt-1 pb-1 mt-1">
      <div className="container">
        <h1 className="text-center text-4xl md:text-7xl mb-4 mt-20 tracking-widest ">
          CHI SIAMO
        </h1>
        <div className="About lg:grid grid-cols-8 grid-flow-col justify-stretch mt-20 gap-8 ">
          <div className="col-span-3">
            <div className="">
              <p className="text-m lg:text-xl mb-4 text-left ">
                Le Polisportive Giovanili Salesiane, in acronimo P.G.S., sono
                un'Associazione Italiana che promuove e favorisce le attività
                sportive. L'Ente pone le sue radici nel metodo Educativo di San
                Giovanni Bosco. Quest'Associazione è stata promossa dal Centro
                Nazionale Opere Salesiane (C.N.O.S.) e dal Centro Italiano Opere
                Femminili Salesiane (C.I.O.F.S.). Le P.G.S. sono un Ente
                Nazionale di Promozione Sportiva riconosciuto dal C.O.N.I., un
                ente assistenziale riconosciuto dal Ministero dell'Interno
                nonché un'Associazione Nazionale di Promozione Sociale
                riconosciuta dal Ministero del Welfare. Le P.G.S. sono inoltre
                parte del Movimento Sportivo Internazionale Salesiano (P.G.S.I.)
                I suoi Soci sono oggi oltre 2000 Associazioni Sportive e conta
                circa 100.000 tesserati.
              </p>
              <p className="text-m md:text-xl mb-20 text-left ">
                Correvano gli anni '60, quando un Salesiano, don Gino Borgogno,
                ebbe un'intuizione. Don Gino era un martello e se si metteva in
                testa qualcosa aveva carattere e determinazione da far paura. La
                sua bella idea, a metà di quegli, fu quella di dar vita a un
                altro grande movimento sportivo. Accanto alle Federazioni del
                C.O.N.I., in Italia infatti proliferavano altre organizzazioni
                chiaramente ideologiche. Nulla vietava che anche don Gino
                entrasse nel gioco con una sua creatura, le P.G.S. (Polisportive
                Giovanili Salesiane). Don Gino capì che doveva farla partire in
                modo forte nella sua Torino e trovò la chiave: una squadra di
                basket in cui riuscì ad unire le forze di tutti gli oratori
                torinesi, le varie Auxilium, dal Valdocco al Martinetto, dal San
                Paolo al San Luigi, dal Rebaudengo al Monterosa… Così nacque
                l’Auxilium Torino, con sede all’Oratorio Agnelli, dove già
                esistevano più campi e una palestra.
              </p>
            </div>
          </div>
          <img src={about} alt="" className="col-span-5 mb-20" />
        </div>
      </div>
    </div>
  );
};

export default About;
