import { useEffect, useState } from "react";
import axios from "axios";

// Componets
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

  console.log(works);

  return (
    <div className="App">
      <Gallery works={works} />
    </div>
  );
}

export default App;
