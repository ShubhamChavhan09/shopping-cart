import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "../components/SingleProduct";

const Category3 = () => {
  const {
    state: { products3 },
  } = CartState();

  console.log(products3);

  return (
    <div>
      {products3.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Category3;
