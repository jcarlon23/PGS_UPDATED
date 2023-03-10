import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link, useMatch, useResolvedPath } from "react-router-dom"





const Footer = () => {
  return (
       <div className='footer'>

      <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
      <div className="copywright">
      <Link to="https://jameswebpages.com/">
      <p>&copy; Copywright by James's web pages</p>
      </Link>
      </div>
       <h4 className="_14">Follow us on: </h4>
       <div className="facebook">
       <Link to="https://www.facebook.com/pgs.palermo.5">
       <FontAwesomeIcon icon={faFacebook} />
       </Link>
       </div>
       <div className="instagram">
       <Link to="https://www.instagram.com/pgspalermo/">
       <FontAwesomeIcon icon={faInstagram} />
       </Link>
       </div>
       <div className="youtube">
       <Link to="https://www.youtube.com/@PgsItalia79">
       <FontAwesomeIcon icon={faYoutube} />
       </Link>
      </div>
       </div>
       </div>

)
}

  function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>








   )
}

export default Footer
