import React from "react";
import Slider from "react-slick";
import TestNavbar from "./TestNavbar";
import Showcase from "./Showcase";
import bannerOne from "/Images/Hero Section Banner/45.webp";
import bannerTwo from "/Images/Hero Section Banner/46.webp";
import bannerThree from "/Images/Hero Section Banner/47.webp";

const Header = () => {
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
    <header id="header" className="relative h-[120vh] w-full">
      {/* Background slider */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Slider {...settings}>
          {[bannerOne, bannerTwo, bannerThree].map((bg, i) => (
            <div key={i}>
              <div
                className="w-full h-[120vh]"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Foreground content */}
      <TestNavbar />
      <Showcase />
    </header>
  );
};

export default Header;
