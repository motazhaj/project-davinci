import { productInterface } from "./productsUtils";

export interface cartItemInterface extends productInterface {
  quantity: number;
  totalPrice: number;
}

export function getLocalCart() {
  return JSON.parse(localStorage.getItem("cartItems")?.toString() || "[]");
}

export function setLocalCart(cartItems: cartItemInterface[]) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export function addCartItem(product: productInterface, quantity: number) {
  const cartItems = getLocalCart();
  if (isItemInCart(cartItems, product.id)) {
    alert("Item already in cart");
    return;
  }

  const newItem = makeCartItem(product, quantity);
  setLocalCart([...cartItems, newItem]);
}

export function removeCartItem(id: number) {
  const cartItems = getLocalCart();
  setLocalCart(cartItems.filter((item: cartItemInterface) => item.id !== id));
}

export function makeCartItem(product: productInterface, quantity: number): cartItemInterface {
  return {
    ...product,
    quantity: quantity,
    totalPrice: product.price * quantity,
  };
}

export function isItemInCart(cartItems: cartItemInterface[], id: number) {
  return cartItems.some((item) => item.id === id);
}
