import React from "react";
import InfiniteMovingCards from "../components/ui/infinite-moving-cards";
import { testimonials } from "../components/testimonials";

const Reviews = () => {
  return (
    <>
      <section
        id="testimonials"
        className="py-20"
        style={{
          background: "url('/Images/texture.png')",
          backgroundBlendMode: "multiply",
          backgroundColor: "#9c5043",
          backgroundSize: "contain",
        }}
      >
        <div className="container mb-14">
          <div className="max-w-7xl mx-auto">
            <div className="top-brands-info text-center">
              <h5 className="text-lg text-[#fff] uppercase font-medium">
                Clients Across World
              </h5>
              <h4 className="sm:text-4xl text-3xl text-[#fff] uppercase font-medium my-3">
                Comments from your friends
              </h4>
              <p className="text-[#fff] text-sm mt-3">
                Hear real stories from fellow shooters who turned their day at
                Coyote Clays into unforgettable memories.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial_moving_card mt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <InfiniteMovingCards
            bgColor=""
            pauseOnHover={false}
            speed={"slow"}
            items={testimonials}
            itemClass={"min-w-[600px]"}
          />
        </div>
        <br />
        {/* <div className="testimonial_moving_card [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <InfiniteMovingCards
            bgColor=""
            direction={"right"}
            pauseOnHover={false}
            speed={"slow"}
            items={slideTwo}
            itemClass={"min-w-[600px]"}
          />
        </div> */}
      </section>
    </>
  );
};

export default Reviews;
