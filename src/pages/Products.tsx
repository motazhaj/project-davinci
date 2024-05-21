import FilterSection from "../components/filter/FilterSection";
import { useEffect, useState } from "react";
import { productCardProps } from "../utility/productsUtils";
import ProductGrid from "../components/product/ProductGrid";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/filter/Pagination";

const Products = () => {
  const [products, setProducts] = useState<productCardProps[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products?" + searchParams.toString())
      .then((data) => {
        data.json().then((data) => {
          if (searchParams.get("pageNumber") === "1") {
            setProducts(data);
          } else {
            setProducts([...products, ...data]);
          }
        });
      })
      .catch((err) => {
        console.log("FETCH ERROR", err);
      })
      .finally(() => setLoading(false));
  }, [searchParams]);

  return (
    <>
      <FilterSection />
      <ProductGrid products={products} loading={loading} />
      <Pagination />
    </>
  );
};

export default Products;
