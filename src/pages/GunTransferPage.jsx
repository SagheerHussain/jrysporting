import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import gunTransferBanner from "/Images/about/gun transfer/banner.webp";
import Guidelines from "../components/About Components/Guidelines";

const GunTransfer = () => {
  return (
    <>
      <Header title="Gun Transfer" banner={gunTransferBanner} />
      <Guidelines />
      <Footer />
    </>
  );
};

export default GunTransfer;
