import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <p>BlablaCart</p>
      </Logo>
      <Container>
        <Button>
          Cart<span>0</span>
        </Button>
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
