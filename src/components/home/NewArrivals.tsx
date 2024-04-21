import ProductCard, { productCardProps } from "../product/ProductCard";

const NewArrivals = ({ list }: { list: productCardProps[] }) => {
  return (
    <div className="relative w-screen max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl font-bold">New Arrivals</h1>
      <ul className="flex gap-4 justify-between mt-4 overflow-x-scroll">
        {list.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </ul>
    </div>
  );
};

export default NewArrivals;
