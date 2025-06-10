import React from "react";
import Showcase from "./Showcase";
import Navbar from "./Navbar";

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
    <header id="header" className="relative">
      <Navbar />
      <Showcase />
    </header>
  );
};

export default Header;
