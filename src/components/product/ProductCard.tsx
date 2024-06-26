import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatNumber, productInterface } from "../../utility/productsUtils";
import HoverHighlight from "../shared/HoverHighlight";

const ProductCard = ({ product }: { product: productInterface }) => {
  const { id, title, category, price, image } = product;
  return (
    <li className="min-w-[240px] min-h-[340px]">
      <div className="w-full h-full flex flex-col gap-2">
        <Link className="w-full h-full relative" to={`/product/${id}`}>
          <HoverHighlight />
          <img
            className="size-[240px] object-cover rounded-xl shadow-lg"
            src={image ? image : "/images/img-placeholder.png"}
            alt="test"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <h2 className="truncate">{title}</h2>
            <button>
              <FaRegHeart className="text-xl" />
            </button>
          </div>
          {category && <p className="truncate text-gray-400">{category}</p>}
          {price && <p>₪{formatNumber(price)}</p>}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
