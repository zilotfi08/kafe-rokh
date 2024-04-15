import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";
import styled from "./PopularFood.module.scss"
import Card from "@/components/modules/Card/Card";


function PopularFood({ item }) {
  return (
    <div>
      <div className={styled.box_PopularFoods}>
        <div className={styled.product}>

          {item.map((item) => (
            <Card
              className={styled.card_popular}
              title={item.title}
              price={item.price}
              desc={item.desc}
              img={item.img}
              off={item.off}

            />))}

        </div>
      </div>
    </div>
  );
}

export default PopularFood;
