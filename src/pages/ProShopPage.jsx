import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import Proshop from "../components/About Components/Proshop";
import Reviews from "../components/Reviews";
import proshopBanner from "/Images/about/proshop/proshop-banner.webp";

const ProShopPage = () => {
  return (
    <>
      <Header title="ProShop" banner={proshopBanner} />
      <Proshop />
      <Reviews />
      <Footer />
    </>
  );
};

export default ProShopPage;
