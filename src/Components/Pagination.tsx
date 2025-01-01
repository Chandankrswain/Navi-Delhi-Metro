import { useState } from "react";

interface DataType {
  count?: number;
}

interface Props {
  data?: DataType;
  setPageNumber: (page: number) => Promise<void>; // Ensure the API call is async
}

const Pagination = ({ data, setPageNumber }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state
  const totalPages = data?.count || 1; // Total pages from the data
  const maxPageButtons = 5; // Maximum number of page buttons to display

  const handlePageChange = async (page: number) => {
    setLoading(true); // Start loading
    try {
      await setPageNumber(page + 1); // API call with 1-based page number
      setCurrentPage(page); // Update the current page after successful API call
    } catch (error) {
      console.error("Failed to fetch page:", error); // Handle any errors
    } finally {
      setLoading(false); // End loading
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      handlePageChange(currentPage + 1);
    }
  };

  const startPage = Math.max(
    0,
    Math.min(
      totalPages - maxPageButtons,
      currentPage - Math.floor(maxPageButtons / 2)
    )
  );
  const endPage = Math.min(totalPages, startPage + maxPageButtons);

  return (
    <div className="text-white flex flex-col items-center gap-4">
      {/* Loading Indicator */}
      {loading && <div className="text-blue-500">Loading...</div>}

      <div className="flex gap-2 items-center">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="bg-gray-800 px-4 py-2 rounded disabled:opacity-50"
          disabled={currentPage === 0 || loading}
        >
          Previous
        </button>

        {/* Page Buttons */}
        {Array.from({ length: endPage - startPage }, (_, index) => {
          const page = startPage + index;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded transition-colors duration-200 ${
                currentPage === page
                  ? "bg-blue-500 text-white" // Active button style
                  : "bg-gray-800 text-gray-200 hover:bg-gray-600"
              }`}
              disabled={loading} // Disable during loading
            >
              {page + 1}
            </button>
          );
        })}

        {/* Ellipsis for Overflow */}
        {endPage < totalPages && <span className="px-2">...</span>}

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-gray-800 px-4 py-2 rounded disabled:opacity-50"
          disabled={currentPage === totalPages - 1 || loading}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
