import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "../context";
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";

const Cart = () => {
  const { cart } = useStore();
  const dispatch = useDispatch();
  const [total, setTotal] = useState("");

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: cart[0].id,
        qty: e.target.value,
      },
    });
  };

  return (
    <Container>
      {cart.length > 0 ? (
        <List>
          {cart.map((item) => (
            <Wrapper key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <p>{item.name}</p>
                <p>₹{item.price.split(".")[0]}</p>
              </div>
              <select value={item.qty} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>

              <Delete
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  });
                }}
              />
            </Wrapper>
          ))}
        </List>
      ) : (
        <h2>The cart is empty</h2>
      )}

      <Summary>
        <p>Subtotal ({cart.length}) items </p>
        <p> Total : ₹{total} </p>
      </Summary>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  h2 {
    margin: 0 auto;
  }
`;

const Summary = styled.div`
  width: 250px;
  height: 100vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 1rem;
  margin-right: 0.5rem;
`;

const List = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 100%;
  flex-direction: column;
`;
const Wrapper = styled.div`
  border-radius: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  align-items: center;
  overflow: hidden;

  img {
    width: 200px;
  }
`;

const Delete = styled(AiFillDelete)`
  color: #ff3f34;
  margin-right: 1rem;
  font-size: 1.5rem;
`;
