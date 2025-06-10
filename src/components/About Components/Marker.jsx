import React from "react";

const Marker = ({ side }) => {
  return (
    <span
      className={`absolute top-2 z-20 h-4 w-4 rounded-full bg-[#9c5043]
            ${
              side === "left"
                ? "right-[calc(50%-0.5rem)] md:right-[-0.8rem]"
                : "left-[calc(50%-0.5rem)] md:left-[-0.8rem]"
            }`}
    />
  );
};

export default Marker;
