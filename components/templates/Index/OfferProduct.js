import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";
import styled from "./OfferProduct.module.scss"
import Card from "@/components/modules/Card/Card";


function OfferProduct({ item }) {
  return (
    <div>
      <div className={styled.box_offer}>

        <Card
          item={item}
        />

      </div>
    </div>
  );
}

export default OfferProduct;
