import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import image from "/Images/Instructions/Private Instructions/about.webp";
import { Link } from "react-router-dom";

const PrivateInstruction = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-4xl text-[#D56602] mb-12 text-center drop-shadow-md">
        Private Instruction
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image + Highlight */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h3 className="text-[#9c5043] mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-[#9c5043]" />
            Private Lessons are by appointment only!
          </h3>
          <img
            src={image} // Replace with your image path or prop
            alt="Private Instruction"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Right: Content and Button */}
        <div className="md:w-2/3 text-gray-700 text-justify space-y-6">
          <p>
            We offer private shooting instruction in one on one lessons
            conducted by our staff of certified shooting instructors.
            Appointments are scheduled by contacting our Instructor Coordinator
            Ron Silva at (209) 509-3038 or ron300mag@aol.com.
          </p>
          <p>
            When you call, Ron will ask a few questions to learn about your
            experience level and needs, and use that information to help select
            the best instructor for you. A few things to keep in mind,
            instruction is offered by the hour with the instructors paid
            separately from the club with check or cash. Targets, gun rental (if
            needed), and ammunition are additional and paid to Coyote Valley.
            Most lessons are one to two hours in length. Lessons may be shared
            between two persons when they have similar shooting abilities
            however we recommend individual lessons for the best results.
          </p>
          <p>
            If you are looking for a more general introduction to shotgun
            shooting, (not a shooting lesson) check out The Experience Package,
            available for groups of 3 or more.
          </p>
          <Link to="/experience-package">
            <button
              className="btn-main text-primary_bg mt-4 translate-y-[10px] py-4 px-8"
              aria-label="Experience Package"
            >
              Experience
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivateInstruction;
