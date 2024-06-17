import React, { useRef } from "react";
import HotelCards from "../Card/HotelCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import "swiper/css";
import { flightLocationData } from "../../assets/data/FlightData";

const TopPlaces = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Choose Your Tour!
        </h1>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {flightLocationData.map((data, index) => (
          <SwiperSlide key={index}>
            <HotelCards data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center mt-8">
        <div
          className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer transition duration-200 swiper-button-prev"
          onClick={goPrev}
        >
          <HiOutlineArrowLeft className="w-6 h-6" />
        </div>
        <div
          className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer transition duration-200 swiper-button-next ml-4"
          onClick={goNext}
        >
          <HiOutlineArrowRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default TopPlaces;
