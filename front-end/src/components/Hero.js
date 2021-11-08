import { ParallaxBanner } from "react-scroll-parallax";

const Hero = () => {
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
      <div className="text-9xl text-white fixed -bottom-2 left-5">Christa Prentiss</div>
    </ParallaxBanner>
  );
};

export default Hero;
