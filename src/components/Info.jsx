import React from "react";
import aboutImage from "/Images/about-info.png";

const Info = () => {
  return (
    <>
      <section id="about" className="py-20">
        <div className="container flex items-center">
          <div className="info_image w-[45%]">
            <img src={aboutImage} className="max-w-full h-full" alt="" />
            <div className="flex mt-6 gap-4">
                <button className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4">First Time Shooters Start Here</button>
                <button className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4">Experience Package Reservations</button>
            </div>
          </div>
          <div className="info_content w-[50%] ps-[5%]">
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

              <div className="max-w-full p-6 bg-white dark:bg-gray-900 border border-dashed border-gray-500 dark:border-gray-700 rounded-b-xl shadow-xl transition-shadow duration-300">
                <h3 className="text-center text-2xl font-extrabold text-primary_bg mb-6 uppercase tracking-wide">
                  Business Hours
                </h3>
                <div className="space-y-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                  <div className="flex justify-between items-center border-b pb-2 border-dashed border-gray-600 dark:border-gray-700">
                    <span>Mon - Tue</span>
                    <span className="text-red-500 font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2 border-dashed border-gray-600 dark:border-gray-700">
                    <span>Wed - Fri</span>
                    <span>9:00 am - 5:00 pm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sat - Sun</span>
                    <span>8:00 am - 5:00 pm</span>
                  </div>
                </div>
              </div>

              <button className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4">
                Full Calender Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
