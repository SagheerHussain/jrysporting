import React from "react";

const Banner = ({ title, banner }) => {

  console.log(banner);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
        className="relative z-[2] overflow-hidden h-full flex items-center justify-center"
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-75 z-[-1]"></div>
        <div className="flex items-center justify-center flex-col w-full z-[999]">
          <h1
            className="text-[2.5rem] mt-10 sm:text-[3rem] md:text-[4rem] text-center lg:text-[6rem] xl:text-[7rem] uppercase text-[#d56602]"
          >
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
