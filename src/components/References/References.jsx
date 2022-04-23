import React from "react";
import './References.css'
import AVTR1 from "../../assests/MVI Logo.jpg";
import AVTR2 from "../../assests/Crossroads.png";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const data = [
  {
    id: 1, 
    avatar: AVTR1, 
    name: 'MVI Technologies Singapore',
    review: "As a software engineering intern, Farhan proved himself to be an adept communicator with strong leadership qualities that have been unanimously praised by colleagues. Farhan demonstrated the ability to manage multiple tasks and accomplish goals efficiently and according to schedule. He proved himself to be an especially professional employee who stood out among his peers for his enthusiasm and eagerness to learn more. "

  },
  {
    id: 2,
    avatar: AVTR2, 
    name: 'Crossroads Foundation Hong Kong',
    review: "We are deeply grateful to Farhan for the time he gave to the work of Crossroads. He was always willing to do the tasks that were assigned to him and he was very self-motivated. He listened well and asked appropriate questions that showed a clear understanding of the underlying concepts. He was a gift to us all and his work will continue to impact many people who are in a place of need, both within Hong Kong and throughout the world."

  }
  
]

const References = () => {
  return (
    <section id="references">
      <h5>Review from previous employers</h5>
      <h2>References</h2>
      <Swiper
        className="container references__container" // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
      >
        {data.map((dataItems) => {
          return (
            <SwiperSlide key={dataItems.id} className="reference">
              <div className="employer__avatar">
                <img src={dataItems.avatar} alt="" />
              </div>
              <h5 className="employer__name">{dataItems.name}</h5>
              <small className="employer__review">{dataItems.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default References;
