import { useEffect, useState } from "react";
import axios from "axios";

// Componets
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";

function App() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const getWorks = async () => {
      const response = await axios.get("http://localhost:1337/works");
      setWorks(response.data);
    };
    getWorks();
  }, []);

  return (
    <div className="App bg-gray-100">
      <div id="frame" style={{ borderWidth: "16px" }} className="fixed z-0 w-screen h-screen border-white"></div>
      <Navigation />
      <Hero />
      <Intro />
      <Gallery works={works} />
    </div>
  );
}

export default App;
