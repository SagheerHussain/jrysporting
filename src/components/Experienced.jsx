import React from "react";
import experiencedOne from "/Images/experienced/experienced (1).webp";
import experiencedTwo from "/Images/experienced/experienced (2).webp";
import experiencedThree from "/Images/experienced/experienced ( 3 ).webp";
import experiencedFour from "/Images/experienced/experienced (4).jpg";
import experiencedFive from "/Images/experienced/experienced (5 ).webp";

const Experienced = () => {
  return (
    <section className="w-full py-20">
      <div className="container flex-col">
        
        <div className="max-w-7xl mx-auto mb-12">
          <div className="top-brands-info text-center">
            <h5 className="text-lg text-[#818062] uppercase font-bold">
              Clients Across World
            </h5>
            <h4 className="sm:text-4xl text-3xl text-primary_bg uppercase font-bold my-3">
              Comments from your friends
            </h4>
            <p className="text-primary_text text-sm mt-3">
              Hear real stories from fellow shooters who turned their day at
              Coyote Clays into unforgettable memories.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Side: Experience Group Package */}
          <div
            className="relative bg-cover bg-center rounded-xl overflow-hidden"
            style={{ backgroundImage: `url('${experiencedOne}')` }}
          >
            <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-start text-white p-8 space-y-4">
              <h2 className="text-4xl font-bold uppercase">
                The Experience Group Package
              </h2>
              <p className="text-lg font-medium">
                Our Most Popular Group Package
              </p>
              <div>
                <button
                  className="btn-main mt-4 translate-y-[10px] py-4 px-6"
                  style={{ color: "#fff" }}
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: 4 Options */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Visit Our Pro Shop",
                label: "ProShop",
                image: experiencedTwo,
              },
              {
                title: "Get Private Instruction",
                label: "Instruction",
                image: experiencedThree,
              },
              {
                title: "See the Shooting Courses",
                label: "Courses",
                image: experiencedFour,
              },
              {
                title: "Read the Range Rules",
                label: "Rules",
                image: experiencedFive,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-md group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end px-4 py-12 text-white">
                  <h3 className="text-lg font-semibold text-center">
                    {item.title}
                  </h3>
                  <button
                    className="btn-main mt-4 translate-y-[10px] py-4 px-6"
                    style={{ color: "#fff" }}
                  >
                    {item.label}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experienced;
