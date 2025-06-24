import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import faqBanner from "/Images/about/faq/faq-banner.webp";
import FAQ from "../components/About Components/FAQ";

const FAQPage = () => {
  return (
    <>
      <Header title="FAQ" banner={faqBanner} />
      <FAQ />
      <Footer />
    </>
  );
};

export default FAQPage;
