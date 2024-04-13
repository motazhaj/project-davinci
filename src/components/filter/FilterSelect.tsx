const FilterSelect = ({ title, options, onChange }: { title: string; options?: any; onChange?: any }) => {
  return (
    <select
      className=" shadow-md flex-grow h-10 rounded-full px-4 bg-gray-200 border-none focus:outline outline-lime-500"
      onChange={onChange}
    >
      <option value="">{title}</option>

      {options &&
        options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
    </select>
  );
};

export default FilterSelect;
