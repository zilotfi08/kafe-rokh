import Link from "next/link";
import React from "react";
import styled from "./Card.module.scss";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';





function Card({ item }) {
    return (<>
        <div className={styled.box_card}>
            <Swiper
                slidesPerView={4}
                navigation={true}
           
                modules={[Navigation]}
                className={styled.swiper_offer}
            >

                {item.map((item) => (
                    <SwiperSlide className={styled.swiper_slide} >
                        <div className={styled.box}>
                            <img className={styled.img} src={item.img} />

                            <Link href={`/products/${item.id}`}>
                                <h4 className={styled.title}>{item.title}</h4>
                            </Link>
                            <p className={styled.desc} >{item.desc}</p>
                            <span className={styled.price}>${item.price}</span>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    </>

    );
}

export default Card;
