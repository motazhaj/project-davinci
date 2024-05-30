import { Link } from "react-router-dom";
import { cartItemInterface } from "../../utility/cartUtils";
import { formatNumber } from "../../utility/productsUtils";

const CartItemCard = ({ cartItem }: { cartItem: cartItemInterface }) => {
  return (
    <Link to={"/product/" + cartItem.id} className="flex gap-4">
      <img src={cartItem.image} alt={cartItem.title} className="size-32 object-cover drop-shadow-md" />
      <div className="flex flex-col">
        <h2 className="truncate font-bold">{cartItem.title}</h2>
        <p className="text-gray-400">{cartItem.category}</p>
        <p>${formatNumber(cartItem.price)}</p>
        <p>Qnt {cartItem.quantity}</p>
        <p>Total Price ${formatNumber(cartItem.totalPrice)}</p>
      </div>
    </Link>
  );
};

export default CartItemCard;
