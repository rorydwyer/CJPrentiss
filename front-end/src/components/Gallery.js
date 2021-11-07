import { SRLWrapper } from "simple-react-lightbox";
const Gallery = ({ works }) => {
  return (
    <div className="container mx-auto">
      <SRLWrapper>
        <div id="gallery" className="flex flex-wrap justify-between -mx-8">
          {works.map((work) => (
            <div style={{ height: "420px" }} className="masonry-brick m-8 flex-auto overflow-hidden">
              <img key={work.id} alt={work.Title} src={`http://localhost:1337${work.Image.url}`} className="object-cover w-full h-full align-middle" />
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
};

export default Gallery;
