import React from "react";
import SingleProduct from "../components/SingleProduct";
import { CartState } from "../context/Context";

const Category1 = () => {
  const {
    state: { products1 },
  } = CartState();

  console.log(products1);

  return (
    <div>
      {products1.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Category1;
