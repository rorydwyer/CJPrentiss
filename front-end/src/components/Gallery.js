import { SRLWrapper } from "simple-react-lightbox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Gallery = ({ works }) => {
  const options = {
    thumbnails: {
      showThumbnails: false,
    },
  };

  return (
    <div className="container mx-auto">
      <SRLWrapper options={options}>
        <div id="gallery" className="flex flex-wrap justify-between -mx-8">
          {works.map((work) => (
            <div key={work.id} style={{ height: "420px" }} className="masonry-brick m-8 flex-auto overflow-hidden">
              <LazyLoadImage
                effect="opacity"
                alt={work.Title}
                src={`http://localhost:1337${work.Image.url}`}
                className="object-cover w-full h-full align-middle"
                wrapperClassName="w-full h-full"
                threshold={0}
              />
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
};

export default Gallery;
