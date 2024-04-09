
import React, { useState } from 'react';
import styled from "../../../styles/menu.module.scss";



function MenukafeItem({ menu }) {

    return (
        <div className={styled.menu}>
            <h1 className={styled.title}>
                منو کافه  <span> رخ</span>
            </h1>
            <ul className={styled.list_menu} >
                <li className={styled.item_active} >صبحانه</li>
                <li className={styled.item} >سوپ</li>
                <li className={styled.item}>اسنک</li>
                <li className={styled.item}>نوشیدنی</li>
                <li className={styled.item}>دسر</li>
                <li className={styled.item}>ناهار</li>
                <li className={styled.item}>شام</li>


            </ul>
            <div className={styled.box_menu}>
                <div className={styled.right}>
                    {menu.map((menu) => (
                        <div className={styled.item} >
                            <div className={styled.right}>
                                <span className={styled.price}>{menu.price}</span>
                                <div className={styled.line} ></div>
                            </div>

                            <div className={styled.info_menu}>
                                <h2 className={styled.title_menu}>{menu.title}</h2>
                                <span className={styled.desc_menu}>{menu.desc}</span>
                            </div>





                            <img src={menu.img} className={styled.img1} />

                        </div>))}

                </div>
                <div className={styled.left}>
                    <img src='/images/menu-kafe/1.svg' className={styled.img1} />
                    <img src='/images/menu-kafe/2.svg' className={styled.img2} />
                    <img src='/images/menu-kafe/3.svg' className={styled.img3} />
                    <img src='/images/menu-kafe/4.svg' className={styled.img4} />
                    <img src='/images/menu-kafe/5.svg' className={styled.img5} />
                    <img src='/images/menu-kafe/6.svg' className={styled.img6} />

                </div>
            </div>



        </div>
    );
}

export default MenukafeItem;
