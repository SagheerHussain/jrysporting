import React from "react";
import companyImageOne from "/Images/about/lodging/companies-img (1).webp"
import companyImageTwo from "/Images/about/lodging/companies-img (2).webp"
import companyImageThree from "/Images/about/lodging/companies-img (3).webp"
import companyImageFour from "/Images/about/lodging/companies-img (4).webp"
import companyImageFive from "/Images/about/lodging/companies-img (5).webp"
import lodgingLogoOne from "/Images/about/lodging/logo (1).gif"
import lodgingLogoTwo from "/Images/about/lodging/logo (2).gif"
import lodgingLogoThree from "/Images/about/lodging/logo (3).gif"
import lodgingLogoFour from "/Images/about/lodging/logo (4).webp"
import lodgingLogoFive from "/Images/about/lodging/logo (5).gif"

const companyImages = [
  companyImageOne,
  companyImageTwo,
  companyImageThree,
  companyImageFour,
  companyImageFive,
];

const hotelLogos = [
  lodgingLogoOne,
  lodgingLogoTwo,
  lodgingLogoThree,
  lodgingLogoFour,
  lodgingLogoFive,
];

const hotels = [
  {
    name: "Holiday Inn Express",
    address: "17035 Condit Road, Morgan Hill, CA 95037",
    phone: "(408) 776-7676",
    logo: "https://irp-cdn.multiscreensite.com/454c6b31/dms3rep/multi/Holiday-Inn.gif",
  },
  {
    name: "Hampton Inn",
    address: "16115 Condit Road, Morgan Hill, CA 95037",
    phone: "(408) 779-7666",
    logo: "https://irp-cdn.multiscreensite.com/454c6b31/dms3rep/multi/Hampton.gif",
  },
  {
    name: "Courtyard Marriott",
    address: "18610 Madrone Parkway, Morgan Hill, CA 95037",
    phone: "(408) 782-6034",
    logo: "https://irp-cdn.multiscreensite.com/454c6b31/dms3rep/multi/Holiday-Inn.gif",
  },
  {
    name: "La Quinta Inn and Suites",
    address: "17043 Condit Road, Morgan Hill, CA 95037",
    phone: "(669) 888-37006",
    logo: "https://irp-cdn.multiscreensite.com/454c6b31/dms3rep/multi/Holiday-Inn.gif",
  },
  {
    name: "Comfort Inn",
    address: "16225 Condit Road, Morgan Hill, CA 95037",
    phone: "(408) 778-3400",
    logo: "https://irp-cdn.multiscreensite.com/454c6b31/dms3rep/multi/Holiday-Inn.gif",
  },
];

function Lodging() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center text-[#D56602] mb-14">
        Lodging close to Coyote Valley
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, idx) => (
          <div
            key={idx}
            style={{
              background: "url('/Images/texture.png')",
              backgroundBlendMode: "multiply",
              backgroundColor: "#fff",
            }}
            className="flex flex-col rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={companyImages[idx]}
              alt={hotel.name}
              className="w-full object-cover max-h-[200px]"
            />
            <div className="p-6 flex flex-col justify-between">
              <div className="text-gray-800 text-sm leading-relaxed mb-5">
                <div className="flex justify-between items-start">
                  <div className="lodging-content pe-4">
                    <h1 className="text-lg mb-3">{hotel.name}</h1>
                    <p className="text-[1rem]">{hotel.address}</p>
                    <p className="text-[1rem]">{hotel.phone}</p>
                  </div>
                  <img
                    src={hotelLogos[idx]}
                    alt={`${hotel.name} logo`}
                    className="w-24 mb-4 object-contain"
                  />
                </div>
              </div>
              <div className="w-full">
                <button className="btn-main mt-4 translate-y-[10px] p-4 w-full">
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lodging;
