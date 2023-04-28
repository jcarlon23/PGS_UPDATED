import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenuForMobile, setShowMenuForMobile] = useState(false);
  const showMobileMenu = () => setShowMenuForMobile(!showMenuForMobile);
  const hideMobileMenu = () => setShowMenuForMobile(false);

  return (
    <div className="header">
      <nav className="navbar d-flex justify-content-evenly ">
        <Link to="/" className="logo mb-2 md:ml-10 ">
          <img src={logo} alt="PGS Palermo logo" />
        </Link>
        {/* <div className="hamburger" onClick={showMobileMenu}>
          {showMenuForMobile ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div> */}

        <ul className={showMenuForMobile ? "nav-menu active" : "nav-menu"} >
          <li className="nav-item px-0.5 lg:px-3 py-1  text-xs md:text-m lg:text-lg font-medium text-black hover:underline underline-offset-8 ">
            <Link to="/" onClick={hideMobileMenu}>
              HOME
            </Link>
          </li>
          {/* <li className="nav-item px-2.5 lg:px-3 py-1  text-xs md:text-m lg:text-lg font-medium text-black hover:underline underline-offset-8 ">
            <Link to="Calendar" onClick={hideMobileMenu}>
            CALENDARIO
            </Link>
          </li> */}
          <li className="nav-item px-1.0 lg:px-3 py-1 text-xs md:text-m lg:text-lg font-medium text-black hover:underline underline-offset-8">
            <Link to="About" onClick={hideMobileMenu}>
              CHI SIAMO
            </Link>
          </li>
          <li className="nav-item px-0.5 lg:px-3 py-1 text-xs	md:text-m lg:text-lg font-medium text-black hover:underline underline-offset-8">
            <Link to="Gallery " onClick={hideMobileMenu}>
              GALLERIA
            </Link>
          </li>
          <li className="nav-item  px-0.5  lg:px-3 py-1 text-xs	md:text-m lg:text-lg font-medium text-black hover:underline underline-offset-8 md:mr-10">
            <Link to="ContactUs" onClick={hideMobileMenu}>
              CONTATTACI
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

export default Navbar;
