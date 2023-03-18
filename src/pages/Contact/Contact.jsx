import React from "react";
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
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <div className="container">
      <div className="row">
        <h9>Contattaci</h9>
      </div>
      <div className="row">
        <h10>Ci piacerebbe sentirti!</h10>
        <div className="person">
          <div className="person1">
            <div className="container2">
              <div class="flip-person">
                <div className="flip-person-inner">
                  <div className="flip-person-front">
                    <img src={Pro1} height={320} width={320} alt="" />
                  </div>
                  <div className="flip-person-back">
                    <h1>Sergio Ragusa</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="person2">
        <div className="container2">
          <div className="flip-person">
            <div className="flip-person-inner">
              <div className="flip-person-front">
                <img src={Back1} height={320} width={320} alt="" />
              </div>
              <div className="flip-person-back">
                <h1>Fabio Puleo</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Contacts">
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
            <p>Viale Libertà, 199 - (90100) Palermo </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faClock} />
            <p>
              {" "}
              Orari di ricevimento al pubblico: Martedì e venerdì - dalle ore 18
              alle ore 20{" "}
            </p>
          </li>
        </ul>
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Contact;
