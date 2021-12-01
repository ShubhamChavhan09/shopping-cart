import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Category1 from "../pages/Category1";
import Category2 from "../pages/Category2";
import Category3 from "../pages/Category3";
import styled from "styled-components";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category01" component={Category1} />
        <Route exact path="/category02" component={Category2} />
        <Route exact path="/category03" component={Category3} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Div>
  );
};

export default Routes;

const Div = styled.div`
  background: lightgray;
  flex: 1;
`;
