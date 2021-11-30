import React from "react";
import SingleProduct from "../components/SingleProduct";
import { useStore } from "../context";

const Category1 = () => {
  const { product1 } = useStore();

  return (
    <div>
      {product1.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Category1;
