import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'






const Footer = () => {
  return (


      <div className="container2">
        <div className='footer'>

       <h4 className="_14">Follow us on</h4>
      <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
       <a href="https://www.facebook.com/pgs.palermo.5">
       <FontAwesomeIcon icon={faFacebook} />
       </a>
       <a href="https://www.instagram.com/pgspalermo/">
       <FontAwesomeIcon icon={faInstagram} />
       </a>
       </div>
       </div>
       </div>
    








   )
}

export default Footer
