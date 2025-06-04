import React from "react";
import Navbar from "./Navbar";
import ShowcaseSlider from "./ShowcaseSlider";

const Header = () => {
  return (
    <>
      <header id="header" className="linear_gradient">
        <Navbar />
        <div className="pt-[30px]">
          <ShowcaseSlider />
        </div>
      </header>
    </>
  );
};

export default Header;
