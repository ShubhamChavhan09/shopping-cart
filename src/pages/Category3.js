import React from "react";
import SingleProduct from "../components/SingleProduct";
import { useStore } from "../context";

const Category3 = () => {
  const { product3 } = useStore();

  return (
    <div>
      {product3.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Category3;
