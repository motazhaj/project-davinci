import { useState } from "react";
import { cartItemInterface, getLocalCart, removeCartItem } from "../utility/cartUtils";
import CartItemCard from "../components/product/CartItemCard";
import NavSpacer from "../components/layout/NavSpacer";

const Cart = () => {
  const [cartItems, setCartItems] = useState<cartItemInterface[] | []>(getLocalCart());

  return (
    <div className="flex flex-col gap-16 relative -top-24">
      <NavSpacer />

      <section className="w-full max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-bold pb-12 border-b">Cart</h1>
        <ul className="flex flex-col w-full ">
          {cartItems.map((item: cartItemInterface) => (
            <li key={item.id} className="w-full flex justify-between border-b py-4">
              <CartItemCard cartItem={item} />
              <div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => {
                    removeCartItem(item.id);
                    setCartItems(getLocalCart());
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Cart;
