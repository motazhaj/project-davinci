import ProductCard from "./ProductCard";

const BestSellers = () => {
  return (
    <div className="w-full bg-green-800 py-4">
      <div className="relative max-w-[1400px] mx-auto px-8 text-white">
        <h1 className="text-3xl font-bold">Best Selling</h1>
        <ul className="flex gap-4 justify-between mt-4 overflow-x-scroll pt-6">
          <ProductCard title="Outdoor Bag XL" image="testing-image.jpg" />
          <ProductCard title="Outdoor Bag XL" image="testing-image.jpg" />
          <ProductCard title="Outdoor Bag XL" image="testing-image.jpg" />
          <ProductCard title="Outdoor Bag XL" image="testing-image.jpg" />
          <ProductCard title="Outdoor Bag XL" image="testing-image.jpg" />
        </ul>
      </div>
    </div>
  );
};

export default BestSellers;
