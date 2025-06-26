import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import HomeDefenseBanner from "/Images/Instructions/Home Defense/banner.webp"
import HomeDefense from "../components/Instructions Components/HomeDefense";
import Banner from "../components/Instructions Components/Banner";
import Pricing from "../components/Pricing";

const HomeDefensePage = () => {
  return (
    <>
      <Header title="Basic Home Defense" banner={HomeDefenseBanner} />
      <HomeDefense />
      <Banner />
      <Footer />    
    </>
  );
};

export default HomeDefensePage;
