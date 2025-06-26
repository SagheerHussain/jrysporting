import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import NRA_Pistol_ClassBanner from "/Images/Instructions/NRA Class Pistol/banner.webp"
import NRAPistolClass from "../components/Instructions Components/NRAPistolClass";
import Banner from "../components/Instructions Components/Banner";

const NRA_Pistol_ClassPage = () => {
  return (
    <>
      <Header title="NRA Pistol Class" banner={NRA_Pistol_ClassBanner} />
      <NRAPistolClass />
      <Banner />
      <Footer />    
    </>
  );
};

export default NRA_Pistol_ClassPage;
