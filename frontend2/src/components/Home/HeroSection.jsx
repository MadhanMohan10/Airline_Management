import React from "react";
import HeroSectionCard from "./HeroSectionCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  const homeData = [
    {
      heading: "Immerse in the Vibrancy of Tokyo",
      subheading: "The heart of Japan",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    },
    {
      heading: "Sail Through the Canals of Venice",
      subheading: "The floating city",
      src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    },
    {
      heading: "Walk Among the Ruins of Rome",
      subheading: "The Eternal City",
      src: "https://images.unsplash.com/photo-1549082986-6f1d3d54b340",
    },
    {
      heading: "Explore the Wilderness of Alaska",
      subheading: "Adventure in the last frontier",
      src: "https://images.unsplash.com/photo-1503512875310-9b57c0b09a2b",
    },
    {
      heading: "Unwind on the Beaches of Bali",
      subheading: "Island of the Gods",
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
  ];

  return (
    <section className="max-w-[1800px] mx-auto w-full h-[90vh] mt-6 rounded-[25px] overflow-hidden relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {homeData.map((data, index) => (
          <SwiperSlide key={index} className="h-[90vh]">
            <HeroSectionCard
              heading={data.heading}
              subheading={data.subheading}
              src={data.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
