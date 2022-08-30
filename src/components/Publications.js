const Publications = ({ publications }) => {
  return (
    <div id="publications" className="container mx-auto lg:pl-24 lg:pr-24 px-12 sm:pb-16 pb-12  text-gray-700">
      <h2 className="text-3xl sm:text-center sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed font-semibold">Work published in the following</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 sm:gap-y-24 gap-y-10 sm:py-24 py-8">
        {publications.map((publication, i) => (
          <div key={i} className="publication">
            <h3 className="sm:text-2xl text-xl font-light">{publication.title}</h3>
            <a
              href={publication.publicationUrl}
              target="_blank"
              rel="noreferrer"
              className="italic font-bold text-red-300 font-serif relative hover-underline-animation"
            >
              <strong>View Publication</strong>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
