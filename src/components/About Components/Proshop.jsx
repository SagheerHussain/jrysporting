import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const images = [
  {
    src: "/Images/about/proshop/1.webp",
    title: "Shooting Apparel",
  },
  {
    src: "/Images/about/proshop/2.webp",
    title: "Eye Protection",
  },
  {
    src: "/Images/about/proshop/3.webp",
    title: "Eye Protection",
  },
  {
    src: "/Images/about/proshop/4.webp",
    title: "Ammunation",
  },
  {
    src: "/Images/about/proshop/5.webp",
    title: "Sites And Beads",
  },
  {
    src: "/Images/about/proshop/6.webp",
    title: "Shotguns",
  },
  {
    src: "/Images/about/proshop/7.webp",
    title: "Hard and Soft Cases",
  },
  {
    src: "/Images/about/proshop/8.webp",
    title: "Shooting Vests",
  },
  {
    src: "/Images/about/proshop/9.webp",
    title: "Chokes",
  },
  {
    src: "/Images/about/proshop/10.webp",
    title: "Shell Pouches",
  },
  {
    src: "/Images/about/proshop/11.webp",
    title: "Sporting Clays",
  },
  {
    src: "/Images/about/proshop/12.webp",
    title: "Recoil Pads",
  },
];

const Proshop = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightbox = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
          Our ProShop has what you need.
        </h2>

        <p className="text-neutral-700 dark:text-neutral-200 max-w-3xl mx-auto text-sm md:text-base mb-4 leading-relaxed">
          We are the source for clay targets and hunting shotguns in the Bay
          Area. We stock Browning and Beretta shotguns. Call us to check
          availability or place a custom order. We offer FFL transfer services
          and buy firearms for cash.{" "}
          <span className="font-semibold text-orange-600">
            Contact us at 408-778-3600
          </span>{" "}
          to see what's in stock.
        </p>

        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          Coyote Valley features an extensive ProShop, carrying items such as:
        </p>

        {/* Featured Brands */}
        <div className="mt-10 mb-6">
          <h3 className="text-xl font-semibold text-red-600 mb-4">
            Featured Brands
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <img
              src="/Images/about/brands/1.gif"
              alt="Winchester"
              className="w-[200px]"
            />
            <img
              src="/Images/about/brands/2.gif"
              alt="Beretta"
              className="w-[200px]"
            />
            <img
              src="/Images/about/brands/3.gif"
              alt="Browning"
              className="w-[200px]"
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded overflow-hidden cursor-pointer shadow-md transition duration-300 group"
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-black opacity-0 flex items-center justify-center group-hover:opacity-70 transition-opacity">
                <h1 className="text-white text-[1.5rem] text-center">{image.title}</h1>
              </div>
              <img
                src={image.src}
                alt={`ProShop item ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={images.map((img) => img.src)} // ✅ Pass only URLs
          slide={lightboxController.slide}
        />
      </div>
    </section>
  );
};

export default Proshop;
