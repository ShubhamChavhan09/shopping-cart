import React from "react";
import SingleProduct from "../components/SingleProduct";
import styled from "styled-components";
import faker from "faker";

const Category1 = () => {
  faker.seed(99);
  const product = [...Array(16)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  return (
    <Wrapper>
      {product.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </Wrapper>
  );
};

export default Category1;

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;
