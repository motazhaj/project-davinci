import { FaRegHeart } from "react-icons/fa";

interface productCardProps {
  title: string;
  category?: string;
  price?: string;
  image: string;
}

const ProductCard = ({ title, category, price, image }: productCardProps) => {
  return (
    <li className="min-w-[230px] h-[340px] overflow-hidden">
      <a className="w-full h-full flex flex-col gap-2" href="">
        <img
          className="h-full w-full object-cover rounded-xl shadow-lg"
          src={`./images/${image}`}
          alt="test"
        />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <h2 className="truncate">{title}</h2>
            <FaRegHeart className="text-xl" />
          </div>
          {category && <p className="truncate text-gray-400">{category}</p>}
          {price && <p>₪ {price}</p>}
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
