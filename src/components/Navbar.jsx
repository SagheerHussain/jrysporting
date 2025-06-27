// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showStickyMenu, setShowStickyMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 250) {
        setShowStickyMenu(true);
      } else {
        setShowStickyMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav id="navbar">
        <div className="container flex">
          <div className="logo">
            <Link to="/" className="d-flex align-items-center">
              <Logo className="max-w-[200px] p-3" alt="" />
            </Link>
          </div>
          <div className="w-full">
            <div className="bottom-menu h-[50%] items-center justify-between px-4 pt-2 flex">
              <div className="lg:flex hidden bottom-menu-unordered-list">
                {[
                  { label: "Home", slug: "/" },
                  {
                    label: "About",
                    slug: "/coyoto-valley",
                    subMenu: [
                      { label: "Coyoto Valley", slug: "/coyoto-valley" },
                      { label: "Proshop", slug: "/proshop" },
                      { label: "Gun Transfer", slug: "/gun-transfer" },
                      { label: "Lodging", slug: "/lodging" },
                      { label: "FAQ", slug: "/faq" },
                    ],
                  },
                  {
                    label: "Shooting",
                    slug: "#",
                    subMenu: [
                      { label: "Courses", slug: "/courses" },
                      { label: "Ranges Rules", slug: "/range-rules" },
                      { label: "Requierements", slug: "/requirements" },
                      {
                        label: "First Time Shooters",
                        slug: "/first-time-shooter",
                      },
                    ],
                  },
                  {
                    label: "Instructions",
                    slug: "#",
                    subMenu: [
                      {
                        label: "Experience Package",
                        slug: "/experience-package",
                      },
                      {
                        label: "Private Instructions",
                        slug: "/private-instructions",
                      },
                      { label: "NRA Pistol Class", slug: "/nra-pistol-class" },
                      { label: "Home Defence", slug: "/home-defense" },
                    ],
                  },
                  { label: "Pricing", slug: "/pricing" },
                  { label: "Calender", slug: "#" },
                  { label: "Events", slug: "/events" },
                  { label: "Contact", slug: "/contact" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`text-primary_text text-[.8rem] ${
                      item.subMenu ? "relative" : ""
                    } uppercase font-semibold transition-all duration-300 ease-in-out group z-[9]`}
                  >
                    <Link
                      to={item.slug}
                      className="flex items-center menu-list-link"
                    >
                      {item.label}{" "}
                      {item.subMenu && (
                        <MdKeyboardArrowDown className="inline" />
                      )}
                    </Link>
                    {item.subMenu && (
                      <div
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
                            background: "url('/Images/texture.png'), #D56602",
                            backgroundBlendMode: "multiply",
                            backgroundSize: "contain",
                            zIndex: 1,
                          }}
                        ></div>
                        {item.subMenu.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="text-secondary_text border-b-[1px] hover:cursor-pointer hover:bg-secondary_bg hover:text-primary_text_hover border-b-border_primary pe-4 py-3 ps-3 text-[13px] uppercase font-medium transition-all duration-300 ease-in-out"
                          >
                            <Link to={subItem.slug} className="block">
                              {subItem.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="lg:flex hidden items-center">
                <IoMdCall className="inline bg-primary_bg p-1 text-[24px] me-2 text-white rounded-full" />
                <a href="tel:408 778 3600" className="text-white text-[.7rem]">
                  408 778 3600
                </a>
              </p>

              <p className="flex justify-end lg:hidden w-full">
                <IoMenu
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="inline mb-2 text-[24px] me-2 text-white rounded-full"
                />
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 py-4 w-full z-[9] transition-transform duration-500 ease-in-out ${
          showStickyMenu ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background: "url('/Images/texture.png'), #9c5043",
          backgroundBlendMode: "multiply",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <div className="bottom-menu h-[50%] flex items-center justify-between px-4 pt-2">
            <ul className="lg:flex hidden bottom-menu-unordered-list">
              {[
                { label: "Home", slug: "/" },
                {
                  label: "About",
                  slug: "/coyoto-valley",
                  subMenu: [
                    { label: "Coyoto Valley", slug: "/coyoto-valley" },
                    { label: "Proshop", slug: "/proshop" },
                    { label: "Gun Transfer", slug: "/gun-transfer" },
                    { label: "Lodging", slug: "/lodging" },
                    { label: "FAQ", slug: "/faq" },
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
                { label: "Events", slug: "/events" },
                { label: "Contact", slug: "/contact" },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`text-primary_text text-[.8rem] ${
                    item.subMenu ? "relative" : ""
                  } uppercase font-semibold transition-all duration-300 ease-in-out group z-[9]`}
                >
                  <Link
                    to={item.slug}
                    className="flex items-center menu-list-link"
                  >
                    {item.label}{" "}
                    {item.subMenu && <MdKeyboardArrowDown className="inline" />}
                  </Link>
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
                          background: "url('/Images/texture.png'), #D56602",
                          backgroundBlendMode: "multiply",
                          backgroundSize: "contain",
                          zIndex: 1,
                        }}
                      ></div>
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-secondary_text border-b-[1px] hover:cursor-pointer hover:bg-secondary_bg hover:text-primary_text_hover border-b-border_primary pe-4 py-3 ps-3 text-[13px] uppercase font-medium transition-all duration-300 ease-in-out"
                        >
                          <Link to={subItem.slug}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <p className="lg:flex hidden items-center justify-end pb-1">
              <IoMdCall className="inline bg-primary_bg p-1 text-[24px] me-2 text-white rounded-full" />
              <a href="tel:408 778 3600" className="text-white text-[.7rem]">
                408 778 3600
              </a>
            </p>
          </div>

          <div className="flex justify-end px-4 w-full lg:hidden">
            <IoMenu
              onClick={() => setShowSidebar(!showSidebar)}
              className="text-[28px] text-white p-1 rounded-full"
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[300px] z-[9999] transform transition-transform duration-500 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar setShowSidebar={setShowSidebar} />
      </div>
    </>
  );
};

export default Navbar;
