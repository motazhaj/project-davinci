import ProductCard from "../product/ProductCard";

interface itemInterface {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
}

const NewArrivals = ({ list }: { list: itemInterface[] }) => {
  return (
    <div className="relative w-screen max-w-[1280px] mx-auto px-4">
      <h1 className="text-3xl font-bold">New Arrivals</h1>
      <ul className="flex gap-4 justify-between mt-4 overflow-x-scroll">
        {list.map((item) => {
          return (
            <ProductCard
              key={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NewArrivals;
