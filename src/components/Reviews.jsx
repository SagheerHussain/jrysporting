import React from "react";
import InfiniteMovingCards from "../components/ui/infinite-moving-cards";
import { testimonials } from "../components/testimonials";

const Reviews = () => {
  const slideOne = testimonials.slice(0, 4);
  const slideTwo = testimonials.slice(4, 8);

  return (
    <>
      <section
        id="testimonials"
        className="py-20"
        style={{
          background: "#fff",
        }}
      >
        <div className="container mb-14">
          <div className="max-w-7xl mx-auto">
            <div className="top-brands-info text-center">
              <h5 className="text-lg text-[#818062] uppercase font-bold">
                Clients Across World
              </h5>
              <h4 className="sm:text-4xl text-3xl text-primary_bg uppercase font-bold my-3">
                Comments from your friends
              </h4>
              <p className="text-primary_text text-sm mt-3">
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
            items={slideOne}
            itemClass={"min-w-[600px]"}
          />
        </div>
        <br />
        <div className="testimonial_moving_card [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <InfiniteMovingCards
            bgColor=""
            direction={"right"}
            pauseOnHover={false}
            speed={"slow"}
            items={slideTwo}
            itemClass={"min-w-[600px]"}
          />
        </div>
      </section>
    </>
  );
};

export default Reviews;
