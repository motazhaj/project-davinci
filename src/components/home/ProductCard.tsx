import { FaRegHeart } from "react-icons/fa";

interface productCardProps {
  title: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, category, price, image }: productCardProps) => {
  return (
    <li className="w-[250px] h-[350px] overflow-hidden">
      <a className="w-full h-full flex flex-col gap-2" href="">
        <img className="h-[250px] w-full object-cover rounded-xl" src={`./images/${image}`} alt="test" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <h2 className="truncate">{title}</h2>
            <FaRegHeart className="text-xl" />
          </div>
          <p className="truncate">{category}</p>
          <p>₪ {price}</p>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
