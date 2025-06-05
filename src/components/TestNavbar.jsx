// src/components/Navbar.jsx
import React from "react";
import Logo from "./Logo";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container d-flex">
        <div className="logo">
          <a href="/" className="d-flex align-items-center">
            <Logo className="max-w-[250px] p-3" alt="" />
          </a>
        </div>
        <div className="w-full">
          <div className="top-menu h-[50%] d-flex align-items-center justify-content-between px-3">
            <div className="social-links">
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/AlMehdisolutions">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/company/al-mehdi-solutions/mycompany/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="call-to-action">
              <p>
                <IoMdCall className="text-[24px] bg-primary_bg rounded-full me-2 p-1" />{" "}
                Make a call{" "}
                <a href="tel:+14087783600" className="ps-2">
                  408 778 3600
                </a>
              </p>
            </div>
          </div>
          <div className="bottom-menu h-[50%] d-flex align-items-center justify-content-between ps-4">
            <ul className="flex bottom-menu-unordered-list">
              {[
                { label: "Home", slug: "#" },
                {
                  label: "About",
                  slug: "#",
                  subMenu: [
                    { label: "Coyoto Valley", slug: "#" },
                    { label: "Proshop", slug: "#" },
                    { label: "Gun Transfer", slug: "#" },
                    { label: "Lodging", slug: "#" },
                    { label: "FAQ", slug: "#" },
                  ],
                },
                {
                  label: "Shooting",
                  slug: "#",
                  subMenu: [
                    { label: "Courses", slug: "#" },
                    { label: "Ranges Rules", slug: "#" },
                    { label: "Requierements", slug: "#" },
                    { label: "First Time Shooters", slug: "#" },
                  ],
                },
                {
                  label: "Instructions",
                  slug: "#",
                  subMenu: [
                    { label: "Experience Package", slug: "#" },
                    { label: "Private Instructions", slug: "#" },
                    { label: "NRA Pistol Class", slug: "#" },
                    { label: "Home Defence", slug: "#" },
                  ],
                },
                { label: "Pricing", slug: "#" },
                { label: "Calender", slug: "#" },
                { label: "Events", slug: "#" },
                { label: "Contact", slug: "#" },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`text-primary_text text-[.8rem] ${
                    item.subMenu ? "relative" : ""
                  } uppercase font-semibold transition-all duration-300 ease-in-out group z-[9]`}
                >
                  <a
                    href={item.slug}
                    className="flex items-center menu-list-link"
                  >
                    {item.label}{" "}
                    {item.subMenu && <MdKeyboardArrowDown className="inline" />}
                  </a>
                  {item.subMenu && (
                    <ul
                      className="z-[99999] sub-menu group-hover:opacity-100 group-hover:visible invisible group-hover:h-auto opacity-0 h-[0px] transition-all duration-300 ease-in-out absolute top-full group-hover:translate-y-[10px] translate-y-[20px] left-0 w-[200px] bg-primary_bg"
                      style={{
                        background: "url('/Images/texture.png'), #D56602",
                        backgroundBlendMode: "multiply",
                        backgroundSize: "contain",
                        zIndex: 1,
                      }}
                    >
                      <div
                        className="clip_box w-[10px] h-[10px] absolute top-[-8px] left-[5%] bg-primary_bg z-[-1]"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                      ></div>
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-secondary_text border-b-[1px] hover:cursor-pointer hover:bg-secondary_bg hover:text-primary_text_hover border-b-border_primary pe-4 py-3 ps-3 text-[13px] uppercase font-medium transition-all duration-300 ease-in-out"
                        >
                          <a href={subItem.slug}>{subItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="nav-manu">
              <i className="fa-solid fa-bars" id="openAsideMenu"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
