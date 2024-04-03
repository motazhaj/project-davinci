import ProductCard from "./ProductCard";

const NewArrivals = () => {
  return (
    <div className="relative max-w-[1400px] mx-auto px-8">
      <h1 className="text-3xl font-bold">New Arrivals</h1>
      <ul className="flex gap-4 justify-between mt-4 overflow-x-scroll">
        <ProductCard title="Outdoor Bag XL" category="School Bag" price={39.99} image="testing-image.jpg" />
        <ProductCard title="Outdoor Bag XL" category="School Bag" price={39.99} image="testing-image.jpg" />
        <ProductCard title="Outdoor Bag XL" category="School Bag" price={39.99} image="testing-image.jpg" />
        <ProductCard title="Outdoor Bag XL" category="School Bag" price={39.99} image="testing-image.jpg" />
        <ProductCard title="Outdoor Bag XL" category="School Bag" price={39.99} image="testing-image.jpg" />
      </ul>
    </div>
  );
};

export default NewArrivals;
