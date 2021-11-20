const About = ({ about }) => {
  return (
    <div>
      <div className="container mx-auto py-12 md:py-32 transform translate-x-0 z-40">
        <div className="grid grid-cols-1 px-12 md:grid-cols-2 md:gap-12 lg:gap-36">
          <div className="mb-12 md:mb-0">{about.profileUrl && <img src={about.profileUrl} alt="Profile" />}</div>
          <div className="prose-lg">
            <p className="whitespace-pre-line">{about.about}</p>
            <div className="mt-12">
              <span className="font-light">Contact: </span>
              <a href={`mailto:${about.email}`} className="hover-underline-animation relative italic pb-2 font-serif">
                {about.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
