import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import WhyChooseUs from "../components/WhyChooseUs";
import FrequentlyAsked from "../components/FrequentlyAsked";
import Gallary from "../components/Gallary";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Experienced from "../components/Experienced";
import { TextHoverEffect } from "../components/ui/TextHoverEffect";

const HomePage = () => {
  return (
    <>
      <Header />
      <Info />
      <FrequentlyAsked />
      <WhyChooseUs />
      <Gallary />
      <Reviews />
      <Experienced />
      <Footer />
    </>
  );
};

export default HomePage;
