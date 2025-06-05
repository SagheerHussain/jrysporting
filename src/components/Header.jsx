import React from "react";
import TestNavbar from "./TestNavbar";
import Showcase from "./Showcase";

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
      <TestNavbar />
      <Showcase />
    </header>
  );
};

export default Header;
