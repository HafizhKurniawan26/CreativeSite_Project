import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { teams } from "../data/datas";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mb-32" id="ourTeam">
      <h1 className="text-center font-bold text-4xl mb-4">
        Our <span className="text-blue-800">Team</span>
      </h1>
      <div className="relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          pagination={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation, Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          className="overflow-visible"
          style={{ height: "auto", paddingBottom: "3rem", paddingTop: "3rem" }}
        >
          {/* {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col items-center gap-2 transition-transform duration-500 ${
                  activeIndex === index ? "scale-100 z-10" : "scale-75"
                }`}
              >
                <img src={img2} alt="" className="rounded-full h-72 w-72" />
                <h1 className="font-bold">Nama Kamu</h1>
                <h3 className="font-bold text-2xl text-gray-400">CEO</h3>
              </div>
            </SwiperSlide>
          ))} */}

          {teams.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col items-center gap-2 transition-transform duration-500 ${
                  activeIndex === index ? "scale-100 z-10" : "scale-75"
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="rounded-full h-72 w-72 mb-2"
                />
                <h1 className="font-bold text-xl">{item.name}</h1>
                <h3 className="font-bold text-2xl text-gray-500">{item.job}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
