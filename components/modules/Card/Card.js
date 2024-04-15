import Link from "next/link";
import React from "react";
import styled from "./Card.module.scss";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';





function Card({ img, desc, title, off, price }) {
    return (<>
        <div className={styled.box_card_i}>
            <div className={styled.box}>
                <div className={styled.box_img}>
                    <img className={styled.img} src={img} />
                    <div className={styled.Offer_percent}>%{off}</div>
                </div>
                <Link href={`/products`}>
                    <div className={styled.multiline}>
                        <h4 className={styled.title}>{title}</h4></div>
                </Link>
                <div className={styled.multiline_d}>
                    <p className={styled.desc} >{desc}</p></div>
                <span className={styled.price}>{price} <span className={styled.span_1} >تومان</span></span>
            </div>

        </div>
    </>

    );
}

export default Card;
