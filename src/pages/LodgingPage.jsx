import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import lodgingBanner from "/Images/about/lodging/banner.webp";
import Lodging from "../components/About Components/Lodging";

const LodgingPage = () => {
  return (
    <>
      <Header title="Lodging" banner={lodgingBanner} />
      <Lodging />
      <Footer />
    </>
  );
};

export default LodgingPage;
