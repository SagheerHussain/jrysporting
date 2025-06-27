import React from "react";

const CalenderCard = () => {
  return (
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
  );
};

export default CalenderCard;
