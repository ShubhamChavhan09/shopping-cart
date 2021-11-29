import { createContext } from "react";
import faker from "faker";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  console.log(products);

  return <Cart.Provider>{children}</Cart.Provider>;
};

export default Context;
