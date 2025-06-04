import React from "react";
import Slider from "react-slick";
import RifleOne from "/Images/Rifle.png";
import RifleTwo from "/Images/Rifle (2).png";
import RifleThree from "/Images/Rifle (3).png";
import { Link } from "react-router-dom";

const ShowcaseSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-container z-[-1]">
      <Slider {...settings}>
        <div className="w-screen">
          <div className="container flex justify-between">
            <div className="header_content w-[50%] z-[1]">
              <h1 className="text-primary_text leading-[1.2] z-[-1] font-extrabold text-[2.5rem]">
                The Perfect Venue for Events &{" "}
                <span className="bg-primary_bg px-4 py-1 rounded-tl-[15px] rounded-br-[15px]">
                  Team Building
                </span>
              </h1>
              <p className="text-primary_text mt-6 font-medium">
                How about we assist with peopling consider foods grown from the
                ground to be necessary to our wellbeing, satisfaction We as a
                whole are in the same boat!
              </p>
              <div className="header_call_to_action mt-6 flex items-center">
                <div className="call_to_action_btn flex">
                  <a
                    href={`https://google.com`}
                    target="_blank"
                    className="btn-primary inline-block text-[.8rem]"
                  >
                    Explore More
                  </a>
                  <a
                    href={`https://google.com`}
                    target="_blank"
                    className="btn-secondary inline-block translate-x-[10px] text-[.8rem]"
                  >
                    Get In Touch
                  </a>
                </div>
                <div className="satisfied_clients flex ms-10">
                  {[
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/run_slider_box-img1.png",
                    },
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/run_slider_box-img2.png",
                    },
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/run_slider_box-img3.png",
                    },
                  ].map((item, index) => (
                    <img
                      key={index}
                      className="-ms-2 w-[35px] h-[35px]"
                      src={item.img}
                    />
                  ))}
                </div>
                <div className="total_satisfied_clients ms-4">
                  <span className="text-primary_text text-[16px] font-semibold me-1">
                    100+
                  </span>
                  <span className="text-primary_text text-[14px] font-semibold">
                    Satisfied Clients
                  </span>
                </div>
              </div>
              <div className="shooters_gallery flex items-center gap-5 mt-10">
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img1.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img2.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img3.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
              </div>
            </div>
            <div className="header_side_image w-[45%] relative">
              <div className="arrow absolute top-0 left-0 arrow-scale-animation">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 262 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M215.372 125.331C220.021 116.147 226.543 106.559 236.101 101.921C240.285 112.516 248.808 124.458 251.101 135.482C251.365 136.753 241.672 135.832 241.228 135.751C231.503 134.001 222.305 131.032 212.996 127.805"
                    stroke="black"
                    stroke-width="4"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M227.728 114.823C200.629 81.8466 153.149 63.2364 113.59 82.8047C103.426 87.8327 90.9455 94.0408 85.7544 104.825C82.8118 110.938 81.5538 120.142 85.6106 125.968C93.1894 136.849 110.164 132.245 114.119 120.091C116.114 113.961 114.448 103.43 110.897 98.0635C108.374 94.2483 105.023 90.8519 100.704 89.0618C64.0405 73.8683 15.6197 104.005 4.62236 140.622"
                    stroke="black"
                    stroke-width="4"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <img className="max-w-full" src={RifleOne} />
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="container flex justify-between">
            <div className="header_content w-[50%] z-[1]">
              <h1 className="text-primary_text leading-[1.2] z-[-1] font-extrabold text-[2.5rem]">
                Experience{" "}
                <span className="bg-primary_bg px-4 py-1 rounded-tl-[15px] rounded-br-[15px]">
                  Family-Friendly
                </span>{" "}
                Clay Shooting Like Never Before
              </h1>
              <p className="text-primary_text mt-6 font-medium">
                How about we assist with peopling consider foods grown from the
                ground to be necessary to our wellbeing, satisfaction We as a
                whole are in the same boat!
              </p>
              <div className="header_call_to_action mt-6 flex items-center">
                <div className="call_to_action_btn">
                  <a
                    href={`https://google.com`}
                    target="_blank"
                    className="btn-primary inline-block text-[.8rem]"
                  >
                    Explore More
                  </a>
                  <a
                    href={`https://google.com`}
                    target="_blank"
                    className="btn-secondary inline-block translate-x-[10px] text-[.8rem]"
                  >
                    Get In Touch
                  </a>
                </div>
                <div className="satisfied_clients flex ms-10">
                  {[
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/run_slider_box-img1.png",
                    },
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/run_slider_box-img2.png",
                    },
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/run_slider_box-img3.png",
                    },
                  ].map((item, index) => (
                    <img
                      key={index}
                      className="-ms-2 w-[35px] h-[35px]"
                      src={item.img}
                    />
                  ))}
                </div>
                <div className="total_satisfied_clients ms-4">
                  <span className="text-primary_text text-[16px] font-semibold me-1">
                    100+
                  </span>
                  <span className="text-primary_text text-[14px] font-semibold">
                    Satisfied Clients
                  </span>
                </div>
              </div>
              <div className="shooters_gallery flex items-center gap-5 mt-10">
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img1.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img2.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img3.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
              </div>
            </div>
            <div className="header_side_image w-[45%] relative">
              <div className="arrow absolute top-0 left-0 arrow-scale-animation">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 262 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M215.372 125.331C220.021 116.147 226.543 106.559 236.101 101.921C240.285 112.516 248.808 124.458 251.101 135.482C251.365 136.753 241.672 135.832 241.228 135.751C231.503 134.001 222.305 131.032 212.996 127.805"
                    stroke="black"
                    stroke-width="4"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M227.728 114.823C200.629 81.8466 153.149 63.2364 113.59 82.8047C103.426 87.8327 90.9455 94.0408 85.7544 104.825C82.8118 110.938 81.5538 120.142 85.6106 125.968C93.1894 136.849 110.164 132.245 114.119 120.091C116.114 113.961 114.448 103.43 110.897 98.0635C108.374 94.2483 105.023 90.8519 100.704 89.0618C64.0405 73.8683 15.6197 104.005 4.62236 140.622"
                    stroke="black"
                    stroke-width="4"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <img className="max-w-full" src={RifleTwo} />
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="container flex justify-between">
            <div className="header_content w-[50%] z-[1]">
              <h1 className="text-primary_text leading-[1.3] z-[-1] font-extrabold text-[2.5rem]">
                Challenge Yourself Across 20 Scenic{" "}
                <span className="bg-primary_bg px-4 py-1 rounded-tl-[15px] rounded-br-[15px]">
                  Shooting Stations
                </span>
              </h1>
              <p className="text-primary_text mt-6 font-medium">
                How about we assist with peopling consider foods grown from the
                ground to be necessary to our wellbeing, satisfaction We as a
                whole are in the same boat!
              </p>
              <div className="header_call_to_action mt-6 flex items-center">
                <div className="call_to_action_btn">
                  <a
                    href={`https://google.com`}
                    target="_blank"
                    className="btn-primary inline-block text-[.8rem]"
                  >
                    Explore More
                  </a>
                  <a
                    href={`https://google.com`}
                    target="_blank"
                    className="btn-secondary inline-block translate-x-[10px] text-[.8rem]"
                  >
                    Get In Touch
                  </a>
                </div>
                <div className="satisfied_clients flex ms-10">
                  {[
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/run_slider_box-img1.png",
                    },
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img2.png",
                    },
                    {
                      img: "https://www.webstrot.com/html/weapon/light_version/assets/images/home3/run_slider_box-img3.png",
                    },
                  ].map((item, index) => (
                    <img
                      key={index}
                      className="-ms-2 w-[35px] h-[35px]"
                      src={item.img}
                    />
                  ))}
                </div>
                <div className="total_satisfied_clients ms-4">
                  <span className="text-primary_text text-[16px] font-semibold me-1">
                    100+
                  </span>
                  <span className="text-primary_text text-[14px] font-semibold">
                    Satisfied Clients
                  </span>
                </div>
              </div>
              <div className="shooters_gallery flex items-center gap-5 mt-10">
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img1.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img2.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
                <img
                  src="https://www.webstrot.com/html/weapon/light_version/assets/images/home3/gun-carbine-img3.png"
                  alt=""
                  className="max-w-[150px] object-contain rounded-[15px]"
                />
              </div>
            </div>
            <div className="header_side_image w-[45%] relative">
              <div className="arrow absolute top-0 left-0 arrow-scale-animation">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 262 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M215.372 125.331C220.021 116.147 226.543 106.559 236.101 101.921C240.285 112.516 248.808 124.458 251.101 135.482C251.365 136.753 241.672 135.832 241.228 135.751C231.503 134.001 222.305 131.032 212.996 127.805"
                    stroke="black"
                    stroke-width="4"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M227.728 114.823C200.629 81.8466 153.149 63.2364 113.59 82.8047C103.426 87.8327 90.9455 94.0408 85.7544 104.825C82.8118 110.938 81.5538 120.142 85.6106 125.968C93.1894 136.849 110.164 132.245 114.119 120.091C116.114 113.961 114.448 103.43 110.897 98.0635C108.374 94.2483 105.023 90.8519 100.704 89.0618C64.0405 73.8683 15.6197 104.005 4.62236 140.622"
                    stroke="black"
                    stroke-width="4"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <img className="max-w-full" src={RifleThree} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ShowcaseSlider;
