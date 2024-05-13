import FilterSection from "../components/filter/FilterSection";
import { useEffect, useState } from "react";
import { productCardProps } from "../utility/productsUtils";
import ProductGrid from "../components/product/ProductGrid";
import { useSearchParams } from "react-router-dom";
import { onFilter } from "../utility/productsUtils";

const Products = () => {
  const [products, setProducts] = useState<productCardProps[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState<string[] | []>([]);
  const [sortOptions, setSortOptions] = useState<string[] | []>([]);
  const [searchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
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
    setPageNumber(() => 1);
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    const pageSize = 5; // possible to make dynamic
    const searchTerm = searchParams.get("search") || "";
    const filter = searchParams.get("filter") || "";
    const sort = searchParams.get("sort") || "";

    onFilter(searchTerm, filter, sort, pageSize, pageNumber)
      .then((data) => {
        setProducts(pageNumber === 1 ? data : [...products, ...data]);
      })
      .catch((err) => {
        console.error("Failed to fetch products: ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams, pageNumber]);

  return (
    <>
      <FilterSection sortOptions={sortOptions} filterOptions={filterOptions} />
      <ProductGrid products={products} loading={loading} />
      <div className="w-full flex gap-4 justify-center items-center">
        <button
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-100"
          onClick={() => {
            setPageNumber(() => pageNumber + 1);
          }}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Products;
