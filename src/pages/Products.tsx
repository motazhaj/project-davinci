import FilterSection from "../components/filter/FilterSection";
import { useEffect, useState } from "react";
import { productCardProps } from "../components/product/ProductCard";
import ProductGrid from "../components/product/ProductGrid";

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

  return (
    <>
      <FilterSection sortOptions={sortOptions} filterOptions={filterOptions} />
      <ProductGrid products={products} loading={loading} />
    </>
  );
};

export default Products;
