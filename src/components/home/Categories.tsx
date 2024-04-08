import CategoryCard from "../product/CategoryCard";

interface Category {
  id: number;
  category: string;
  image: string;
}

const BestSellers = ({ list }: { list: Category[] }) => {
  return (
    <div className="w-full bg-gradient-to-t from-lime-950 to-lime-800 py-6 shadow-inner overflow-hidden">
      <div className="relative w-screen max-w-[1280px] mx-auto text-white">
        <h1 className="text-3xl font-bold px-4">Categories</h1>
        <ul className="flex gap-4 justify-between my-4 overflow-x-scroll mx-4">
          {list.map((item) => {
            return <CategoryCard key={item.id} category={item.category} image={item.image} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default BestSellers;
