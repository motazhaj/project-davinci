import { Link } from "react-router-dom";
import { cartItemInterface, getLocalCart, removeCartItem, setItemQuantity } from "../../utility/cartUtils";
import { formatNumber } from "../../utility/productsUtils";

const CartItemCard = ({
  cartItem,
  setCartItems,
}: {
  cartItem: cartItemInterface;
  setCartItems: React.Dispatch<React.SetStateAction<cartItemInterface[]>>;
}) => {
  return (
    <div className="flex gap-4 w-full">
      <div className="flex w-full ">
        <Link to={"/product/" + cartItem.id} className="w-5/12 flex gap-4 hover:scale-105 transition-transform">
          <img src={cartItem.image} alt={cartItem.title} className="size-32 object-cover border rounded-lg" />
          <div className="flex flex-col justify-between">
            <h2 className="font-bold">{cartItem.title}</h2>
            <p className="text-gray-400">{cartItem.category}</p>
          </div>
        </Link>
        <p className="w-2/12">₪{formatNumber(cartItem.price)}</p>
        <div className="w-2/12 flex items-start">
          <input
            className="bg-slate-200 rounded-lg p-2 text-center w-24 focus:outline outline-primary"
            type="number"
            value={cartItem.quantity}
            onChange={(e) => {
              setItemQuantity(cartItem.id, Number(e.target.value));
              setCartItems(getLocalCart());
            }}
            step={1}
          />
        </div>
        <p className="w-2/12">₪{formatNumber(cartItem.totalPrice)}</p>
        <div className="w-1/12 flex gap-4 items-start">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              removeCartItem(cartItem.id);
              setCartItems(getLocalCart());
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
