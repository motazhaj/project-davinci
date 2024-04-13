import ProductCard from "../components/product/ProductCard";
import FilterSection from "../components/filter/FilterSection";

const products = [
  { id: 0, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 1, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 2, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 3, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 4, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 5, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 6, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 7, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 8, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 9, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 10, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 11, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
];

const sortOptions = [
  { id: 0, title: "Best Selling", value: "best" },
  { id: 1, title: "Alphabetically, A-Z", value: "a" },
  { id: 2, title: "Alphabetically, Z-A", value: "z" },
  { id: 3, title: "Price, low to high", value: "pricea" },
  { id: 4, title: "Price, high to low", value: "pricez" },
  { id: 5, title: "Date, old to new", value: "datea" },
  { id: 6, title: "Date, new to old", value: "datez" },
];

const filterOptions = [
  { id: 0, title: "Bag", value: "bag" },
  { id: 1, title: "Notebook", value: "notebook" },
  { id: 2, title: "Pencil", value: "pencil" },
  { id: 3, title: "T-Shirt", value: "tshirt" },
  { id: 4, title: "School Bag", value: "schoolbag" },
];

const Products = () => {
  return (
    <>
      <FilterSection sortOptions={sortOptions} filterOptions={filterOptions} />

      <section className="max-w-screen-lg mx-auto">
        <ul className="grid grid-cols-5 gap-4 ">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Products;
