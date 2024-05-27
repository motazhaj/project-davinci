import FilterSection from "../components/filter/FilterSection";
import { useEffect, useState } from "react";
import { productInterface } from "../utility/productsUtils";
import ProductGrid from "../components/product/ProductGrid";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/filter/Pagination";

const Products = () => {
  const [products, setProducts] = useState<productInterface[] | []>([]);
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
        console.warn("Failed to fetch products: ", err);
      })
      .finally(() => setLoading(false));
  }, [searchParams]);

  return (
    <>
      <div className="flex flex-col gap-16 relative -top-24">
        <FilterSection />
        <ProductGrid products={products} loading={loading} />
        <Pagination />
      </div>
    </>
  );
};

export default Products;
