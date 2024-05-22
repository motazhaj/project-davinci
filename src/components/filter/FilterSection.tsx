import InputField from "./InputField";
import FilterSelect from "./FilterSelect";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FilterSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOptions, setFilterOptions] = useState<{ sortValues: string[]; filterValues: string[] } | null>(
    null
  );

  useEffect(() => {
    fetch("http://localhost:5000/sort-options")
      .then((data) => data.json())
      .then((data) => setFilterOptions(data))
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
          options={filterOptions?.sortValues || []}
          searchParams={searchParams.get("sort")}
          onChange={(e: any) => {
            searchParams.set("sort", e.target.value);
            searchParams.set("pageNumber", "1");
            setSearchParams(searchParams);
          }}
        />

        <FilterSelect
          title={"Filter By:"}
          options={filterOptions?.filterValues || []}
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
