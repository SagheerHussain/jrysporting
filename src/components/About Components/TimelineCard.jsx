import React from "react";

const TimelineCard = ({ item, color, className = "" }) => {
  return (
    <div className={`md:w-1/2 ${className}`}>
      <div
        className="rounded-lg p-6 shadow-lg"
        style={{
          background: "url('/Images/texture.png')",
          backgroundBlendMode: "multiply",
          backgroundColor: color,
          backgroundSize: "contain",
        }}
      >
        <h3 className="text-lg font-semibold">{item.heading}</h3>
        <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
