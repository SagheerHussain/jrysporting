import React from "react";

function Requirements({ requirementData }) {
  return (
    <section className="requirements py-20">
      <div className="container flex-col">
        <h2 className="text-2xl text-[#d56602] text-center mb-10">
          You MUST Follow These Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requirementData.map(
            ({ icon, title, description, button }, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md shadow-lg flex flex-col items-center text-center"
                style={{
                  background: "url('/Images/texture.png')",
                  backgroundBlendMode: "multiply",
                  backgroundColor: "#fff",
                }}
              >
                {icon}
                <h3 className="text-[#d56602] text-lg mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 mb-6">{description}</p>
                {button && (
                  <button className="btn-main mt-4 translate-y-[10px] p-4">
                    Read Rules
                  </button>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Requirements;
