import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer singleCol social-media-icons-white d-flex justify-content-evenly  ">

{/* <div className="copy text-xs mt-2  md:mt-4 md:text-base  no-underline  ">
        <Link to="https://jameswebpages.com/">
            <p>&copy; Copywright by James's web pages</p>
          </Link>
          </div> */}

        <h4 className="_14 text-xs mt-2 md:mt-4 md:text-2xl hidden lg:block ">Seguici su: </h4>
        <div className="facebook text-xs mt-2 md:mt-4 md:text-2xl  ">
          <Link to="https://www.facebook.com/pgs.palermo.5">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
        <div className="instagram mt-2 text-xs md:text-2xl md:mt-4 ">
          <Link to="https://www.instagram.com/pgspalermo/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
        <div className="tiktok mt-2 text-xs md:text-2xl md:mt-4 ">
          <Link to="https://www.tiktok.com/@pgspalermo">
            <FontAwesomeIcon icon={faTiktok} />
          </Link>
        </div>
        <div className="youtube text-xs mt-2 md:text-2xl md:mt-4  ">
          <Link to="https://www.youtube.com/@PgsItalia79">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>

    </footer>
  );
};

export default Footer;
