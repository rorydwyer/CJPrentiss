import { useEffect, useState } from "react";
import axios from "axios";

// Componets
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";

function App() {
  const [works, setWorks] = useState([]);
  const [home, setHome] = useState([]);

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
      <div id="frame" style={{ borderWidth: "16px" }} className="fixed z-40 w-screen h-screen border-white"></div>
      <div className="text-9xl text-white fixed z-0 -bottom-2 left-5">Christa Prentiss</div>
      <Navigation />
      <Hero />
      <div className="transform translate-x-0">
        <Intro intro={home.Intro} />
        <Gallery works={works} />
      </div>
    </div>
  );
}

export default App;
