import React, { useState } from "react";
import picnicOne from "/Images/Events/41.png";
import picnicTwo from "/Images/Events/42.png";
import picnicThree from "/Images/Events/43.png";
import picnicFour from "/Images/Events/44.png";
import FsLightbox from "fslightbox-react";

const Events = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightbox = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

  const eventData = [
    {
      id: 1,
      title: "MAIN PICINIC AREA",
      seats: "160+",
      price: "$9.50",
      perPerson: "per person and up",
      description:
        "Minimums apply plus per hour fees after regular business hours. Other fees may apply.",
      image: picnicOne,
      facilityTitle: "Our Picnic Facility Includes",
      facilityList: [
        "Picnic table seating for up to 160",
        "BBQ Pit",
        "Food Prep Area",
        "Serving Tables",
        "Rinse Sink",
        "Walk-in Cooler",
        "Catering available or do it yourself",
        "PA System",
        "Lighting for evening events",
      ],
      paragraphText: [
        "Beautifully shaded among giant oaks, Coyote Valley Sporting Clays main picnic area is the ideal gathering place for your group, private party, or reception. This facility is available to rent for day or evening events. We also offer private and semi-private group events and receptions on our spacious back patio adjacent to the Pro-Shop.",
        "The picnic facility includes spacious picnic table seating, a BBQ for grilling, serving and prep tables, warming and cooling equipment, sound system, and stage. Event hosts may DIY food or bring your own caterer, and we maintain a list of caterers we recommend.",
      ],
    },
    {
      id: 2,
      title: "Patio Area",
      seats: "100",
      price: "$9.50",
      perPerson: "per person and up",
      description:
        "$200.00 minimum plus $75.00 per hour after regular business hours surcharge. Other fees may apply for groups of more than 50 people.",
      image: picnicTwo,
      facilityTitle: "Our Patio Includes",
      facilityList: [
        "Table and chair seating for up to 100",
        "Food Prep Area",
        "Serving Tables",
        "Hand Wash Sink",
        "Adjacent to inside restrooms",
        "Catering available or do it yourself",
        "PA System Available",
        "Lighting for evening events",
      ],
      paragraphText: [
        "The back patio just outside our Pro-Shop offers relaxed seating and bistro atmosphere for enjoying a lunch or snacks after shooting.  This space is also available for group events, either exclusively or by section reservation.  You are always welcome to bring food to enjoy with friends in this area and small informal gatherings are common without reservations.",
      ],
    },
    {
      id: 3,
      title: "Upper BBQ Area",
      seats: "50",
      price: "$9.50",
      perPerson: "per person",
      description:
        "$200.00 minimum plus $75.00 per hour after regular business hours surcharge. Other fees may apply for groups of more than 50 people.",
      image: picnicThree,
      facilityTitle: "Our Upper BBQ Area Includes",
      facilityList: [
        "Picnic table seating for up to 50",
        "BBQ Pit",
        "Food Prep Area",
        "Serving Tables",
        "Rinse Sink",
        "Small refrigeration",
      ],
      paragraphText: [
        "This area is just off the parking lot but provides fully shaded table seating for about 30 persons easilly.  It is a scenic spot with easy access to the classroom and parking lot. ",
        "This area is always available for casual gatherings and DIY picnics before or after shooting.   This area provides a smaller more intimate setting than the main picnic area.",
      ],
    },
    {
      id: 4,
      title: "Cowboy Range BBQ Area",
      seats: "30",
      price: "$9.50",
      perPerson: "per person",
      description:
        "$200.00 minimum plus $75.00 per hour after regular business hours surcharge. Other fees may apply for groups of more than 50 people.",
      image: picnicFour,
      facilityTitle: "COWBOY RANGE BBQ AREA",
      facilityList: [
        "Picnic table seating for up to 30",
        "BBQ and Fire Pit",
        "Primitive Food Prep Area",
        "Wood Serving Tables",
        "Restrooms nearby",
      ],
      paragraphText: [
        "Thinking outside the box?  How about a small picnic at the cowboy range?   This cute spot is available by reservation only but affords a unique opportunity to include some friendly target practice with your picnic!",
      ],
    },
  ];

  return (
    <section id="events" className="py-20">
      <div className="container flex-col">
        <div className="text-center mb-20">
          <h2 className="mb-4 text-[#d56602] text-4xl">
            Event Venues at Coyote Valley
          </h2>
          <p className="text-2xl text-[#818062]">
            With Four Distinct Event Areas
          </p>
        </div>

        <div className="bg-white text-black">
          {/* Three columns */}

          {eventData.map((event, index) => (
            <div className="mb-20">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left - Image Placeholder */}
                <div className="w-full" onClick={() => openLightbox(index)}>
                  <img
                    src={event.image}
                    className="w-full h-full object-cover rounded-xl cursor-pointer"
                    alt=""
                  />
                </div>

                {/* Center - Info Box */}
                <div className="w-full border shadow-xl rounded-lg border-t-4 border-t-[#d56602] p-6 text-center">
                  <h2 className="text-2xl mb-4 text-[#d56602]">
                    {event.title}
                  </h2>
                  <p className="text-xl font-semibold mb-1">Seats up to</p>
                  <p className="text-3xl font-bold mb-2 text-[#d56602]">
                    {event.seats}
                  </p>
                  <p className="text-5xl font-semibold mb-4">{event.price}</p>
                  <p className="mb-6">{event.perPerson}</p>
                  <p className="text-sm mb-6">{event.description}</p>
                  <a href="mailto:info@coyoteclays.com">
                  <button className="btn-main text-primary_bg mt-4 translate-y-[10px] w-full p-4">
                    Email Request
                  </button>
                  </a>
                </div>

                {/* Right - Facility List */}
                <div className="w-full border border-dashed border-[#818062] rounded-lg">
                  <h3 className="text-[#818062] uppercase mb-3 bg-[#f2f2ef] p-8 text-center">
                    {event.facilityTitle} :
                  </h3>
                  <ul className="list-disc list-inside space-y-2 p-6">
                    {event.facilityList.map((facility) => (
                      <li className="border-b border-dashed border-b-[#818062] -translate-y-1">
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Paragraph Text */}
              <div className="mt-8 text-left text-base leading-relaxed text-black">
                {event.paragraphText.map((paragraph) => (
                  <p className="mb-6">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* fsLightbox Component */}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={eventData.map((event) => event.image)}
        slide={lightboxController.slide}
      />
    </section>
  );
};

export default Events;
