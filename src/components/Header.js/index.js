import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <p>BlablaCart</p>
      </Logo>
      <Container>
        <p>Cart</p>
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
`;

const Logo = styled.div``;

const Container = styled.div`
  display: flex;
`;
