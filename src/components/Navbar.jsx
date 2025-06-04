import React from "react";
import Logo from "./Logo";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav id="navbar" className="navbar py-4 h-[20vh]">
        <div className="container items-center">
          <div className="logo">
            <Logo className="max-w-[120px] w-full" />
          </div>
          <div className="navbar_menu_links ps-10">
            <ul className="flex gap-5">
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
                  <a href={item.slug} className="flex items-center gap-2">
                    {item.label}{" "}
                    {item.subMenu && <MdKeyboardArrowDown className="inline" />}
                  </a>
                  {item.subMenu && (
                    <ul className="z-[99999] sub-menu group-hover:opacity-100 group-hover:visible invisible group-hover:h-auto opacity-0 h-[0px] transition-all duration-300 ease-in-out absolute top-full group-hover:translate-y-[10px] translate-y-[20px] left-0 w-[200px] bg-secondary_bg">
                      <div
                        className="clip_box w-[10px] h-[10px] absolute top-[-8px] left-[5%] bg-secondary_bg z-[-1]"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                      ></div>
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-secondary_text border-b-[1px] hover:cursor-pointer hover:bg-primary_bg hover:text-primary_text_hover border-b-border_primary pe-4 py-3 ps-3 text-[13px] uppercase font-semibold transition-all duration-300 ease-in-out"
                        >
                          <a href={subItem.slug}>{subItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar_call_to_action ms-auto flex items-center">
            {/* <div className="contact_info flex flex-col items-center me-6">
              <h1 className="font-semibold">More Information Call</h1>
              <span className="text-primary text-[20px] uppercase font-semibold transition-all duration-300 ease-in-out">
                <a href="tel:4087783600">408 778 3600</a>
              </span>
            </div> */}
            <button className="btn-secondary">Book Now</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
