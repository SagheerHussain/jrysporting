// src/components/HeroSection.jsx
import React from "react";
import Slider from "react-slick";
import bannerOne from "/Images/Hero Section Banner/45.webp";
import bannerTwo from "/Images/Hero Section Banner/46.webp";
import bannerThree from "/Images/Hero Section Banner/47.webp";
import bannerFour from "/Images/Hero Section Banner/48.webp";
import bannerFive from "/Images/Hero Section Banner/49.webp";
import bannerSix from "/Images/Hero Section Banner/50.webp";

const Showcase = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    {
      image: bannerOne,
      title: "Everything you need with",
      highlight: "ProShop",
      description:
        "Our ProShop offers a wide range of shotguns, ammunition, and accessories. Whether you're a novice or seasoned shooter, we have the gear to suit your needs.",
    },
    {
      image: bannerTwo,
      title: "Challenging courses for all",
      highlight: "skill levels",
      description:
        "Experience diverse shooting disciplines including Sporting Clays, Skeet, and Trap. Our courses cater to both beginners and experienced shooters.",
    },
    {
      image: bannerThree,
      title: "Spend the day and have",
      highlight: "fun with friends",
      description:
        "Enjoy group events in our scenic picnic areas shaded by giant oaks. Perfect for gatherings, parties, or corporate events.",
    },
    {
      image: bannerFour,
      title: "Safe and",
      highlight: "secure environment",
      description:
        "Safety is our top priority with strict firearm handling rules enforced. Our knowledgeable staff ensures a secure and enjoyable experience.",
    },
    {
      image: bannerFive,
      title: "Develop your",
      highlight: "skills",
      description:
        "Enhance your shooting abilities with our private instruction sessions. Our certified instructors tailor lessons to your experience level.",
    },
    {
      image: bannerSix,
      title: "Beautiful rolling hills of",
      highlight: "Central California",
      description:
        "Set in the picturesque Santa Clara Valley, our facility offers breathtaking views. Enjoy the natural beauty while engaging in your favorite shooting activities.",
    },
  ];

  return (
    <section id="showcase">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="w-full h-screen flex gap-4 z-[2]">
            {/* Left Content */}
            <div
              className="w-full bg-black flex items-center justify-start text-white md:p-10"
              style={{
                background: "url('/Images/texture.png'), #818062",
                backgroundBlendMode: "multiply",
                backgroundSize: "contain",
                height: "calc(100vh + 6rem)",
              }}
            >
              <div className="container flex-col justify-center">
                <h6 className="text-white text-sm uppercase mb-3">
                  Premier Clay Shooting Experience
                </h6>
                <h1 className="text-4xl md:text-[2.7rem] max-w-md font-extrabold leading-tight mb-4">
                  {slide.title}
                  <span className="text-[#D56602] ml-3">{slide.highlight}</span>
                </h1>
                <p className="text-sm md:text-base max-w-md mb-6">
                  {slide.description}
                </p>
                <div className="header_btn">
                  <button
                    className="btn-main mt-4 translate-y-[10px] p-4"
                    style={{
                      color: "#fff",
                    }}
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="md:block hidden absolute top-0 lg:w-[50%] w-[100%] lg:left-[50%] md:left-[60%] z-[1] h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Showcase;
