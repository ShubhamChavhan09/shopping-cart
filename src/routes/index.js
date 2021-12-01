import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import styled from "styled-components";
import Cart from "../pages/Cart";
import Category1 from "../pages/Category1";

const Routes = () => {
  return (
    <Div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories/:id" component={Category1} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Div>
  );
};

export default Routes;

const Div = styled.div`
  flex: 1;
`;
