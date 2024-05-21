import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="w-full flex gap-4 justify-center items-center">
      <button
        className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-100"
        onClick={() => {
          searchParams.set(
            "pageNumber",
            searchParams.get("pageNumber") ? (Number(searchParams.get("pageNumber")) + 1).toString() : "2"
          );
          setSearchParams(searchParams);
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default Pagination;
