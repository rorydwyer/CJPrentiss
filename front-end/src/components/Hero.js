import { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import anime from "animejs/lib/anime.es.js";

const Hero = () => {
  useEffect(() => {
    let textWrapper = document.querySelector("#intro-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline().add({
      targets: "#intro-text .letter",
      translateY: [100, 0],
      translateZ: 0,
      // opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 1800 + 35 * i,
    });
  }, []);

  return (
    <ParallaxBanner
      className="your-class"
      layers={[
        {
          image: "https://images.unsplash.com/photo-1636136569435-d8221eb684bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
          amount: 0.3,
        },
      ]}
      style={{
        height: "100vh",
      }}
    >
      <div id="intro-text" className="text-9xl text-white fixed -bottom-2 left-5">
        Christa Prentiss
      </div>
    </ParallaxBanner>
  );
};

export default Hero;
