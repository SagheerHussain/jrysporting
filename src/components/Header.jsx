import React from "react";
import Navbar from "./Navbar";
import ShowcaseSlider from "./ShowcaseSlider";

const Header = () => {
  return (
    <>
      <header id="header" className="linear_gradient">
        <Navbar />
        <div className="h-[80vh] pt-[10vh]">
          <ShowcaseSlider />
        </div>
      </header>
    </>
  );
};

export default Header;
