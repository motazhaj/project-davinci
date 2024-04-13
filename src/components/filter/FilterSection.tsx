import InputField from "./InputField";
import FilterSelect from "./FilterSelect";

const FilterSection = ({ sortOptions, filterOptions }: { sortOptions: any; filterOptions: any }) => {
  return (
    <section className="w-full pt-32 pb-8 shadow-md bg-gray-50">
      <div className="w-full max-w-screen-lg px-4 mx-auto flex gap-2 z-50">
        <InputField />
        <FilterSelect title={"Sort By:"} options={sortOptions} />
        <FilterSelect title={"Filter By:"} options={filterOptions} />
      </div>
    </section>
  );
};

export default FilterSection;
