import { useEffect, useState } from "react";
import CategoryCard, { categoryInterface } from "../product/CategoryCard";
import LoadingSpinner from "../shared/LoadingSpinner";

const CategoriesSection = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<categoryInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((data) => data.json().then((data) => setCategories(data)))
      .catch((err) =>
        console.warn("Something went wrong when fetching categories: ", err)
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full bg-gray-100 py-6 shadow-md">
      <div className="relative w-screen max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold px-4">Categories</h1>
        <ul className="flex gap-4 justify-between my-4 overflow-x-scroll mx-4">
          {loading ? (
            <LoadingSpinner />
          ) : (
            categories.map((item) => <CategoryCard key={item.id} category={item} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesSection;
