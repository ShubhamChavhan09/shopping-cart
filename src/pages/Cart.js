import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "../context";
import styled from "styled-components";

const Cart = () => {
  const state = useStore();

  console.log(state);

  const dispatch = useDispatch();

  const [total, setTotal] = useState("");

  useEffect(() => {
    setTotal(state.cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [state.cart]);

  return (
    <Container>
      <List>
        {state.cart.map((item) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </List>
      <Summary>
        <span>Subtotal ({state.cart.length}) items </span>
        <span> Total : ₹{total} </span>
      </Summary>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
`;

const Summary = styled.div`
  width: 250px;
  height: 100vh;
  background: salmon;
`;

const List = styled.div`
  flex: 1;
  background: lightgray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 100%;
  flex-direction: column;
`;
