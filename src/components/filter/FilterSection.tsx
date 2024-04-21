import InputField from "./InputField";
import FilterSelect from "./FilterSelect";
import { useSearchParams } from "react-router-dom";

const FilterSection = ({
  sortOptions,
  filterOptions,
}: {
  sortOptions: string[];
  filterOptions: string[];
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <section className="w-full pt-32 pb-8 shadow-md bg-gray-50">
      <div className="w-full max-w-screen-lg px-4 mx-auto flex gap-2 z-50">
        <InputField
          searchParams={searchParams.get("search") || ""}
          onChange={(e: any) => {
            searchParams.set("search", e.target.value);
            setSearchParams(searchParams);
          }}
        />

        <FilterSelect
          title={"Sort By:"}
          options={sortOptions}
          searchParams={searchParams.get("sort")}
          onChange={(e: any) => {
            searchParams.set("sort", e.target.value);
            setSearchParams(searchParams);
          }}
        />

        <FilterSelect
          title={"Filter By:"}
          options={filterOptions}
          searchParams={searchParams.get("filter")}
          onChange={(e: any) => {
            searchParams.set("filter", e.target.value);
            setSearchParams(searchParams);
          }}
        />
      </div>
    </section>
  );
};

export default FilterSection;
