import ProductCard from "../components/product/ProductCard";
import FilterSection from "../components/filter/FilterSection";
import { useEffect, useState } from "react";
import { productCardProps } from "../components/product/ProductCard";

const Products = () => {
  const [products, setProducts] = useState<productCardProps[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState<string[] | []>([]);
  const [sortOptions, setSortOptions] = useState<string[] | []>([]);

  useEffect(() => {
    fetch("/data/products.json").then((data) => {
      data.json().then((data) => {
        setProducts(data);
        setLoading(false);
      });
    });

    fetch("/data/filterOptions.json").then((data) => {
      data.json().then((data) => {
        setFilterOptions(data);
      });
    });

    fetch("/data/sortOptions.json").then((data) => {
      data.json().then((data) => {
        setSortOptions(data);
      });
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
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
