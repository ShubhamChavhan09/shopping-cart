import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "../context";
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";

const Cart = () => {
  const state = useStore();

  const dispatch = useDispatch();

  const [total, setTotal] = useState("");

  useEffect(() => {
    setTotal(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state.cart]);

  return (
    <Container>
      <List>
        {state.cart.map((item) => (
          <span key={item.id}>
            {item.name}

            <form>
              <select
                onChange={(e) => {
                  dispatch({
                    type: " CHANGE_CART_QTY",
                    payload: {
                      id: item.id,
                      qty: e.target.value,
                    },
                  });
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </form>
            <AiFillDelete
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                });
              }}
            />
          </span>
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 100%;
  flex-direction: column;
`;
