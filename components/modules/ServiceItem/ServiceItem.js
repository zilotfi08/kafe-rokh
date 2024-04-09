import React from "react";
import styled from "../../../styles/category.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
function ServiceItem({ services }) {
  return (
    <Swiper
      slidesPerView={6}
      navigation={true}
      modules={[Navigation]}
      className={styled.swiper_category}
    >
      {services.map((service) => (
        <SwiperSlide className={styled.swiper_slide} key={service.img}>
          <img className={styled.item} src={service.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ServiceItem;
