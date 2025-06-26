import React from "react";

const NRAPistolClass = () => {
  return (
    <>
      <section className="py-20">
        <div className="container flex-col">
          <h2 className="text-4xl text-[#D56602] text-center mb-4 relative inline-block">
            NRA Pistol Class
            <span className="block h-1 w-20 bg-[#D56602] mx-auto mt-2 rounded-full"></span>
          </h2>

          <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 leading-relaxed text-lg">
            This course will help beginners acquire basic pistol knowledge, a
            proper attitude and the fundamental skills necessary to own and use
            a handgun safely and responsibly. First Steps Pistol Orientation is
            designed to provide a hands-on introduction to the safe handling and
            proper orientation to 3 types of handguns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              style={{
                background: "url('/Images/texture.png')",
                backgroundBlendMode: "multiply",
                backgroundColor: "#fff",
                backgroundSize: "contain",
              }}
            >
              <h3 className="text-[#D56602] text-xl mb-4">
                3 Types of Handguns
              </h3>
              <ul className="text-gray-600 space-y-1 mb-6">
                <li>Single Action Revolver</li>
                <li>Double Action Revolver</li>
                <li>Single Action Semi-Automatic.</li>
              </ul>
              <h3 className="text-[#D56602] text-xl mb-4">
                Student Will Receive
              </h3>
              <ul className="text-gray-600 space-y-1 mb-6">
                <li>The Basics to Pistol Shooting handbook</li>
                <li>NRA Gun Safety Rules brochure</li>
              </ul>
              <h3 className="text-[#D56602] text-xl mb-2">
                Five Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Course is five hours including class and range time.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              style={{
                background: "url('/Images/texture.png')",
                backgroundBlendMode: "multiply",
                backgroundColor: "#fff",
                backgroundSize: "contain",
              }}
            >
              <h3 className="text-[#D56602] text-xl mb-4">
                Students Will Learn
              </h3>
              <ul className="text-gray-600 space-y-1 leading-relaxed">
                <li>The NRA's rules for safe gun handling</li>
                <li>The particular gun model parts and operation</li>
                <li>Ammunition</li>
                <li>Shooting Fundamentals</li>
                <li>Cleaning the Pistol</li>
                <li>Opportunities for skill development</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div
              style={{
                background: "url('/Images/texture.png')",
                backgroundBlendMode: "multiply",
                backgroundColor: "#fff",
                backgroundSize: "contain",
              }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col justify-between"
            >
              <h3 className="text-[#D56602] text-xl">
                Contact Instructor
              </h3>
              <p className="text-gray-500">
                This Class is temporarily Not Available
              </p>
              <div>
                <h3 className="text-[#D56602] text-xl mb-2">
                  Class Cost
                </h3>
                <p className="text-4xl font-extrabold text-gray-900 mb-2">
                  $249
                </p>
                <p className="font-semibold text-gray-900 mb-4">
                  per person, $50 deposit
                </p>
                <p className="text-gray-600 text-sm">
                  Cost includes pistols, ammunition, targets & range fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NRAPistolClass;
