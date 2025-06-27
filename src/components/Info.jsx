import React from "react";
import aboutImage from "/Images/about-info.png";
import CalenderCard from "./CalenderCard";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <section id="about" className="py-20">
        <div className="container flex md:flex-row flex-col md:gap-0 gap-10 items-center">
          <div className="info_image md:w-[45%] w-full">
            <img src={aboutImage} className="max-w-full h-full" alt="" />
            <div className="flex lg:flex-row md:flex-col sm:flex-row flex-col mt-6 gap-4">
              <Link to={'/first-time-shooter'}>
                <button className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4">First Time Shooters Start Here</button>
              </Link>
              <Link to={'/experience-package'}>
                <button className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4">Experience Package Reservations</button>
              </Link>
            </div>
          </div>
          <div className="info_content md:w-[50%] w-full ps-[5%]">
            <div className="info_content_title">
              <h1 className="text-primary_bg text-[2rem]">
                Learn. Practice. Enjoy.
              </h1>
              <p className="text-primary_text text-[.8rem] pt-4 pb-6">
                Coyote Valley Sporting Clays has an extensive facility featuring
                two Sporting Clay Ranges, two Skeet fields, Trap shooting,
                5-Stand, Private and Group Instruction, Pro Shop and Event
                Facilities. We are open to the Public. Enjoy the natural beauty
                of our location in the hills of Santa Clara Valley and
                experience the friendliness of our knowledgeable staff. Please
                note that if you are not knowledgeable and experienced with
                shotgun handling and safety, you must be accompanied by someone
                who is in order to shoot here. See our FAQ’s for more
                information. First Come, First Served.
              </p>
            </div>
            <div className="info_content_calender">
              <div className="max-w-full px-5 py-4 rounded-t-xl border-t border-l border-r border-dashed border-[#818062] bg-[#818062]/10 text-center shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-[#818062]">
                  Safety rules <br /> are strictly enforced.
                </h3>
                <p className="text-sm md:text-base font-bold text-[#818062] mt-1">
                  <a
                    href="#"
                    className="text-[#818062] underline hover:text-[#6e6c54] transition"
                  >
                    See FAQs
                  </a>
                </p>
              </div>

             <CalenderCard />

             <Link to={'/calender'}>
              <button className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4">
                Full Calender Details
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
