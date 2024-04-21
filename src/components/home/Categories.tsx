import CategoryCard, { categoryInterface } from "../product/CategoryCard";

const BestSellers = ({ list }: { list: categoryInterface[] }) => {
  return (
    <div className="w-full bg-gray-100 py-6 shadow-md">
      <div className="relative w-screen max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold px-4">Categories</h1>
        <ul className="flex gap-4 justify-between my-4 overflow-x-scroll mx-4">
          {list.map((item) => {
            return <CategoryCard key={item.id} category={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default BestSellers;
