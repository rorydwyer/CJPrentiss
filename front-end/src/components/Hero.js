import { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import anime from "animejs/lib/anime.es.js";

const Hero = ({ imageURL, text }) => {
  useEffect(() => {
    let textWrapper = document.querySelector("#hero-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline().add({
      targets: "#hero-text .letter",
      translateY: [100, 0],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 1500 + 35 * i,
    });
  }, []);

  return (
    <ParallaxBanner
      className="relative"
      layers={[
        {
          image: `http://localhost:1337${imageURL}`,
          amount: 0.2,
        },
      ]}
      style={{
        height: "100vh",
      }}
    >
      <div className="text-white absolute bottom-8 right-8">
        <span className="scroll-text -left-6 -top-12 text-lg absolute">scroll</span>
        <div className="c-scroll-icon">
          <div className="c-scroll-icon-line-mask">
            <div className="c-scroll-icon-line"></div>
          </div>
        </div>
      </div>
      <div id="hero-text" className="text-5xl sm:text-7xl  md:text-8xl lg:text-9xl text-white fixed bottom-3 sm:bottom-2 md:bottom-1 lg:bottom-0 left-5">
        {text}
      </div>
    </ParallaxBanner>
  );
};

export default Hero;
