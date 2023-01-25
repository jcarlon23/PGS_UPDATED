import { BrowserRouter } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar, Cards, Footer, Intro, Video } from "./components";
import "./App.css";



function App() {
return (
  <div className="App">
    <div>
  <Navbar />
  <Video />
  </div>
  <Intro />
  <Cards />
  <Footer />
  </div>
   );
}

export default App
