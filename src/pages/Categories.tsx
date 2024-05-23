import { useEffect, useState } from "react";
import CategoryCard, { categoryInterface } from "../components/product/CategoryCard";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<categoryInterface[] | []>([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((data) => data.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.warn("Failed to fetch filter options: ", err))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <section>
      <div className="relative w-screen max-w-screen-lg mx-auto mt-16">
        <h1 className="text-3xl font-bold px-4">Categories</h1>
        <ul className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-16">
          {loading ? (
            <LoadingSpinner />
          ) : (
            categories.map((item) => <CategoryCard key={item.id} category={item} />)
          )}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
