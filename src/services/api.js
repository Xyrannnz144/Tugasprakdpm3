import { DUMMY_PRODUCTS } from "../constants/products";

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_PRODUCTS);
    }, 1000);
  });
};
