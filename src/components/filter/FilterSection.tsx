import InputField from "./InputField";
import FilterSelect from "./FilterSelect";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FilterSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOptions, setFilterOptions] = useState<string[] | []>([]);
  const sortOptions = [
    "newest",
    "oldest",
    "price-low-to-high",
    "price-high-to-low",
    "a-to-z",
    "z-to-a",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((data) => data.json())
      .then((data) => {
        const categories = data.map((item: any) => {
          return item.slug;
        });
        setFilterOptions(categories);
      })
      .catch((err) => console.warn("Failed to fetch filter options: ", err));
  }, []);

  return (
    <section className="w-full pt-32 pb-8 shadow-md bg-gray-50">
      <div className="w-full max-w-screen-lg px-4 mx-auto flex gap-2 z-50">
        <InputField
          searchParams={searchParams.get("search") || ""}
          onChange={(e: any) => {
            searchParams.set("search", e.target.value);
            searchParams.set("pageNumber", "1");
            setSearchParams(searchParams);
          }}
        />

        <FilterSelect
          title={"Sort By:"}
          options={sortOptions}
          searchParams={searchParams.get("sort")}
          onChange={(e: any) => {
            searchParams.set("sort", e.target.value);
            searchParams.set("pageNumber", "1");
            setSearchParams(searchParams);
          }}
        />

        <FilterSelect
          title={"Filter By:"}
          options={filterOptions}
          searchParams={searchParams.get("filter")}
          onChange={(e: any) => {
            searchParams.set("filter", e.target.value);
            searchParams.set("pageNumber", "1");
            setSearchParams(searchParams);
          }}
        />
      </div>
    </section>
  );
};

export default FilterSection;
