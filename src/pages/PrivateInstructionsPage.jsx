import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import PrivateInstructions from "../components/Instructions Components/PrivateInstructions";
import InstructionsAndRates from "../components/Instructions Components/InstructionsAndRates";
import privateInstructionsBanner from "/Images/Instructions/Private Instructions/banner.webp"

const PrivateInstructionsPage = () => {
  return (
    <>
      <Header title="Private Instructions" banner={privateInstructionsBanner} />
      <PrivateInstructions />
      <InstructionsAndRates />
      <Reviews />
      <Footer />
    </>
  );
};

export default PrivateInstructionsPage;
