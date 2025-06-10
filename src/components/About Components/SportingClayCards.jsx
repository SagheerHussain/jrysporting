import React from "react";
import sportingClay1 from "/Images/about/sporting clay (1).webp";
import sportingClay2 from "/Images/about/sporting clay (2).webp";
import sportingClay3 from "/Images/about/sporting clay (3).webp";
import sportingClay4 from "/Images/about/sporting clay (4).webp";
import sportingClay5 from "/Images/about/sporting clay (5).webp";
import sportingClay6 from "/Images/about/sporting clay (6).webp";

const cardData = [
  {
    title: "Shotgun Sport",
    content:
      "Clay target shooting is a fun and safe shotgun sport for the entire family. Mechanical traps are used to throw clay disc targets in varying directions allowing a shooter with a shotgun the opportunity of a sporting challenge anytime of the year.",
    image: sportingClay1,
  },
  {
    title: "Field Replication",
    content:
      "Sporting Clays replicate every conceivable shot encountered in field shooting. Shooters see a wide variety of targets simulating game species like teal, dove, pheasant, and even bouncing rabbits.",
    image: sportingClay2,
  },
  {
    title: "20 Shooting Stations",
    content:
      "Our Sporting Clay Main Course includes 20 stations, each with a different type of shot. From 'grouse' to 'decoying duck' stations, targets vary to challenge the shooter.",
    image: sportingClay3,
  },
  {
    title: "Various Targets",
    content:
      "Target sizes vary from standard to mini, battue, and rabbit targets. Some targets roll across the ground for extra challenge.",
    image: sportingClay4,
  },
  {
    title: "Just Like Golf",
    content:
      "Sporting clays is like golf with a shotgun — every course is different. It’s a top shooting discipline recognized worldwide.",
    image: sportingClay5,
  },
  {
    title: "Natural Features",
    content:
      "Courses make use of natural features such as woods and ponds to create a realistic setting for each type of shot. At any station, targets may be thrown as singles, simultaneous pairs, following pairs (one target right after the other), or report pairs (the second target launched at the sound of the gun being fired at the first).",
    image: sportingClay6,
  },
];

const SportingClayCards = () => {
  return (
    <section className="py-20">
      <div className="container flex-col">  
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d56602] mb-10">
          So...what is sporting clays?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#d56602] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-700">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportingClayCards;
