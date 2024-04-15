import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";
import styled from "./OfferProduct.module.scss"
import Card from "@/components/modules/Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';




function OfferProduct({ item }) {
  return (
    <div>
      <div className={styled.box_offer}>
        <h2 className={styled.title_main}>  غذاهای تخفیف دار</h2>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className={styled.swiper_offer}
        >

          {item.map((item) => (

            <SwiperSlide className={styled.swiper_slide} >
              <Card
                title={item.title}
                price={item.price}
                desc={item.desc}
                img={item.img}
                off={item.off}

              /></SwiperSlide>))}
        </Swiper>
      </div>
    </div >
  );
}

export default OfferProduct;
