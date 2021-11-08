import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

// Componets
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import About from "./components/About";

function App() {
  const [works, setWorks] = useState([]);
  const [home, setHome] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Get home page data
    const getHome = async () => {
      const response = await axios.get("http://localhost:1337/home");
      setHome(response.data);
    };
    getHome();

    // Get works / paintings for gallery
    const getWorks = async () => {
      const response = await axios.get("http://localhost:1337/works");
      setWorks(response.data);
    };
    getWorks();
  }, []);

  return (
    <div className="App bg-gray-100">
      <div id="frame" style={{ borderWidth: "18px" }} className="fixed z-40 w-screen h-screen border-white pointer-events-none"></div>
      {/* <div className="text-9xl text-white fixed -bottom-2 left-5">Christa Prentiss</div> */}
      <Navigation location={location.pathname} className="z-40 fixed" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="transform translate-x-0 z-40">
                <Intro intro={home.Intro} />
                <Gallery works={works} />
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
