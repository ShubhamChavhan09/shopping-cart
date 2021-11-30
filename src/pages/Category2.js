import React from "react";
import SingleProduct from "../components/SingleProduct";
import { useStore } from "../context";

const Category2 = () => {
  const { product2 } = useStore();

  return (
    <div>
      {product2.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Category2;
