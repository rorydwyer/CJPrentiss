import Hero from "./Hero";

const About = ({ about }) => {
  return (
    <div>
      {about.Image && <Hero imageURL={about.Image.url} text="About" />}
      <div className="container mx-auto py-32 transform translate-x-0 z-40">
        <div className="grid grid-cols-2 gap-36">
          <div>
            <img
              src="https://images.unsplash.com/photo-1616776005756-4dca36124bf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
              alt="Profile"
            />
          </div>
          <div className="prose-lg">
            <p className="whitespace-pre-line">{about.AboutText}</p>
            <div className="mt-12">
              <span className="font-light">Contact: </span>
              <a href={`mailto:${about.Email}`} className="hover-underline-animation relative italic pb-2 font-serif">
                {about.Email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
