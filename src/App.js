import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import sanityClient from "./client.js";

// Componets
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Publications from "./components/Publications.js";
import Gallery from "./components/Gallery";
import About from "./components/About";
// import Loading from "./components/Loading";
import Footer from "./components/Footer";

function App() {
  const [works, setWorks] = useState([]);
  const [publications, setPublications] = useState([]);
  const [home, setHome] = useState([]);
  const [about, setAbout] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // sanityClient
    //   .fetch(
    //     `*[_type == 'work']{
    //   title,
    //   "imageUrl": image.asset->url
    // }`
    //   )
    //   .then((res) => console.log(res));

    // Get home page data
    const getHome = async () => {
      const response = await sanityClient.fetch(
        `*[_type == 'homePage' && _id == 'homePage'][0]{
          intro,
          "imageUrl": heroImage.asset->url
        }`
      );
      setHome(response);
      // setLoaded(true);
    };
    getHome();

    // Get about page data
    const getAbout = async () => {
      const response = await sanityClient.fetch(
        `*[_type == 'aboutPage' && _id == 'aboutPage'][0]{
            about,
            email,
            "heroUrl": heroImage.asset->url,
            "profileUrl": profileImage.asset->url
        }`
      );
      setAbout(response);
    };
    getAbout();

    // Get works / paintings for gallery
    const getPublications = async () => {
      const response = await sanityClient.fetch(
        `*[_type == 'publications']{
          title,
          publicationUrl
        }|order(orderRank)`
      );
      setPublications(response);
    };
    getPublications();

    // Get works / paintings for gallery
    const getWorks = async () => {
      const response = await sanityClient.fetch(
        `*[_type == 'work']{
          title,
          caption,
          "imageUrl": image.asset->url
        }|order(orderRank)`
      );
      setWorks(response);
    };
    getWorks();
  }, []);

  return (
    <div className="App bg-gray-100 overflow-x-hidden">
      <div id="frame" style={{ borderWidth: "18px" }} className="fixed z-40 w-screen h-screen border-white pointer-events-none"></div>
      <Navigation location={location.pathname} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Loading loaded={loaded} /> */}
              {/* {home.Image ? <Hero imageURL={home.Image.url} text="Christa Prentiss" /> : '<div className="h-screen w-screen></div>'} */}
              <div className="home-hero">{home.imageUrl !== undefined && <Hero imageUrl={home.imageUrl} text="Christa Prentiss" />}</div>
              <div className="transform translate-x-0 z-40">
                <Intro intro={home.intro} />
                <Publications publications={publications} />
                <Gallery works={works} />
              </div>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {about.heroUrl && <Hero imageUrl={about.heroUrl} text="About" />}
              <About about={about} />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
