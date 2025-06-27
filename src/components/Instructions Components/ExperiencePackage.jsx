import React from "react";
import { FaGem, FaCompass, FaClipboardList } from "react-icons/fa";

const ExperiencePackage = () => {
  return (
    <>
      <section className="py-20 bg-[#D56602]">
        <div className="container flex-col">
          <div className="text-center">
            <h2 className="text-4xl text-[#fff] mb-12 drop-shadow-lg">
              The Experience Package
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div
              className="bg-white rounded-lg shadow-lg border-t-[6px] border-[#9c5043] p-8 flex flex-col items-center text-center"
              style={{
                background: "url('/Images/texture.png')",
                backgroundBlendMode: "multiply",
                backgroundColor: "#fff",
                backgroundSize: "contain",
              }}
            >
              <FaGem className="text-[#D56602] text-5xl mb-6" />
              <h3 className="text-xl mb-4 text-[#D56602]">
                Experience Package Includes
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>48 Targets (per person)</li>
                <li>2 Boxes of Ammo (per person)</li>
                <li>Gun Rental</li>
                <li>Ear and Eye Protection</li>
                <li>One Guide for every 3-5 persons</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white rounded-lg shadow-lg border-t-[6px] border-[#9c5043] p-8 flex flex-col items-center text-center"
              style={{
                background: "url('/Images/texture.png')",
                backgroundBlendMode: "multiply",
                backgroundColor: "#fff",
                backgroundSize: "contain",
              }}
            >
              <FaCompass className="text-[#D56602] text-5xl mb-6" />
              <h3 className="text-xl mb-4 text-[#D56602]">
                Group Requirements
              </h3>
              <p className="text-gray-700 mb-4 max-w-xs">
                Groups of 26+, to start your reservation, please email us your
                request at{" "}
                <a
                  href="mailto:info@coyoteclays.com"
                  className="text-[#D56602] underline hover:text-[#9c5043]"
                >
                  info@coyoteclays.com
                </a>
              </p>
              <p className="text-gray-700 max-w-xs">
                Participants must be at least 13 years of age. CVSC recommends
                private lessons for ages 12 and under.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white rounded-lg shadow-lg border-t-[6px] border-[#9c5043] p-8 flex flex-col items-center text-center"
              style={{
                background: "url('/Images/texture.png')",
                backgroundBlendMode: "multiply",
                backgroundColor: "#fff",
                backgroundSize: "contain",
              }}
            >
              <FaClipboardList className="text-[#D56602] text-5xl mb-6" />
              <h3 className="text-xl mb-4 text-[#D56602]">
                Reservations Required
              </h3>
              <p className="text-gray-600 mb-6 max-w-xs leading-relaxed">
                Reservations are required. At least 7 days in advance. Book
                early. Limited availability. Fills up fast.
              </p>
              <div className="border-b-2 border-[#D56602] w-16 mb-6"></div>
              <p className="text-5xl font-bold text-[#D56602] mb-4">$105</p>
              <p className="text-sm font-semibold text-gray-700 mb-6">
                per person, plus tax
              </p>
              <a
                href="https://fareharbor.com/embeds/book/coyoteclays/items/74834/calendar/2019/12/?flow=36083&full-items=yes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-main text-primary_bg mt-4 translate-y-[10px] py-4 px-8">
                  Reservations
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperiencePackage;
