import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        id: "1",
        title: "Driving Directions to Coyote Valley Sporting Clays",
        answer: [
          "About 20 minutes drive South of downtown San Jose, or approxamitely 1 hour south of San Francisco Airport.  We are located at 1000 San Bruno Avenue, Morgan Hill, CA  95037. We are situated in the foothills off of Santa Teresa Blvd / Hale Ave, west of Highway 101, between Cochrane Road and Bailey Avenue.",
          "DRIVING SOUTHBOUND HWY 101 (from San Jose/San Francisco): Take the exit off to the right to Bailey Avenue. Make a right from the off-ramp onto Bailey Avenue. Make a left at the second light onto Santa Teresa Boulevard, which eventually turns into Hale Avenue. Continue on Hale until you see San Bruno Avenue with our sign on the corner. Make a right onto San Bruno. San Bruno Avenue dead ends into our front gate and mile long driveway that leads to our parking lot.",
          "DRIVING NORTHBOUND HWY 101 (from Salinas/Monterey): Take the exit off to the right to Cochrane Road. Make a left at the light onto Cochrane. Continue on Cochrane through numerous stoplights until it T’s at Monterey Road. Keep to the right and turn right onto Monterey Road. Continue through multiple stoplights until you come to the Tilton Road stoplight. Make a left here onto Tilton. Follow it down to the stop sign where it T’s with Hale Avenue. Make a right onto Hale and continue until you see San Bruno Avenue with our sign on the corner. Make a left onto San Bruno. San Bruno Avenue dead ends into our front gate and mile long driveway that leads to our parking lot.",
        ],
      },
      {
        id: "2",
        title: "What do I need to know about the waiver?",
        answer: [
          "We require an electronic liability waiver to be signed before you can step foot on the course. Both shooters AND non-shooters must sign. The waiver is signed electronically at the waiver kiosk located inside our pro-shop, and you have the option of receiving a copy via email confirmation. Once your waiver is completed, it is valid for two years. Whenever you arrive at Coyote Valley, we will check you in by retrieving your waiver using your last name. This process is made faster for members or purchasers of key tag ID’s ($1.00) who are able to swipe the reader at the front desk to check in. We can use almost any barcoded ID tag you may already own for your check in ID.",
          "PARENTS: If you are bringing your child who is under the age of 18 to Coyote Valley Sporting Clays, you will have to complete a waiver on-site in the pro-shop for both yourself and your child by choosing the “Adult and Minor(s)” waiver option.",
          "IF PARENT IS NOT PRESENT If you are allowing a grandparent, relative, family friend, etc. to bring your minor child, you (The Parent and only The Parent) must contact us either via a phone call to (408) 778-3600 or an email to us at info@coyoteclays.com in order to request an online waiver form BEFORE the child arrives at CVSC. This link is only to be used by a parent who will not be on-site with their child.",
        ],
      },
      {
        id: "3",
        title: "Safety Rules and Violations",
        answer: [
          "Our Safety Rules are posted inside the proshop.  You are required to know and observe these rules, and follow the guidance from our safety video.",
          "This is a live fire gun range.  Lives are at stake.  For everyone's safety, respectful controled behavior is required at all times.  Failure to observe range rules, or follow the direction of our staff is not allowed and  We DO NOT TOLERATE any aggressive behavior regardless of circumstance.  If you display anger or agressiveness toward anyone, you will be disqualified and removed from the range.     ",
        ],
      },
      {
        id: "4",
        title: "Do I need to make reservations to shoot?",
        answer: [
          "No, we are first come first served, so reservations are not required for our sporting clay course or skeet and trap fields. Please note that we sometimes host special events that completely fill our capacity, so we do recommend that you check our online calendar for such events. You may also call us to check availability on weekends when we may experience high volumes. The Mountain Course does require a reservation via phone to (408) 778-3600 at least one day in advance (not recommended for beginners or first time shooters). There is a 3-person minimum for Mountain Course reservations. If you are inexperienced, we ask that you make an Experience Package reservation online at least 7 days in advance of the day you wish to shoot. There is a 3-person minimum for the Experience Package reservations. More information is on our Experience Package page.",
        ],
      },
      {
        id: "5",
        title: "Are dogs allowed on the course?",
        answer: [
          "Yes; we allow friendly, well-behaved dogs especially hunting breeds so long as they are leashed at all times. They are not allowed inside the clubhouse. Due to liability issues, we do not allow Pit Bulls, Pit Bull Terriers, Pit Bull mixes, Rottweilers, or German Shepherds without prior introduction and approval by CVSC management.",
        ],
      },
    ],
  },
  {
    category: "Shooting Policies",
    questions: [
      {
        id: "6",
        title: "May I shoot my rifle or pistol here?",
        answer: [
          "No, we are a shotgun-only facility. The closest facility that accommodates rifles and pistols is Santa Clara Field Sports Park located about 4 miles north across Highway 101. Their phone number is (408) 463-0652.  Our facility includes a SASS (Single Action Shooting Society) Cowboy Action Range where Cowboy Action Shooting events and modern rifle/pistol classes are conducted by certified instructors.  Use of this range requires a Cowboy Membership available from us and type of firearms and ammunition allowed are significantly restricted. Instruction offerings with modern rifle/handguns is are open to the public.",
        ],
      },
      {
        id: "7",
        title: "May I shoot here if I am inexperienced?",
        answer: [
          "Yes, provided that you are accompanied by an experienced person who is knowledgeable and comfortable with the safety and handling of a shotgun, provided they agree to be responsible for teaching and ensuring proper gun safety and handling are observed. Otherwise, we do not allow beginners or anyone to go out who is not familiar with gun safety and the proper handling of a shotgun.",
          "If you are not accompanied by an experienced shooter, we recommend booking either a private lesson or an Experience Package to get started. More information is on our Experience Package page.",
        ],
      },
      {
        id: "8",
        title: "I want a private lesson. What do I do?",
        answer: [
          "Private Lessons are available from our staff of trained and certified instructors. To book a lesson, contact our Lesson Coordinator Ron Silva directly at (209) 509-3038 or email him at ron300mag@aol.com. Private lessons are for one or two persons at a time. For more information see our Firearms Instruction page.",
        ],
      },
      {
        id: "9",
        title:
          "Do you have a limit on group sizes on the sporting clay course?",
        answer: [
          "Not specifically, but groups of more than 5  persons take a long time at each station and cause waiting delays for themselves and everybody else. We recommend that you split up into groups of not more than 6 when you are shooting the course.",
        ],
      },
    ],
  },
  {
    category: "Firearm, Ammo Policies",
    questions: [
      {
        id: "10",
        title: "What are your restrictions on bringing my own gun?",
        answer: [
          "Generally, any legal-to-own modern shotgun with a fixed butt stock and barrel length of 22” is acceptable.  No 10-gauge guns are allowed.  We encourage the use of sporting firearms, not shorter barrel home defense type guns.  The manager on duty has the right to reject any firearm from use at this range.  If you are not sure about your gun, please ask us and we will assist you. ",
        ],
      },
      {
        id: "11",
        title: "Why am I allowed to only load 2 shells at a time instead of 3?",
        answer: [
          "It is standard practice across the world to load only 2 shells on any clay target range. This is because target games are made up of singles and pairs of targets. Loading 3 or more shells provides a much higher chance that an unfired shell will remain in the gun after a target is shot. The shooter may forget and then leave the shooting position with a loaded firearm. Safety is our highest priority, and we work to maintain a safe environment for everyone on our course. VIOLATION of this rule is considered intentional, and will result in your being disqualified from the range and removed from our facility.",
        ],
      },
      {
        id: "12",
        title:
          "Why am I not allowed to shoot my hunting ammunition (i.e. shot size #2, #4, #6, 00 buckshot, etc.) here?",
        answer: [
          "Heavy rounds with larger shot sizes carry much more energy and power than the traget loads that we allow. They create an extremely dangerous situation because they travel much greater distances and our range was not designed for them. You may be inspected by a staff member to verify ammunition being used. VIOLATION of this rule will result in your being disqualified from the range and removed from our facility.",
        ],
      },
    ],
  },
  {
    category: "Sales and Transfers",
    questions: [
      {
        id: "13",
        title: "Do you charge a minimum on clays?",
        answer: [
          "No, we do not charge a minimum on clays. You pay for what you pull. Our clay launchers use a card activated system that counts what you throw. When you check out after shooting, we charge for the number of clays you used.",
        ],
      },
      {
        id: "14",
        title: "What ammunition do you sell?",
        answer: [
          "We are experiencing supply shortages for ammunition therefore the brands and type of ammunition we have on hand is subject to change frequently.  We do not sell ammunition for use off site, all ammunition we sell is for use on the range.  We generally offer a range of shotgun ammunition from Fiocchi and Winchester in 12g, 20g, 16g, 28g, and .410g. We sometimes sell various calibers of rifle and handgun ammo for Cowboy Action Shooting.  You may bring your own ammunition provided it meets our standards: Lead or Steel ok, No magnum loads, shot size must be 7, 8 or 9, (nothing 6 or larger), 2.75 inch maximum, no hi-velocity, high base  loads, no tracer shells or slugs.  If you bring your own ammo, please bring it inside the proshop when you check in so we can verify it is approved.   You may expect to be checked for ammunition compliance by our staff any time you are shooting on our range. ",
        ],
      },
      {
        id: "15",
        title: "Do you sell firearms?",
        answer: [
          "Yes, we are an FFL-licensed dealer selling new and used shotguns.  We are a stocking dealer for Browning and Beretta.  ",
        ],
      },
      {
        id: "16",
        title: "Gun Transfers?",
        answer: [
          "We are happy to provide FFL transfers for long gun firearms (sorry no handguns) purchased from other dealers or out of state. See our Long Gun Transfer Page for pricing and details.",
        ],
      },
      {
        id: "17",
        title: "Do you consign firearms?",
        answer: [
          "Due to regulations, we no longer offer consignment sales of firearms.  We pay cash for selected used fireams, bring yours in if your are interested in selling. Due to new restrictions on consignment sales, we no longer offer this service.",
        ],
      },
    ],
  },
];

