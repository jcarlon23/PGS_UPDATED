import React from "react";
import { Box } from "@mui/material";
import { Navbar, Footer } from "./components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="About" element={<About />} />
          <Route path="ContactUs" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
