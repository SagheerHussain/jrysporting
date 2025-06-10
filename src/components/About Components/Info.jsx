import React from "react";
import aboutImage from "/Images/about/info.webp";

const Info = () => {
  return (
    <>
      <section className="w-full py-20">
        <div className="container flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 w-full shadow-lg rounded-lg overflow-hidden">
            <img
              src={aboutImage}
              alt="Teaching at Coyote Valley"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#d56602] leading-tight mb-4">
              Why We Built <br />
              <span className="text-[#d56602]">
                Coyote Valley Sporting Clays
              </span>
            </h2>

            <p className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 leading-relaxed">
              We opened in 1992 with a simple vision — to create a
              family-oriented shotgun range and event facility with a focus on
              warm and welcoming customer service for everyone who visits.
            </p>

            <p className="text-base text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              Offering consistent and uncompromising customer service in a
              high-quality atmosphere and naturally beautiful surroundings. From
              small beginnings, we have slowly matured to become a leader in
              shooting range excellence.
              <br />
              <br />
              <span className="text-sm text-neutral-500">
                Owners Tom and Nancy Ebert along with a fantastic staff are here
                to welcome and serve you.
              </span>
            </p>

            <p className="text-lg font-bold text-neutral-800 dark:text-white">
              We look forward to seeing you there!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
