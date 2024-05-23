import { Link } from "react-router-dom";
import makeTitleFromSlug from "../../utility/makeTitleFromSlug";

export interface categoryInterface {
  id: number;
  slug: string;
  image?: string;
}

const ProductCard = ({ category }: { category: categoryInterface }) => {
  const { slug, image } = category;
  return (
    <li className="min-w-[230px] h-[240px] overflow-hidden relative rounded-xl ">
      <Link to={`/category/${slug}`} className="w-full h-full flex flex-col gap-2">
        <img
          className="h-full w-full object-cover"
          src={image ? image : "/images/img-placeholder.png"}
          alt="test"
        />
        <h2 className="w-full px-4 pb-2 truncate absolute bottom-0 text-xl font-bold z-10">
          {makeTitleFromSlug(slug)}
        </h2>
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white/50" />
      </Link>
    </li>
  );
};

export default ProductCard;
