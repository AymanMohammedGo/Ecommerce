import React from "react";
import ProductCart from "./ProductCart";
const ProductsList = ({ data }) => {
  return (
    <>
      {console.log(data)}
      {data?.map((item, index) => (
        <ProductCart item={item} key={index} />
      ))}
    </>
  );
};

export default ProductsList;
