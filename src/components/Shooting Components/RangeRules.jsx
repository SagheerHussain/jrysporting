import React from "react";

const rulesData = [
  {
    section: "You and Your Gun",
    points: [
      {
        title: "1. Actions Open and Empty",
        description:
          "Guns must be carried with actions open and empty. Don’t be afraid to ask someone to open their gun; don’t be offended if someone asks you.",
      },
      {
        title: "2. No Loaded Guns",
        description:
          "Guns must not be loaded until in the station ready to shoot.",
      },
      {
        title: "3. Fixed Butt Stock",
        description:
          "Guns must have a fixed butt stock with min. barrel length of 22”.",
      },
      {
        title: "4. No Tactical or Clip Fed Guns",
        description:
          "Tactical firearms or guns with clip-fed magazines are not permitted. Feel free to call us with any questions about these requirements.",
      },
    ],
  },
  {
    section: "You and Your Ammunition",
    points: [
      {
        title: "4. Only Two Shells",
        description: "Maximum of two (2) shells may be loaded at any time.",
      },
      {
        title: "5. Shot Size",
        description: "Shot size 7 1/2 maximum (no 4, 5, 6 etc), low base only.",
      },
      {
        title: "6. Rounds Allowed",
        description:
          "We allow you to bring your own ammo to shoot provided it meets our requirements. No magnum loads, no tracers, no 12 GA 3” shells. No black powder without permission. You will be DQ for possessing improper ammunition so check with us if not sure.",
      },
      {
        title: "7. Factory Ammo",
        description:
          "Only Factory new ammunition may be used in CVSC rental guns.",
      },
    ],
  },
  {
    section: "You and Your Actions",
    points: [
      {
        title: "8. NO Practice Swings",
        description:
          "Practice swings are not allowed outside of shooting stations.",
      },
      {
        title: "9. Shoot At Targets Only",
        description:
          "Do not shoot at target chips or deflected or errant targets.",
      },
      {
        title: "10. Do Not Approach Equipment",
        description:
          "Do not approach trap equipment for any reason. If a trap malfunctions, do not approach or go downrange, notify our staff.",
      },
    ],
  },
  {
    section: "You and Your Responsibilities",
    points: [
      {
        title: "11. No Back-up Shooting",
        description:
          "Back-up shooting is not allowed. This is when two or more people shoot at the same target.",
      },
      {
        title: "12. Never Shoot At Animals",
        description:
          "It is strictly forbidden to shoot any live bird or animal on this range.",
      },
      {
        title: "13. Report Unsafe Situations",
        description:
          "If you observe an unsafe situation, vacate the area and report it immediately to CVSC staff. This help us maintain a safe environment for everyone.",
      },
      {
        title: "14. Under 18 Youth",
        description: "Minors under 18 must be with an experienced adult.",
      },
      {
        title: "15. No Alcohol",
        description:
          "No alcoholic beverages are allowed in the shooting areas, and no consumption of alcohol or any substance is allowed before shooting.",
      },
      {
        title: "16. Sign Waiver",
        description:
          "Participants and observers must sign a liability waiver and agreement.",
      },
      {
        title: "17. Common Sense",
        description: "Practice gun safety and use common sense.",
      },
    ],
  },
  {
    section: "You and Your Safety and Comfort",
    points: [
      {
        title: "18. Eye and Ear Protection",
        description:
          "Eye and ear protection required for shooters and observers at all times.",
      },
      {
        title: "19. Proper Footwear",
        description:
          "We strongly recommend wearing comfortable walking/hiking shoes suitable for uneven terrain, loose gravel and dirt.",
      },
      {
        title: "20. Hats",
        description:
          "Hats and long sleeve shirts are strongly recommended as additional protection from target fragments and shottall.",
      },
    ],
  },
];

function RangeRules() {
  return (
    <section className="range-rules py-20">
      <div className="container flex-col">
        {rulesData.map(({ section, points }) => (
          <div key={section} className="mb-12">
            <h2 className="text-xl mb-6 text-[#D56602]">{section}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {points.map(({ title, description }, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-md p-4 border border-gray-200"
                  style={{
                    background: "url('/Images/texture.png')",
                    backgroundBlendMode: "multiply",
                    backgroundColor: "#fff",
                  }}
                >
                  <h3 className="text-[#D56602] mb-2">{title}</h3>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="btn-main mt-4 translate-y-[10px] p-4">
          Read More Policies
        </button>
      </div>
    </section>
  );
}

export default RangeRules;
