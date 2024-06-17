import React from "react";
import TestimonialCard from "../Card/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia Anderson",
      role: "Passenger",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026701d",
      text:
        "Great experience with the service! The staff is amazing and very accommodating. Highly recommend.",
    },
    {
      name: "Emma Thompson",
      role: "Passenger",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026702d",
      text:
        "I've been using this service for a long time, and it's always reliable. The customer support is top-notch!",
    },
    {
      name: "Lucas Wilson",
      role: "Passenger",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026703d",
      text:
        "The service exceeded my expectations. Friendly staff and seamless experience. Will definitely use again.",
    },
  ];

  return (
    <div className="py-5 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-[18px]">This is why passengers love us</h1>
      </div>
      <div>
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
