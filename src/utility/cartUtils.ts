import { productInterface } from "./productsUtils";

export interface cartItemInterface extends productInterface {
  quantity: number;
  totalPrice: number;
}

export interface cartInterface {
  cartItems: cartItemInterface[];
  totalItems: number;
  totalPrice: number;
}

function addCartItem(product: productInterface, quantity: number) {
  makeCartItem(product, quantity);
  const prevCartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  localStorage.setItem("cartItems", JSON.stringify([prevCartItems, product]));
}

function makeCartItem(product: productInterface, quantity: number): cartItemInterface {
  return {
    ...product,
    quantity: quantity,
    totalPrice: product.price * quantity,
  };
}
