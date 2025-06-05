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
      

      {/* Foreground content */}
      <TestNavbar />
      <Showcase />
    </header>
  );
};

export default Header;
