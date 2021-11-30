import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const PopUp = ({ showPop, setShowPop }) => {
  return (
    <div>
      {showPop ? (
        <Background>
          <Wrapper showPop={showPop}>
            <Content>
              <p>hello</p>
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
  padding: 20px;
  overflow: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Close = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;
