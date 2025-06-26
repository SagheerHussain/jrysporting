import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import experienceBanner from "/Images/Instructions/Experienced Package/banner.webp";
import ExperiencePackage from "../components/Instructions Components/ExperiencePackage";
import WhatCanExpect from "../components/Instructions Components/WhatCanExpect";
import Reviews from "../components/Reviews";

const ExperiencePage = () => {
  return (
    <>
      <Header title="Experience Package" banner={experienceBanner} />
      <ExperiencePackage />
      <WhatCanExpect />
      <Reviews />
      <Footer />
    </>
  );
};

export default ExperiencePage;
