import React from "react";
import CalenderCard from "./CalenderCard";

const Calender = () => {
  return (
    <>
      <section id="calender" className="py-20">
        <div className="container flex-col">
          <h1 className="text-4xl text-[#D56602] text-center mb-14">Regular Business Hours</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CalenderCard />
            <div className="description">
              <p className="text-gray-600 text-lg">
                Hours are subject to change due to weather and special events.
                We do our best to post closures at least 2 weeks in advance. On
                rainy days we always <br /> show up at the opening time, but may
                close earlier than noted on calendar.
              </p>
            </div>
            <div className="description">
              <p className="text-gray-600 text-lg">
                Normally open all National Holidays including Monday and Tuesday
                holidays from 9:00 am to 5:00 pm, except for Christmas Day.
                Thanksgiving Day open 8:00am to 2:00pm. Check the online
                calendar for the latest information. Thank you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender;
