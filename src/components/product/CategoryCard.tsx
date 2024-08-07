import { Link } from "react-router-dom";
import makeTitleFromSlug from "../../utility/makeTitleFromSlug";
import HoverHighlight from "../shared/HoverHighlight";

export interface categoryInterface {
  id: number;
  slug: string;
  image?: string;
}

const CategoryCard = ({ category }: { category: categoryInterface }) => {
  const { slug, image } = category;
  return (
    <li className="min-w-[230px] h-[240px] overflow-hidden relative rounded-xl ">
      <Link to={`/products?filter=${slug}`} className="w-full h-full flex flex-col gap-2">
        <HoverHighlight />
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

export default CategoryCard;
