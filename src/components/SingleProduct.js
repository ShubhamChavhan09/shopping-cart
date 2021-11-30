import React from "react";
import { useStore, useDispatch } from "../context";

const SingleProduct = ({ item }) => {
  const state = useStore();
  const dispatch = useDispatch();

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>₹{item.price}</p>

      {/* if specific item is not in the cart the it will show Add to cart button or else remove from cart */}

      {state.cart.some((p) => p.id === item.id) ? (
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: item });
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: item });
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
