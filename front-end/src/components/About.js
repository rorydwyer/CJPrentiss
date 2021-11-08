import Hero from "./Hero";

const About = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 gap-8">
          <div>Image here</div>
          <p>Something else</p>
        </div>
      </div>
    </div>
  );
};

export default About;
