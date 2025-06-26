import React from "react";

const HomeDefense = () => {
  return (
    <>
      <section className="py-20">
        <div className="container flex-col">
          <h2 className="text-4xl text-[#D56602] text-center mb-4 relative inline-block">
            Basic Home Defense
            <span className="block h-1 w-20 bg-[#D56602] mx-auto mt-2 rounded-full"></span>
          </h2>

          <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 leading-relaxed text-lg">
            Most people purchase a firearm to defend themselves and their loved
            ones. This class tackles a wide range of topics from the proper
            mindset, to how to prepare your home for safety, to how to use
            appropriate force, to shooting techniques.
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
              <h3 className="text-[#D56602] text-xl mb-4">Course Covers</h3>
              <ul className="text-gray-600 space-y-1 mb-6">
                <li>Basic Firearm Safety</li>
                <li>Defensive Shooting Safety</li>
                <li>Safe Firearm Storage</li>
                <li>Basic Defensive Shooting Skills</li>
                <li>Shooting Positions</li>
                <li>Aiming and firing Techniques</li>
                <li>Utilizing Cover and Concealment</li>
                <li>Opportunities for Skill Enhancement</li>
              </ul>
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
              <h3 className="text-[#D56602] text-xl mb-4">Course Covers</h3>
              <ul className="text-gray-600 space-y-1 leading-relaxed mb-6">
                <li>Making You and Your Home Safer</li>
                <li>Selecting a Firearm for Personal Protection</li>
                <li>Selecting Ammunition for Personal Protection</li>
              </ul>
              <div className="border-b-2 border-[#D56602] w-16 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm">
                Cost includes targets & range fees. Cost does not include guns
                or ammunition. You will need 200 rounds of ammunition.
              </p>
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
              <h3 className="text-[#D56602] text-xl mb-4">
                Contact Instructor
              </h3>
              <p className="text-gray-500 mb-10">
                Contact Instructor
                <br />
                This Class is Temporarily Not Available
              </p>
              <div>
                <h3 className="text-[#D56602] text-xl mb-2">Class Cost</h3>
                <p className="text-4xl font-extrabold text-gray-900 mb-2">
                  $150
                </p>
                <p className="font-semibold text-gray-900 mb-4">
                  per person, $75 deposit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeDefense;
