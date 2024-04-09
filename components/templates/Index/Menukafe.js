import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";
import styled from "../../../styles/category.module.scss"


import { Pagination } from 'swiper/modules';
import MenukafeItem from "@/components/modules/menukafe/MenukafeItem";


function Menukafe({ menu }) {
    return (
        <div>
            <div className={styled.category}>


                <MenukafeItem
                    menu={menu}
                />

            </div>
        </div>
    );
}

export default Menukafe;
