import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";
import styled from "../../../styles/category.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


function Category({ services }) {
  return (
    <div>
      <div className={styled.category}>


        <ServiceItem
          services={services}
        />

      </div>
    </div>
  );
}

export default Category;
