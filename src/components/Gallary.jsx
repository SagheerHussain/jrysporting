// src/components/Gallery.jsx
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const images = [
  { src: "/Images/Gallery/1.webp", size: "row-span-2 col-span-1" },
  { src: "/Images/Gallery/2.webp", size: "row-span-1 col-span-2" },
  { src: "/Images/Gallery/3.webp", size: "row-span-2 col-span-1" },
  { src: "/Images/Gallery/7.webp", size: "row-span-1 col-span-1" },
  { src: "/Images/Gallery/17.webp", size: "row-span-1 col-span-1" },
];

const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const handleClick = (index) => {
    setSlideIndex(index + 1);
    setToggler(!toggler);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="text-center mb-12">
        <h5 className="text-[#818062] font-bold uppercase mb-2">
          Photo Gallery
        </h5>
        <h2 className="text-4xl font-medium mb-3 text-primary_bg">
          Explore Our Shooting Grounds
        </h2>
        <p className="max-w-xl mx-auto text-sm text-gray-600">
          Step into our visual gallery showcasing the scenic beauty,
          professional ranges, and thrilling shooting experiences of Coyote
          Valley.
        </p>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg cursor-pointer ${img.size}`}
              onClick={() => handleClick(index)}
            >
              <img
                src={img.src}
                alt={`img-${index}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={images.map((img) => img.src)}
        slide={slideIndex}
      />
    </section>
  );
};

export default Gallery;
