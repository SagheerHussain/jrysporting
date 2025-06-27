import React from "react";
import calender from "/Images/Calender/month-calender.png";

const MonthCalender = () => {
  return (
    <>
      <section id="monthly-calender" className="py-20">
        <div className="container flex-col">
          <h2 className="text-4xl text-[#D56602] py-4 text-center">Daily Calendar</h2>

          <div className="monthly_calender_content w-full h-full">
            <img src={calender} className="w-full h-full" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MonthCalender;
