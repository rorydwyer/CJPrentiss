import { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { withController, useController } from "react-scroll-parallax";
import anime from "animejs/lib/anime.es.js";

const Hero = ({ imageURL, text }) => {
  const { parallaxController } = useController();

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

    parallaxController.update();
  }, [imageURL, text, parallaxController]);

  return (
    <ParallaxBanner
      className="your-class"
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
      <div id="hero-text" className="text-9xl text-white fixed -bottom-2 left-5">
        {text}
      </div>
    </ParallaxBanner>
  );
};

export default withController(Hero);
