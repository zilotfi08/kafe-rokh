
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import React from "react";

function Category({ menu }) {
  return (
    <>

      <ServicesDetails data={menu} />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:4000/services");
  const data = await res.json();

  return {
    props: {
      services: data,
    },
  };
}

export default Category;
