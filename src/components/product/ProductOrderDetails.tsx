import { IoCart } from "react-icons/io5";
import ButtonPrimary from "../shared/buttons/ButtonPrimary";
import { FaRegHeart } from "react-icons/fa";
import { productInterface } from "../../utility/productsUtils";
import { useEffect, useState } from "react";
import {
  addCartItem,
  cartItemInterface,
  getItemQuantity,
  getLocalCart,
  isItemInCart,
  removeCartItem,
  setItemQuantity,
} from "../../utility/cartUtils";

const ProductOrderDetails = ({ product }: { product: productInterface }) => {
  const [cartItems, setCartItems] = useState<cartItemInterface[] | []>(getLocalCart());
  const [quantity, setQuantity] = useState(getItemQuantity(product.id));
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(isItemInCart(cartItems, product.id));
  }, [cartItems]);

  useEffect(() => {
    if (isInCart) {
      setItemQuantity(product.id, quantity);
      setCartItems(getLocalCart());
    }
  }, [quantity]);

  console.log("Cart \n" + JSON.stringify(cartItems, null, 2));

  return (
    <div className="flex flex-col gap-4 w-1/2 p-8">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-400">{product.category}</p>
      <p className="h-32 overflow-auto">{product.description}</p>
      <p className="text-4xl font-bold">₪ {product.price}</p>
      <hr />
      <div className="flex gap-8 items-center">
        <p className="text-xl font-semibold">Quantity</p>
        <input
          className="bg-slate-200 rounded-lg p-2 text-center w-24 focus:outline outline-primary"
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
          step={1}
        />
      </div>
      <div className="w-full flex gap-4 pt-10">
        <ButtonPrimary
          title={isInCart ? "Remove from cart" : "Add to cart"}
          onClick={() => {
            isInCart ? removeCartItem(product.id) : addCartItem(product, quantity);
            setCartItems(getLocalCart());
          }}
        >
          <IoCart size={24} />
        </ButtonPrimary>

        <ButtonPrimary
          title="Add to favourites"
          onClick={() => console.log("Add to favourites")}
          bgColor="gray-200"
          textColor="black"
          bgHover="red-500"
          textHover="white"
        >
          <FaRegHeart size={24} />
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default ProductOrderDetails;
