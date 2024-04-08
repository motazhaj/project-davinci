interface productCardProps {
  category: string;
  image: string;
}

const ProductCard = ({ category, image }: productCardProps) => {
  return (
    <li className="min-w-[250px] h-[250px] overflow-hidden relative rounded-xl">
      <a className="w-full h-full flex flex-col gap-2" href="">
        <img className="h-full w-full object-cover shadow-lg -z-10" src={`./images/${image}`} alt="test" />
        <h2 className="w-full px-4 pb-2 truncate absolute bottom-0 text-xl font-bold">{category}</h2>
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/50 -z-10" />
      </a>
    </li>
  );
};

export default ProductCard;
