import FilterSection from "../components/filter/FilterSection";
import { useEffect, useReducer } from "react";
import { productInterface } from "../utility/productsUtils";
import ProductGrid from "../components/product/ProductGrid";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/filter/Pagination";

const initialState = {
  loading: true,
  products: [],
};

function reducer(
  state: { loading: boolean; products: productInterface[] | [] },
  action: { type: string; payload: productInterface[] | [] }
) {
  switch (action.type) {
    case "FETCH-SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };
    case "FETCH-FAIL":
      return {
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
}

const Products = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch("http://localhost:5000/products?" + searchParams.toString())
      .then((data) => {
        data.json().then((data) => {
          dispatch({
            type: "FETCH-SUCCESS",
            payload:
              searchParams.get("pageNumber") === "1"
                ? data
                : [...state.products, ...data],
          });
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH-FAIL", payload: [] });
        console.warn("Failed to fetch products: ", err);
      });
  }, [searchParams]);

  return (
    <>
      <div className="flex flex-col gap-16 relative -top-24">
        <FilterSection />
        <ProductGrid products={state.products} loading={state.loading} />
        <Pagination />
      </div>
    </>
  );
};

export default Products;
