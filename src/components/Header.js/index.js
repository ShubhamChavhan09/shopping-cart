import React, { useState } from "react";
import styled from "styled-components";
import PopUp from "../PopUp";
import { useStore } from "../../context";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useStore();

  const [showPop, setShowPop] = useState(false);

  const toggle = () => {
    setShowPop((prev) => !prev);
  };

  return (
    <Nav>
      <Logo to="/">BlablaCart</Logo>
      <Container>
        <Button onClick={toggle}>
          Cart<span>{cart.length}</span>
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
  padding: 1rem;
  margin-bottom: 0.8rem;
  background: #393a3d;
  color: #f5f6fa;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #f5f6fa;
  font-size: 1.8rem;
`;

const Container = styled.div`
  display: flex;

  p {
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  background: #7fd1ae;
  position: relative;
  margin-right: 1rem;
  padding: 0 15px;
  font-size: 1rem;
  span {
    position: absolute;
    top: -15px;
    left: -10px;
    background: salmon;
    border-radius: 50%;
    padding: 8px;
  }
`;
