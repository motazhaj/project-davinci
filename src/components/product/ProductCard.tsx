import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface productCardProps {
  id: number;
  title: string;
  category?: string;
  price?: string;
  image: string;
}

const ProductCard = ({ id, title, category, price, image }: productCardProps) => {
  return (
    <li className="min-w-[230px] h-[340px]">
      <div className="w-full h-full flex flex-col gap-2">
        <Link className="w-full h-full relative" to={`/product/${id}`}>
          <div className="absolute w-full h-full transition-colors hover:bg-white/40 rounded-xl" />
          <img
            className="h-full w-full object-cover rounded-xl shadow-lg"
            src={`/images/${image}`}
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
          {price && <p>₪ {price}</p>}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
