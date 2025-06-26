import React from "react";

const CardEffect = ({ id, icon, title, content }) => {
  return (
    <div
      key={id}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm border border-gray-100"
      style={{
        background: "url('/Images/texture.png')",
        backgroundBlendMode: "multiply",
        backgroundColor: "#fff",
        backgroundSize: "contain",
      }}
    >
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-justify">{content}</p>
    </div>
  );
};

export default CardEffect;
