import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useDispatch, useStore } from "../../context";
import { AiFillDelete } from "react-icons/ai";

const PopUp = ({ showPop, setShowPop }) => {
  const { cart } = useStore();
  const dispatch = useDispatch();
  return (
    <div>
      {showPop ? (
        <Background>
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

                      <AiFillDelete
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
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 120px;
  }
`;
