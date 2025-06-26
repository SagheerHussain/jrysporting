import React from "react";
import { FaUsers, FaQuestionCircle, FaCheckCircle, FaInfoCircle, FaShieldAlt, FaChalkboardTeacher, FaSmile } from "react-icons/fa";
import CardEffect from "./CardEffect";

const WhatCanExpect = () => {
  const cards = [
    {
      id: 1,
      icon: <FaUsers className="text-[#D56602] text-4xl mb-4" />,
      title: "The Group Package",
      content:
        "Perfect for groups (3 person minimum) ( note 2 persons may take an EP but must book and pay for 3) trying Sporting Clays for the first time, or for groups with mixed experience levels wanting to be guided on their outing. Our guides (Safety Instructors) will make sure you have a safe, fun time and help you hit some targets!",
    },
    {
      id: 2,
      icon: <FaQuestionCircle className="text-[#D56602] text-4xl mb-4" />,
      title: "What is the Experience?",
      content:
        "Our Experience Package was created to provide a turn-key all inclusive outing that includes a Safety Instructor guide to accompany and mentor your group for a 48 bird round of Sporting Clays shooting. This program is very popular for parties, corporate groups doing team building, and families.",
    },
    {
      id: 3,
      icon: <FaCheckCircle className="text-[#D56602] text-4xl mb-4" />,
      title: "Includes Everything",
      content:
        "This package includes everything – all you need is to come dressed as if you were going out on a hike, and wear comfortable shoes for uneven terrain and loose gravel surfaces. If you have glasses or other eyewear please bring that to wear or clear safety glasses will be provided and must be worn.",
    },
    {
      id: 4,
      icon: <FaInfoCircle className="text-[#D56602] text-4xl mb-4" />,
      title: "Details Explained",
      content:
        "Our instructors will greet you when you arrive and get you started on your round of Sporting Clays, explaining all the details and making sure that safety is observed for everyone’s comfort.",
    },
    {
      id: 5,
      icon: <FaShieldAlt className="text-[#D56602] text-4xl mb-4" />,
      title: "Safety is Paramount",
      content:
        "Each participant must sign our waiver before stepping foot on the course. This can be done onsite. Your guide will also provide a brief orientation and safety talk on your way to the shooting course.",
    },
    {
      id: 6,
      icon: <FaChalkboardTeacher className="text-[#D56602] text-4xl mb-4" />,
      title: "You will be coached",
      content:
        "At each shooting station, each guest will be coached by the guide on operating the shotgun and the target launching equipment, following the rules and learning the etiquette of the range. Each guest will attempt 8 targets at each of 6 stations for a total of 48 clays.",
    },
    {
      id: 7,
      icon: <FaSmile className="text-[#D56602] text-4xl mb-4" />,
      title: "Safe and Fun",
      content:
        "Our objectives are to make sure that all of our guests have a safe and fun experience, and secondly to provide instruction and practice so that participants learn proper procedures and technique on how to shoot safely at CVSC.",
    },
  ];

  return <>
  <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl text-[#D56602] mb-12 drop-shadow-md">
        What You Can Expect.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map(({ id, icon, title, content }) => (
          <CardEffect key={id} icon={icon} title={title} content={content} />
        ))}
      </div>
    </section>
  </>;
};

export default WhatCanExpect;
