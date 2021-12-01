import React, { useRef } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useDispatch, useStore } from "../../context";
import { AiFillDelete } from "react-icons/ai";

const PopUp = ({ showPop, setShowPop }) => {
  const { cart } = useStore();
  const dispatch = useDispatch();

  const popRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: cart[0].id,
        qty: e.target.value,
      },
    });
  };

  const close = (e) => {
    if (popRef.current === e.target) {
      setShowPop(false);
    }
  };

  return (
    <div>
      {showPop ? (
        <Background ref={popRef} onClick={close}>
          <Wrapper showPop={showPop}>
            <Content>
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <div>{item.name}</div>
                        <div>₹{item.price.split(".")[0]}</div>
                      </div>
                      <div>
                        <select value={item.qty} onChange={handleChange}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                      <Delete
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          });
                        }}
                      />
                    </CartItem>
                  ))}
                </>
              ) : (
                <p>The cart is empty</p>
              )}
            </Content>
            <Close onClick={() => setShowPop((prev) => !prev)} />
          </Wrapper>
        </Background>
      ) : null}
    </div>
  );
};

export default PopUp;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.5);
  background: #fff;
  color: black;
  z-index: 10;
  border-radius: 10px;
  position: relative;
  padding: 3rem 2rem;
  overflow: auto;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Close = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
`;

const CartItem = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 120px;
  }
`;
const Delete = styled(AiFillDelete)`
  color: #ff3f34;
  font-size: 1.5rem;
  margin-right: 1rem;
`;
