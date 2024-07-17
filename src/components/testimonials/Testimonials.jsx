import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Yves Denan , DSI in retraiteplus",
    review:
      "I highly recommend David for a development position based on their exceptional skills, dedication, and passion for the field, as well as their ability to collaborate effectively and continuously seek self-improvement.",
  },
  {
    avatar: AVTR2,
    name: "raphael benhamou teacher javascript typescript react at John Bryce",
    review:
      "David has demonstrated a strong willingness to learn and an evident curiosity for the development field",
  },
  {
    avatar: AVTR3,
    name: "Eyal gold teacher at John bryce",
    review:
      " David has untapped potential. It is certain that, in the right environmehis skills and evolve as a developer.",
  },
  {
    avatar: AVTR4,
    name: "Eyal Daniel head Hunter at John Bryce",
    review:
    "He has been appreciated by his colleagues for his willingness to explore problem-solving solutions and his dedication to trying to resolve them",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From teachers and DSI</h5>
      <h2></h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

