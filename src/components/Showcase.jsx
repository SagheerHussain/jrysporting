// src/components/HeroSection.jsx
import React from "react";
import Slider from "react-slick";
import bannerOne from "/Images/Hero Section Banner/45.webp";
import bannerTwo from "/Images/Hero Section Banner/46.webp";
import bannerThree from "/Images/Hero Section Banner/47.webp";

const Showcase = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section id="showcase">
      {/* <div className="showcase-content">
          <div
            className="showcase-content-effect"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="0"
          ></div>
          <h6>Premier Clay Shooting Experience</h6>
          <h1 className="text-[48px] leading-[1.1]">
            Master Clay {""} <br />
            <span>Shooting Skills</span>
          </h1>
          <p
            className="text-[16px] max-w-[35rem]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="0"
          >
            Experience the thrill of clay target shooting amidst the scenic
            beauty of Santa Clara Valley. Our facility offers diverse courses
            suitable for all skill levels, ensuring a memorable outing for
            everyone.
          </p>
          <a
            href="about.html"
            className="btn-main"
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-offset="0"
          >
            Explore More
          </a>
        </div>
        <div className="showcase-content-vertical-effect"></div> */}

      <div className="relative w-full h-screen flex">
        {/* Left Side (Content + Overlay) */}
        <div
          className="w-1/2 bg-black flex items-center justify-center text-white p-10"
          style={{
            background: "url('/Images/texture.png'), #818062",
            backgroundBlendMode: "multiply",
            backgroundSize: "contain",
            zIndex: 1,
          }}
        >
          <div className="pt-20">
            <h6 className="text-white text-sm uppercase mb-3">
              Premier Clay Shooting Experience
            </h6>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Master Clay <br />
              <span className="text-[#D56602]">Shooting Skills</span>
            </h1>
            <p className="text-sm md:text-base max-w-md mb-6">
              Experience the thrill of clay target shooting amidst the scenic
              beauty of Santa Clara Valley. Our facility offers diverse courses
              suitable for all skill levels.
            </p>
            <a
              href="#about"
              className="btn-main bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="absolute top-0 left-[50%] w-1/2 h-full -z-10">
          <Slider {...settings}>
            {[bannerOne, bannerTwo, bannerThree].map((bg, i) => (
              <div key={i}>
                <div
                  className="w-full h-[120vh]"
                  style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100%",
                  }}
                ></div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-full z-[999] bg-gradient-to-r from-[#818062]/0 via-[rgb(129,128,98,1)] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Showcase;
