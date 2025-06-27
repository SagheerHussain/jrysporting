import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import mainCourse from "/Images/shooting/courses/map (1).webp";
import skeet from "/Images/shooting/courses/map (2).webp";
import trap from "/Images/shooting/courses/map (3).webp";
import { Link } from "react-router-dom";

const tabsData = [
  {
    label: "Main Course",
    image: mainCourse,
    description: [
      "Our Main Course is a large course with 20 stations of various difficulties. There are stations set up mainly for beginners, as well as some very challenging stations. Most of our stations have two targets each, and all of them are fully automated. Shooters can throw single targets or doubles (both targets at the same time). Our equipment allows you to throw targets at the press of a button. If you are shooting alone, you may choose to have targets thrown on a three second delay from the time the button is pressed.",
      "The Main Course offers lots of flexibility, shooters may throw targets in any increment they would like. Pricing is per launched clay, so you pay for exactly what you use, whether you shoot at 30 or 300 clays. No reservations are needed for the Main Course, as long as you are experienced with the safe handling of a shotgun, just show up and shoot! If you are inexperienced see our Course Requirements. You may also shoot at any station you wish. It is not necessary to shoot the stations in order, nor at all of them...although you will probably want to! Please be courteous when other groups are waiting for a station. CHECK OUR CALENDAR FOR CLOSURES AND LARGE EVENTS.",
    ],
  },
  {
    label: "Skeet Course",
    image: skeet,
    description: [
      "Skeet is a game played on a semicircular, level field. Eight shooting stations are located around the field, and targets are thrown from two houses on opposing sides. The house on the left, referred to as the “High House” is tall and throws the targets from left to right. The house on the right, referred to as the “Low House” is short and throws targets from right to left. As the shooter moves from station to",
      "Squads of about five shooters take their turns from each of the eight shooting stations. At stations 1, 2, 6, and 7 a shooter calls for a single target from the “High House”, then a single target from the “Low House”, and completes his/her turn by calling for “Doubles”. (Both targets thrown at the same time). At stations 3, 4, 5, and 8, a shooter calls only for a single target from each of the houses and does not shoot Doubles.",
      "Coyote Valley’s facilities include two (2) skeet fields, in addition to our Sporting Clays ranges. A unique feature of our equipment enables single shooters to select a 3-second delay mode, which allows persons to practice by themselves, without a “puller,” if no other shooters are present. Skeet is great practice for beginner shooters, however, if fields are full, training is not allowed on the Skeet fields. In this case, we recommend training on the Trap field or at some of the easier Sporting Clay stations.",
    ],
  },
  {
    label: "Trap Course",
    image: trap,
    description: [
      "A Trap field has five stations arching around the trap house. The trap house will throw out single targets. In the regulation game of trap, the target angle is constantly varied by the machine in the horizontal plane, with the machine oscillating from left to right continuously. A shooter calls for five independent targets at each station for a 25 target round. At Coyote Valley Sporting Clays, special controls exist that allow the shooter to turn on or off the horizontal oscillation, and thus you can practice the same target angle over and over if you wish. To add a twist to the game, our Trap also features vertical oscillation, causing the target to vary in height as well as left to right. Similarly, this can be selected to on or off. There is also a single shooter switch that causes each target to be delayed 3 seconds from when the release button is pushed.",
    ],
  },
  {
    label: "5 Stand",
    image: "",
    description: [
      "Our 5 Stand Facility is reserved primarilly for shooting instruction and warm up for large group events, and not normally open for general public shooting. ",
      "Five Stand is a game that is sometimes referred to as compact sporting clays. It features five adjacent shooting positions on a line. There are six or more targets presented on the five stand field. At each of the five stations, the shooter attempts five targets, then rotates to the next position and so on until a 25 bird round has been shot. The presentations at each station are different, and can be made up of singles or pairs from any of the six targets. Very fast and very fun!",
    ],
  },
  {
    label: "Practice Field — aka P1 and P2",
    image: "",
    description: [
      "Our Practice Field is a two station multipurpose field.  In regular use, it has two independant shooting stands  creating the 21st and 22nd stations of the main course.  Each offer 4 unique targets to try.   This is a great area for training and small groups to have fun together shooting a variety of targets. Please note that our instructors have first choice shooting here when they are conducting instruction or Experience Packages.  This field is also available as a 5-Stand, quail flurry, and other game set-ups for group events.",
    ],
  },
];

const tabsLabel = [
  { label: "Main Course" },
  { label: "Skeet" },
  { label: "Trap" },
  { label: "5 Stand" },
  { label: "Practice" },
];

function Courses() {
  return (
    <section className="courses py-20">
      <div className="container flex-col">
        <div className="text-center">
          <h1 className="text-[#D56602] text-4xl mb-20">
            Our Shooting Courses
          </h1>
        </div>

        <Tabs
          defaultIndex={0}
          className="flex md:flex-row flex-col w-full"
          selectedTabClassName="bg-[#D56602] text-white font-semibold"
        >
          <TabList className="flex flex-col md:w-52 md:border-r border-gray-300">
            {tabsLabel.map(({ label }) => (
              <Tab
                key={label}
                className="cursor-pointer py-3 px-4 text-gray-600 hover:bg-[#D56602] md:text-start text-center hover:text-white focus:outline-none"
                selectedClassName="bg-[#D56602] text-white font-semibold"
              >
                {label}
              </Tab>
            ))}
          </TabList>

          <div className="flex-1 p-6">
            {tabsData.map(({ label, image, description }) => (
              <TabPanel key={label} className="outline-none">
                {image && (
                  <img
                    src={image}
                    alt={label}
                    className="mb-4 h-auto rounded-lg shadow-md"
                  />
                )}

                <h2 className="text-lg text-[#D56602] mb-2">{label}</h2>
                {description.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-700 whitespace-pre-line py-4"
                  >
                    {item}
                  </p>
                ))}
                <Link to="/calender">
                  <button className="btn-main mt-4 translate-y-[10px] p-4">
                    Calender
                  </button>
                </Link>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Courses;
