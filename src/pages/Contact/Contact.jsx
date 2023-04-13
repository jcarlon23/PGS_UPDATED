import React, { useEffect } from "react";
import { Link } from "@react-email/link";
import "./Contact.css";
import Pro1 from "./Pro1.png";
import Back1 from "./Back1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const Contact = ({ mailto, label }) => {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    const lat = 38.1434359;
    const lon = 13.3437342;
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <div>
      <div className="text-center text-4xl md:text-7xl mb-10 mt-20">
        <h9>Contattaci</h9>
      </div>

      <div className="text-center text-1xl md:text-7xl mb-20  ">
        <h10>Ci piacerebbe sentirti!</h10>
      </div>

      <div className="flex flex-row justify-center gap-11 person1 mb-20">
        <div class="flip-person">
          <div className="flip-person-inner">
            <div className="flip-person-front">
              <img src={Pro1} height={320} width={320} alt="" />
            </div>
            <div className="flip-person-back">
              <h1 className="mt-5">Sergio Ragusa</h1>
            </div>
          </div>
        </div>
        <div className="flip-person">
          <div className="flip-person-inner">
            <div className="flip-person-front">
              <img src={Back1} height={320} width={320} alt="" />
            </div>
            <div className="flip-person-back">
              <h1 className="mt-5">Fabio Puleo</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-sm md:text-2xl Contacts mt-10 mr-10 ml-10">
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <p>335 7001682</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />

            <p>president.pgspalermo@gmail.com </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Viale Libertà, 199 - (90100) Palermo</p>
          </li>

          <li>
            <FontAwesomeIcon icon={faClock} />
            <p> Martedì e venerdì - dalle ore 18 alle ore 20</p>
          </li>
        </ul>
      </div>
      <div className=" w-auto min-w-full max-w-none ">
        <h2 className="pt-20 pb-5 text-1xl md:text-4xl text-center text-white ">
          Sede centrale: Viale Libertà, 199 - (90100) Palermo
        </h2>
        <div className="pb-10">
          <iframe id="iframeId" height="600px" width="100%"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
