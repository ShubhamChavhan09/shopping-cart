import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <Side>
        <LinkItem to="/">Home</LinkItem>

        <LinkItem to="/categories/1">Category 1</LinkItem>

        <LinkItem to="/cart">Cart</LinkItem>
      </Side>
    </>
  );
};

export default SideBar;

const Side = styled.div`
  background: #f5f6fa;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 250px;
  min-height: 92vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 0.5rem;
  padding: 1rem;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  // border: 1px solid;
  background: salmon;
  border-radius: 8px;
  padding: 1rem;
  margin: 2rem 0;
`;

const Div = styled.div`
  li {
    margin-bottom: 2.5rem;
  }
  p {
    margin-bottom: 1.5rem;
    // background: salmon;
    // border-radius: 8px;
    // padding: 1rem;
  }
`;
