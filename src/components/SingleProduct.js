import React from "react";
import { useStore, useDispatch } from "../context";
import styled from "styled-components";

const SingleProduct = ({ item }) => {
  const { cart } = useStore();
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>₹{item.price.split(".")[0]}</p>
      {/* if specific item is not in the cart the it will show Add to cart button or else remove from cart */}

      {cart.some((p) => p.id === item.id) ? (
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
    </Container>
  );
};

export default SingleProduct;

const Container = styled.div`
  border: 1px solid #d3d9f0;
  box-shadow: 0 0 10px #d3d9f0;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 200px;
  }

  button {
    cursor: pointer;
    width: 90%;
    padding: 5px 0;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: none;
    outline: none;
    background: #7fd1ae;
  }
`;
