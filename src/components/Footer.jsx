import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import logo from "/Images/white-logo.png";

const Footer = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const images = [
    "Images/Footer/1.webp",
    "Images/Footer/2.webp",
    "Images/Footer/3.webp",
    "Images/Footer/17.webp",
    "Images/Footer/27.png",
    "Images/Footer/31.webp",
  ];

  return (
    <footer
      id="footer"
      className="text-gray-800 py-10"
      style={{
        background: "url('/Images/texture.png'), #9c5043",
        backgroundBlendMode: "multiply",
        backgroundSize: "contain",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="">
            <img src={logo} className="max-w-full"></img>
          </div>

          {/* Explore */}
          <div>
            <h6 className="text-lg mb-3 text-primary_bg">Explore</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-white text-[.8rem]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[.8rem]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[.8rem]">
                  Shooting
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[.8rem]">
                  Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[.8rem]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[.8rem]">
                  Calender
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[.8rem]">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[.8rem]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg mb-3 text-primary_bg">Contact</h6>
            <address className="text-sm mb-3 text-white">
              1000 San Bruno Ave Morgan Hill, CA 95037
            </address>
            <div className="flex items-center mb-2">
              <i className="fa-regular fa-envelope"></i>
              <span className="text-white text-[1rem]">
                info@coyoteclays.com
              </span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:408-778-3600" className="text-white text-[1rem]">
                Contact: 408-778-3600
              </a>
            </div>
          </div>

          <div>
            <img
              src="Images/Footer/cowboy-calender.gif"
              className="w-full"
              alt=""
            />
            <div className="text-center">
              <button
                className="btn-main text-primary_bg translate-y-[25px] p-4"
                style={{
                  color: "#fff",
                }}
              >
                Cowboy Calender
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col justify-center">
        <hr className="my-6 border-gray-300" />

        <p className="text-center text-sm text-white">
          © Copyright 2013 - 2025 CoyoteValley Sporting Clays
        </p>
      </div>
    </footer>
  );
};

export default Footer;
