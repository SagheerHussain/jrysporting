import React from "react";
import faqImageOne from "/Images/faq (1).webp";
import faqImageTwo from "/Images/faq (2).webp";
import faqImageThree from "/Images/faq (3).webp";

const Faq = () => {
  return (
    <>
      <section id="faq" className="py-20">
        <div className="container gap-10">


          <div className="faq-box gap-4">
            <div className="faq-box-image w-full">
              <img
                src={faqImageOne}
                className="rounded-[25px] w-full h-[300px] object-cover"
                alt=""
              />
            </div>
            <div className="faq-box-content w-full">
              <div className="faq-box-content-item">
                <div className="faq-box-content-item-title">
                  <h2 className="text-[1.5rem] pt-2">Learn With Experts</h2>
                </div>
                <div className="faq-box-content-item-content">
                  <p className="text-[.9rem] text-primary_text py-4">
                    Discover the fundamentals of shotgun safety and clay target
                    shooting. Our expert instructors guide beginners with
                    patience and clarity. Build confidence in a safe, supportive
                    learning environment.
                  </p>
                  <button className="btn-main px-8 py-3 uppercase">
                    Learn
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-box gap-4">
            <div className="faq-box-content w-full">
              <div className="faq-box-image w-full">
                <img
                  src={faqImageTwo}
                  className="rounded-[25px] w-full h-[300px] object-cover"
                  alt=""
                />
              </div>
              <div className="faq-box-content-item">
                <div className="faq-box-content-item-title">
                  <h2 className="text-[1.5rem] pt-2">Sharpen Your Skills</h2>
                </div>
                <div className="faq-box-content-item-content">
                  <p className="text-[.9rem] text-primary_text py-4">
                    Hone your skills on our diverse shooting courses. Perfect
                    for improving accuracy, timing, and control. Whether solo or
                    with a group, each round builds mastery.
                  </p>
                  <button className="btn-main px-4 py-2 uppercase">
                    Practise
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-box gap-4">
            <div className="faq-box-image">
              <img
                src={faqImageThree}
                className="rounded-[25px] w-full h-[300px] object-cover"
                alt=""
              />
            </div>
            <div className="faq-box-content w-full">
              <div className="faq-box-content-item">
                <div className="faq-box-content-item-title">
                  <h2 className="text-[1.5rem] pt-2">Make It Memorable</h2>
                </div>
                <div className="faq-box-content-item-content">
                  <p className="text-[.9rem] text-primary_text py-4">
                    Spend a fun-filled day outdoors with friends or family.
                    Explore beautiful grounds designed for relaxation and sport.
                    It's more than shooting—it's an unforgettable experience.
                  </p>
                  <button className="btn-main px-4 py-2 uppercase">
                    Enjoy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
