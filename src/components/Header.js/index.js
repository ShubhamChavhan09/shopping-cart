import React, { useState } from "react";
import styled from "styled-components";
import PopUp from "../PopUp";
import { useStore } from "../../context";

const Header = () => {
  const state = useStore();

  const [showPop, setShowPop] = useState(false);

  const toggle = () => {
    setShowPop((prev) => !prev);
  };

  return (
    <Nav>
      <Logo>
        <p>BlablaCart</p>
      </Logo>
      <Container>
        <Button onClick={toggle}>
          Cart<span>{state.cart.length}</span>
        </Button>
        <PopUp showPop={showPop} setShowPop={setShowPop} />
        <p>Username</p>
      </Container>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  padding: 1rem;
`;

const Logo = styled.div``;

const Container = styled.div`
  display: flex;

  p {
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  position: relative;
  margin-right: 1rem;
  padding: 5px 10px;
  font-size: 1rem;
  span {
    position: absolute;
    top: -15px;
    left: -10px;
    background: red;
    border-radius: 50%;
    padding: 8px;
  }
`;
