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
    <div className="App prose">
      <Navigation />
      <Hero />
      <Intro />
      <Gallery works={works} />
    </div>
  );
}

export default App;
