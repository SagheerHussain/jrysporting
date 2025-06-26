import React from "react";

const Banner = () => {
  return (
    <>
      <section className="py-10 bg-[#D56602]">
        <div className="container flex-col text-center">
          <h2 className="text-[#fff] text-3xl mb-4">PLEASE NOTE</h2>
          <p className="text-[#fff] text-lg">
            This course is conducted by an outside vendor. A fee is paid to CVSC
            for the use of our facility however Coyote Valley Sporting Clays
            does not have operational control of this course.
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
