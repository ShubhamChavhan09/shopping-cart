import React from "react";
import { useStore } from "../context";

const Cart = () => {
  const state = useStore();

  return (
    <div>
      <h1>Cart Page</h1>
    </div>
  );
};

export default Cart;
