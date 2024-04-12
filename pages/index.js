
import React from "react";

import Header from "@/components/templates/Index/Header";
import Navbar from "@/components/modules/Navbar/Navbar";
import Category from "@/components/templates/Index/Category";
import MenukafeItem from "@/components/modules/menukafe/MenukafeItem";

import OfferProduct from "@/components/templates/Index/OfferProduct";






function Index({ data }) {
  return (
    <>
      <Header />
      <Navbar />
      <Category services={data.services} />
      <MenukafeItem menu={data.menu} />
      <OfferProduct item={data.offer} />

    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();
  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();
  const offerResponse = await fetch("http://localhost:4000/offerProduct");
  const offerData = await offerResponse.json();


  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        offer: offerData,

      },
    },
    revalidate: 60 * 60 * 12, // Second
  };
}

export default Index;
