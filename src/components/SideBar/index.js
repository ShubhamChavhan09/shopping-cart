import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Side>
      <LinkItem to="/category01">Category 1</LinkItem>
      <LinkItem to="/category02">Category 2</LinkItem>
      <LinkItem to="/category03">Category 3</LinkItem>
    </Side>
  );
};

export default SideBar;

const Side = styled.div`
  background: salmon;
  width: 20%;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid;
  font-family: Sans-serif;
  padding: 1rem;
  margin-bottom: 1rem;
`;
