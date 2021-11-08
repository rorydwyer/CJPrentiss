import { Parallax } from "react-scroll-parallax";

const Intro = ({ intro }) => {
  return (
    <Parallax y={[-20, 20]}>
      <div className="container mx-auto flex flex-col justify-center md:pl-24 md:pr-52 h-screen px-4 my-32">
        <p className="italic text-xl font-serif mb-8">- hello!</p>
        <h2 className="text-6xl leading-relaxed font-light">{intro}</h2>
      </div>
    </Parallax>
  );
};

export default Intro;
