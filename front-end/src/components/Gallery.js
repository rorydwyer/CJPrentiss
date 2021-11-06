const Gallery = ({ works }) => {
  return (
    <div>
      {works.map((work) => (
        <img key={work.id} alt={work.Title} src={`http://localhost:1337${work.Image[0].url}`} />
      ))}
    </div>
  );
};

export default Gallery;
