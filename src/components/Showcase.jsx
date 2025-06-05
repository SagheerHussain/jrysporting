// src/components/HeroSection.jsx
import React from "react";

const Showcase = () => {
  return (
    <section id="showcase">
      <div className="container">
        <div className="showcase-content">
          <div
            className="showcase-content-effect"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="0"
          ></div>
          <h6>Premier Clay Shooting Experience</h6>
          <h1 className="text-[48px] leading-[1.1]">
            Master Clay {""} <br />
            <span>Shooting Skills</span>
          </h1>
          <p
            className="text-[16px] max-w-[35rem]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="0"
          >
            Experience the thrill of clay target shooting amidst the scenic
            beauty of Santa Clara Valley. Our facility offers diverse courses
            suitable for all skill levels, ensuring a memorable outing for
            everyone.
          </p>
          <a
            href="about.html"
            className="btn-main"
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-offset="0"
          >
            Explore More
          </a>
        </div>
        <div className="showcase-content-vertical-effect"></div>
      </div>
    </section>
  );
};

export default Showcase;