function FAQ() {
  const [expanded, setExpanded] = useState([]);

  // Ye function tab ko toggle karega (single expand)
  const handleChange = (uuids) => {
    // uuids array hai jo currently expanded items ka id deta hai
    // Hum single expand karna chahte hain
    if (uuids.length > 1) {
      // last expanded item ko hi rakho
      setExpanded([uuids[uuids.length - 1]]);
    } else {
      setExpanded(uuids);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-orange-600 mb-12">
        FAQS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
        {/* Left sidebar with categories */}
        <div className="space-y-12 border-r border-orange-400 pr-6">
          {faqData.map(({ category }) => (
            <h3
              key={category}
              className="text-orange-600 text-lg border-b-2 border-orange-400 pb-2"
            >
              {category}
            </h3>
          ))}
        </div>

        {/* Right content - accordions for each category */}
        <div>
          {faqData.map(({ category, questions }) => (
            <div key={category} className="mb-12">
              <Accordion
                allowZeroExpanded
                preExpanded={expanded}
                onChange={handleChange}
              >
                {questions.map((q) => (
                  <AccordionItem
                    key={q.id}
                    uuid={q.id}
                    className="border-b border-gray-300 p-3"
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flex justify-between items-center p-3 text-gray-700 font-semibold cursor-pointer hover:text-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500">
                        {q.title}
                        <span className="text-orange-600 font-bold text-xl">
                          {expanded.includes(q.id) ? "-" : "+"}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="pb-4 text-gray-600">
                      {Array.isArray(q.answer) && q.answer.length > 0 ? (
                        q.answer.map((ans, index) => (
                          <p key={index} className="px-3 text-[.9rem] py-2">
                            {ans}
                          </p>
                        ))
                      ) : (
                        <p className="italic text-gray-400 px-3">
                          No answer available.
                        </p>
                      )}
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
