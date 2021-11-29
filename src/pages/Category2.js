import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "../components/SingleProduct";

const Category2 = () => {
  const {
    state: { products2 },
  } = CartState();

  console.log(products2);

  return (
    <div>
      {products2.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Category2;
