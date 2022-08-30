// import { Parallax } from "react-scroll-parallax";
const Intro = ({ intro }) => {
  return (
    // <Parallax y={[-20, 20]}>
    <div className="container intro-text-lax mx-auto flex flex-col justify-center md:pl-24 md:pr-52 px-12 my-8 lg:my-18 text-gray-700">
      {/* <p className="italic text-xl font-serif mb-8">- hello!</p> */}
      <h2 id="intro-text" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed font-light">
        {intro}
      </h2>
    </div>
    // </Parallax>
  );
};

export default Intro;
