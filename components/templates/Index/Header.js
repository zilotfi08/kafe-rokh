import React from "react";
import styled from "../../../styles/header.module.scss"
import Image from "next/image";
import imgdish from "../../../public/images/header/dish.svg";

function Header() {
    return (
        <div className={styled.header}>
            <Image className={styled.imgdish} src={imgdish} />
            <div className={styled.img_Right} ></div>
            <div className={styled.img_Left} ></div>
            <div className={styled.info}>
                <h1 className={styled.title} >صرف لحظاتی با ما در <span>کافه رخ</span></h1>
                <span className={styled.desc}>ارائه غذاهای ایتالیایی با بهترین مواد اولیه و طعمی بی نظیر در ایران هدف اصلی مجموعه رستوران های جنارو می باشد که مورد توجه و استقبال مردم قرار گرفته است.</span>
                <div className={styled.view} >مشاهده</div>

            </div>
        </div>

    );
}

export default Header; 