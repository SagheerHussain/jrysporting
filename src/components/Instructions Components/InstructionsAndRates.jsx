import React from "react";
import {
  FaUserTie,
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaChalkboardTeacher,
  FaStar,
} from "react-icons/fa";

const InstructionsAndRates = () => {
  const instructors = [
    {
      name: "Nancy Ebert",
      role: "Chief Instructor",
      details: ["NSCA Level III"],
      contact: "info@coyoteclays.com",
      icon: <FaUserTie className="text-orange-500 text-4xl mb-2" />,
    },
    {
      name: "Ron Silva",
      role: "Instructor Coordinator",
      details: [
        "Hunters and Couples",
        "Hourly Rate $60",
        "ron300mag@aol.com",
        "209-509-3038",
      ],
      icon: <FaChalkboardTeacher className="text-orange-500 text-4xl mb-2" />,
    },
    {
      name: "Irene Popenhager",
      role: "Families, Men, Women and Youth",
      details: ["Hourly Rate $70", "408.691.2470"],
      icon: <FaUsers className="text-orange-500 text-4xl mb-2" />,
    },
    {
      name: "Dave Radu",
      role: "Advanced Students",
      details: ["Hourly Rate $80", "408-656-4306"],
      icon: <FaStar className="text-orange-500 text-4xl mb-2" />,
    },
    {
      name: "Tom Faulkner",
      role: "New & Experienced shooters, and Youth",
      details: ["Hourly Rate $70", "408-710-4500"],
      icon: <FaUserTie className="text-orange-500 text-4xl mb-2" />,
    },
    {
      name: "Gary Akizuki",
      role: "Youth & Beginners",
      details: ["Hourly Rate $60", "408-391-7094"],
      icon: <FaUserTie className="text-orange-500 text-4xl mb-2" />,
    },
    {
      name: "Gary DeLecce",
      role: "New Shooters, Families and Youth",
      details: ["Hourly rate $60", "650-704-1289"],
      icon: <FaUserTie className="text-orange-500 text-4xl mb-2" />,
    },
  ];

  return (
    <>
      <section className="py-20">
        <div className="container flex-col">
          <div className="text-center">
            <h2 className="text-4xl text-[#d56602] mb-6 drop-shadow-md">
              Our Instructors and Rates
            </h2>
            <p className="max-w-3xl mx-auto text-gray-500 mb-12 text-center leading-relaxed">
              Our private instruction program is lead by owner Nancy Ebert who
              has helped thousands of people learn how to shoot or how to shoot
              better. We offer private one on one lessons with instructors
              trained by Nancy. Each member of our staff is certified by us, and
              each Instructor offers unique instructing capabilities. Our
              instructors are professional and personable and we promise you
              will enjoy your lesson. We appreciate all feedback concerning the
              shooting instruction program via Ron Silva or directly to
              tfe1000@msn.com
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {instructors.map(({ name, role, details, contact, icon }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                style={{
                    background: "url('/Images/texture.png')",
                    backgroundBlendMode: "multiply",
                    backgroundColor: "#fff",
                    backgroundSize: "contain",
                  }}
              >
                {icon}
                <h3 className="text-lg mb-2 text-[#D56602]">
                  {name}
                </h3>
                <p className="text-gray-700 mb-3">{role}</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  {details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {contact && (
                  <p className="text-[#D56602] font-semibold mt-4">
                    {contact}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructionsAndRates;
