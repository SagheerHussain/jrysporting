import React from "react";

const colorClasses = {
  purple: {
    border: "border-t-4 border-[#FB9E3A]",
    text: "text-[#FB9E3A]",
  },
  pink: {
    border: "border-t-4 border-[#EA2F14]",
    text: "text-[#EA2F14]",
  },
  orange: {
    border: "border-t-4 border-[#EA2F14]",
    text: "text-[#EA2F14]",
  },
  teal: {
    border: "border-t-4 border-[#EA2F14]",
    text: "text-[#EA2F14]",
  },
  green: {
    border: "border-t-4 border-[#FB9E3A]",
    text: "text-[#FB9E3A]",
  },
};

const Card = ({ title, subtitle, price, note, special, extra, color, isFirst, isLast }) => {
  const classes = colorClasses[color] || colorClasses.orange; // fallback to orange

  // Conditional rounded corners to merge cards
  let roundedClass = "";
  if (isFirst) roundedClass = "rounded-l-2xl";
  else if (isLast) roundedClass = "rounded-r-2xl";
  else roundedClass = "rounded-none";

  return (
    <div
      className={`bg-white shadow-lg p-6 flex-1 border-t border-gray-300 ${classes.border} ${roundedClass} ${isFirst ? "border-r-0" : ""} ${isLast ? "border-l-0" : "border-r-0"}`}
    >
      <div className="mb-4 text-center">
        <h3 className={`${classes.text} text-lg leading-none`}>{title}</h3>
        {special && (
          <p className={`${classes.text} text-sm mt-1`}>{special}</p>
        )}
      </div>
      <div className="text-center mb-2">
        <span className={`text-4xl font-bold ${classes.text}`}>$</span>
        <span className={`${classes.text} text-5xl font-extrabold`}>{price}</span>
      </div>
      {note && <p className="text-center font-bold text-sm mb-2">{note}</p>}    
      {subtitle && <p className="text-center text-sm mb-1">{subtitle}</p>}
      {extra && <p className="text-center text-xs text-gray-600">{extra}</p>}
    </div>
  );
};

const AmmuPricing = () => {
  const ammunitionCards = [
    {
      title: "12 GAUGE SHELLS",
      subtitle: "Box of 25 Shells",
      price: "16.99",
      note: "and up",
      color: "purple",
    },
    {
      title: "20 GAUGE SHELLS",
      subtitle: "Box of 25 Shells",
      price: "16.99",
      note: "and up",
      special: "Limited Availability",
      color: "pink",
    },
  ];

  const equipmentRentalsCards = [
    {
      title: "SHOTGUN RENTAL",
      price: "20",
      subtitle: "Per Shot",
      note: "$20 minimum",
      extra: "(rental rate doubles in rain)",
      color: "pink",
    },
    {
      title: "NEW GUN DEMOS",
      price: "10",
      subtitle: "minimum",
      note: "25 Shots",
      extra: "(on selected new guns)",
      color: "purple",
    },
    {
      title: "SHOTGUN PUSH CARTS",
      price: "6",
      subtitle: "For Full Days Use",
      color: "teal",
    },
    {
      title: "2 PERSON GOLF CART",
      price: "30",
      subtitle: "For 2.5 Hours",
      note: "then $10/ hour",
      color: "green",
    },
  ];

  return (
    <>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#D56602] text-lg mb-6 border-b border-[#D56602] pb-1">
            Ammunition &nbsp;•&nbsp; NSI, Fiocchi and Winchester AA Shotshells
          </h2>
          <div className="flex justify-center mb-20">
            {ammunitionCards.map((card, idx) => (
              <Card
                key={idx}
                {...card}
                isFirst={idx === 0}
                isLast={idx === ammunitionCards.length - 1}
              />
            ))}
          </div>

          <h2 className="text-[#D56602] text-lg mb-6 border-b border-[#D56602] pb-1">
            Equipment Rentals
          </h2>
          <div className="flex justify-center">
            {equipmentRentalsCards.map((card, idx) => (
              <Card
                key={idx}
                {...card}
                isFirst={idx === 0}
                isLast={idx === equipmentRentalsCards.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AmmuPricing;
