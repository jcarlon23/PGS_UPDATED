import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'






const Footer = () => {
  return (
       <div className='footer'>

      <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
      <div className="copywright">
       <a href="https://jameswebpages.com/">
      <p>&copy; Copywright by James's web pages</p>
      </a>
      </div>
       <h4 className="_14">Follow us on: </h4>
       <div className="facebook">
       <a href="https://www.facebook.com/pgs.palermo.5">
       <FontAwesomeIcon icon={faFacebook} />
       </a>
       </div>
       <div className="instagram">
       <a href="https://www.instagram.com/pgspalermo/">
       <FontAwesomeIcon icon={faInstagram} />
       </a>
       </div>
       <div className="youtube">
       <a href="https://www.youtube.com/@PgsItalia79">
       <FontAwesomeIcon icon={faYoutube} />
       </a>
      </div>
       </div>
       </div>












   )
}

export default Footer
