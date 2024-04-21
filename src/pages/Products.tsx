import FilterSection from "../components/filter/FilterSection";
import { useEffect, useState } from "react";
import { productCardProps } from "../components/product/ProductCard";
import ProductGrid from "../components/product/ProductGrid";
import { useSearchParams } from "react-router-dom";
import { onFilter } from "../utility/productsUtils";

const Products = () => {
  const [products, setProducts] = useState<productCardProps[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState<string[] | []>([]);
  const [sortOptions, setSortOptions] = useState<string[] | []>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch("/data/products.json").then((data) => {
      data.json().then((data) => {
        if (searchParams) {
          onFilter(searchParams.get("search"), searchParams.get("filter"), searchParams.get("sort")).then(
            (data) => {
              setProducts(data);
              setLoading(false);
            }
          );
        } else {
          setProducts(data);
          setLoading(false);
        }
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

  useEffect(() => {
    setLoading(true);
    onFilter(searchParams.get("search"), searchParams.get("filter"), searchParams.get("sort")).then(
      (data) => {
        setProducts(data);
        setLoading(false);
      }
    );
  }, [searchParams]);

  return (
    <>
      <FilterSection sortOptions={sortOptions} filterOptions={filterOptions} />
      <ProductGrid products={products} loading={loading} />
    </>
  );
};

export default Products;
