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

export function getItemQuantity(id: number) {
  const cart = getLocalCart();

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      return cart[i].quantity;
    }
  }
  return 0;
}

export function setItemQuantity(id: number, quantity: number) {
  const cart = getLocalCart();
  if (quantity < 1) {
    quantity = 1;
  }
  setLocalCart(
    cart.map((item: cartItemInterface) =>
      item.id === id ? { ...item, quantity: quantity, totalPrice: quantity * item.price } : item
    )
  );
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
