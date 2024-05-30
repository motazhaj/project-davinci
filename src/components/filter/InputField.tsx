const InputField = ({ onChange, searchParams }: { onChange: any; searchParams: string }) => {
  return (
    <input
      className="border shadow-md w-2/3 h-10 rounded-full px-4 border-gray-200 focus:outline outline-primary"
      placeholder="Search Products"
      onChange={onChange}
      value={searchParams || ""}
    />
  );
};

export default InputField;
