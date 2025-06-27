import React from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "MAIN COURSE TARGETS",
    price: "9.99",
    priceColor: "purple-600",
    features: [
      "Our Main Course is fully automated with electric automatic clay target throwers controlled by a wi-card system that counts each target thrown. There is no “range fee”, you simply pay for the targets that you actually release with a wi-card that we issue to you when you arrive.",
      "Typically, 8-10 targets are attempted at each station, but you decide for yourself. Shoot as many or few as you like, only pay for what you throw. Word of caution: our wi-cards carry a fee of $300 if lost so be very careful and DO NOT LOSE IT!",
    ],
  },
  {
    name: "SKEET & TRAP TARGETS",
    price: "49.99",
    priceColor: "pink-600",
    features: [
      "Our 2 Skeet fields and Trap field are fully automated and use a token system to activate the traps. We sell tokens that provide 25 targets when deposited into the machine on the field. Use our Token Dispenser inside the proshop to get $7.50 pricing on quantity of 8 tokens for $60. ",
      "Dispenser only accepts $20 bills. Tokens are not returnable or refundable.",
    ],
  },
  {
    name: "PRACTICE FIELDS TARGETS",
    price: "99.99",
    priceColor: "teal-500",
    features: [
      "Dispenser only accepts $20 bills.",
      "Tokens are not returnable or refundable.",
    ],
  },
];

// Map priceColor keys to actual Tailwind classes
const colorClassMap = {
  "purple-600": {
    border: "border-t-4 border-[#FB9E3A]",
    text: "text-[#FB9E3A]",
    check: "text-[#FB9E3A]",
  },
  "pink-600": {
    border: "border-t-4 border-[#EA2F14]",
    text: "text-[#EA2F14]",
    check: "text-[#EA2F14]",
  },
  "teal-500": {
    border: "border-t-4 border-[#FB9E3A]",
    text: "text-[#FB9E3A]",
    check: "text-[#FB9E3A]",
  },
};

const Pricing = () => {
  return (
    <section className="bg-gray-50 flex items-center justify-center py-20">
      <div className="container flex-col">

        <h2 className="text-4xl text-[#D56602] mb-12 text-center">Pricing</h2>
        <h4 className="text-2xl text-[#D56602] mb-10 after:block after:translate-y-2 after:bg-[#D56602] after:w-full after:h-[1px] after:content-['']">Clay Targets</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
          {plans.map(({ name, price, priceColor, features }) => {
            const colorClasses = colorClassMap[priceColor];
            return (
              <div
                key={name}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center ${colorClasses.border}`}
              >
                <h3 className={`text-xl ${colorClasses.text} mb-6`}>{name}</h3>
                <div className="flex items-start gap-2 mb-6">
                  <span className={`text-4xl font-bold ${colorClasses.text}`}>$</span>
                  <span
                    className={`text-6xl font-extrabold ${colorClasses.text}`}
                  >
                    {price.split(".")[0]} 
                  </span>
                  <span
                    className={`text-2xl font-bold mt-3 rounded-full ${colorClasses.text}`}
                  >
                    .
                  </span>
                  <span
                    className={`text-2xl font-bold mt-3 ${colorClasses.text}`}
                  >
                    {price.split(".")[1]}
                  </span>
                </div>
                <ul className="space-y-3 mb-10 w-full max-w-xs">
                  {features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <FaCheck
                        className={`${colorClasses.check} w-5 h-5 flex-shrink-0`}
                      />
                      <span className="text-[.8rem]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-main text-primary_bg mt-4 translate-y-[10px] py-4 px-8">
                  Contact Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
