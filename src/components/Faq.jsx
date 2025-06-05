import React from "react";
import faqImageOne from "/Images/faq (1).webp";
import faqImageTwo from "/Images/faq (2).webp";
import faqImageThree from "/Images/faq (3).webp";

const Faq = () => {
  return (
    <>
      <section id="faq">
        <div className="container gap-10">
          <div className="faq-box gap-4">
            <div className="faq-box-image w-full">
              <img src={faqImageOne} className="rounded-[25px]" alt="" />
            </div>
            <div className="faq-box-content w-full">
              <div className="faq-box-content-item">
                <div className="faq-box-content-item-title">
                  <h2 className="text-[2rem] pt-2">FAQ</h2>
                </div>
                <div className="faq-box-content-item-content">
                  <p className="text-[1rem] text-primary_text py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, maiores illum neque quibusdam omnis autem aliquid?
                    Doloribus officia vitae accusamus?
                  </p>
                  <button className="btn-main px-8 py-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-box gap-4">
            <div className="faq-box-content w-full">
              <div className="faq-box-image w-full">
                <img src={faqImageTwo} className="rounded-[25px]" alt="" />
              </div>
              <div className="faq-box-content-item">
                <div className="faq-box-content-item-title">
                  <h2>FAQ</h2>
                </div>
                <div className="faq-box-content-item-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, maiores illum neque quibusdam omnis autem aliquid?
                    Doloribus officia vitae accusamus?
                  </p>
                  <button className="btn-main">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-box gap-4">
            <div className="faq-box-image w-full">
              <img src={faqImageThree} alt="" />
            </div>
            <div className="faq-box-content w-full">
              <div className="faq-box-content-item">
                <div className="faq-box-content-item-title">
                  <h2>FAQ</h2>
                </div>
                <div className="faq-box-content-item-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, maiores illum neque quibusdam omnis autem aliquid?
                    Doloribus officia vitae accusamus?
                  </p>
                  <button className="btn-main">Read More</button>
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
