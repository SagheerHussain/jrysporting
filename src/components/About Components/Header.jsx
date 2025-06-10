import React from "react";
import Navbar from "../Navbar";
import Banner from "./Banner";

const Header = ({ title, banner }) => {
  return (
    <>
      <header className="relative">
        <Navbar />
        <Banner title={title} banner={banner} />
      </header>
    </>
  );
};

export default Header;
