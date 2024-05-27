import makeTitleFromSlug from "../../utility/makeTitleFromSlug";

const FilterSelect = ({
  title,
  options,
  onChange,
  searchParams,
}: {
  title: string;
  options: string[];
  onChange: any;
  searchParams: string | null;
}) => {
  return (
    <select
      className=" shadow-md flex-grow h-10 rounded-full px-4 bg-gray-200 border-none focus:outline outline-lime-500"
      onChange={onChange}
      value={searchParams || undefined}
    >
      <option value="">{title}</option>

      {options &&
        options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {makeTitleFromSlug(option)}
          </option>
        ))}
    </select>
  );
};

export default FilterSelect;
