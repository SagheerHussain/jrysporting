// src/components/WhyChooseUs.jsx
import React from "react";
import { FaMapMarkerAlt, FaUserTie, FaShieldAlt, FaGem } from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkerAlt className="text-[#fff] text-4xl" />,
    title: "Exceptional Grounds",
    desc: "The grounds are beautifully maintained and groomed. There is a ProShop and adjacent patio dining area for your convenience.",
  },
  {
    icon: <FaUserTie className="text-[#fff] text-4xl" />,
    title: "Knowledgeable Staff",
    desc: "Whether in the ProShop or out on the ranges, you will always get the best advice to improve your skills to enhance your shooting experience.",
  },
  {
    icon: <FaShieldAlt className="text-[#fff] text-4xl" />,
    title: "Safety and Security",
    desc: "We enforce strict firearm handling rules to ensure that everyone has a safe, secure and enjoyable experience.",
  },
  {
    icon: <FaGem className="text-[#fff] text-4xl" />,
    title: "Quality Experience",
    desc: "Coyote Valley has set the standards of excellence for clay shooting since our beginning. We have the finest grounds, staff and instructors.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-16"
      style={{
        background: "url('/Images/texture.png')",
        backgroundBlendMode: "multiply",
        backgroundColor: "#9c5043",
        backgroundSize: "contain",
      }}
    >
      <div className="container flex-col">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#fff]">
            A Notch (or three) Above All Others
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-dashed border border-gray-500 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
              style={{
                background: "url('/Images/texture.png')",
                backgroundBlendMode: "multiply",
                backgroundColor: "#D56602",
              }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#fff] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#fff] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
