import { productInterface } from "../../utility/productsUtils";
import ProductCard from "../product/ProductCard";
import { useEffect, useState } from "react";
import LoadingSpinner from "../shared/LoadingSpinner";

const NewArrivals = () => {
  const [loading, setLoading] = useState(true);
  const [newArrivals, setNewArrivals] = useState<productInterface[] | []>([]);

  useEffect(() => {
    setLoading(false);
    fetch("http://localhost:5000/new-arrivals")
      .then((data) => data.json().then((data) => setNewArrivals(data)))
      .catch((err) =>
        console.warn("Something went wrong when fetching new arrivals: ", err)
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative w-screen max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl font-bold">New Arrivals</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ul className="flex gap-4 justify-between mt-4 overflow-x-scroll">
          {newArrivals.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default NewArrivals;
