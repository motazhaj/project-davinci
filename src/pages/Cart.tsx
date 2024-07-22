import { useState } from "react";
import { cartItemInterface, getInvoice, getLocalCart } from "../utility/cartUtils";
import CartItemCard from "../components/product/CartItemCard";
import NavSpacer from "../components/layout/NavSpacer";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/shared/buttons/ButtonPrimary";
import { formatNumber } from "../utility/productsUtils";

const Cart = () => {
  const [cartItems, setCartItems] = useState<cartItemInterface[] | []>(getLocalCart());

  return (
    <div className="flex flex-col gap-16 relative -top-24">
      <NavSpacer />

      <section className="w-full max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-bold pb-6">My Cart!</h1>
        {cartItems.length === 0 ? (
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-xl">Your cart is empty!</h2>
            <Link to="/products">
              <ButtonPrimary title="Go shopping!" />
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex flex-col w-full ">
              <li className="w-full flex justify-start border-b py-4">
                <h2 className="w-5/12">Item Details</h2>
                <h2 className="w-2/12">Price</h2>
                <h2 className="w-2/12">Quantity</h2>
                <h2 className="w-1/12">Total Price</h2>
              </li>
              {cartItems.map((item: cartItemInterface) => (
                <li key={item.id} className="w-full flex justify-between border-b py-4">
                  <CartItemCard cartItem={item} setCartItems={setCartItems} />
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 w-1/6 mt-8 ml-auto">
              <p>Sub Total: ${formatNumber(getInvoice())}</p>
              <Link to="/products">
                <ButtonPrimary title="Continue Shopping" />
              </Link>
              <Link to="/checkout">
                <ButtonPrimary title="Checkout" />
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
