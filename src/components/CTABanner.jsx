import React from "react";
import calenderBanner from "/Images/Calender/cta-banner.webp";
import logo from "/Images/Calender/logo.png";

const CTABanner = () => {
  return (
    <>
      <section
        id="cta"
        className="py-20"
        style={{
          backgroundImage: `url(${calenderBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="cta_content text-center flex flex-col items-center w-full">
            <img src={logo} className="w-[150px] h-[150px]" alt="" />
            <h1 className="text-2xl py-4">This Years</h1>
            <h2 className="text-5xl mb-4">NSCA Registered Shoot</h2>
            <p className="text-2xl">Memorial Day, May 27-28-29, 2023.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTABanner;
