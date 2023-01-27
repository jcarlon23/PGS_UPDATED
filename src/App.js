import React from 'react';

import { Box } from '@mui/material';
import { Navbar, Cards, Footer, Intro, Video } from "./components";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';





function App() {
  return (
  <>
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
  <div className="App">

  <Navbar />
  <Routes>
      <Route path="/gallery/:id" element={<Gallery />} />
      <Route path="/about/:id" element={<About />} />
      <Route path="/contact/:id" element={<Contact />} />
    </Routes>
  <Video />
  </div>
  <Intro />
  <Cards />
  <Footer />
  </Box>
</>

  )


}


export default App
