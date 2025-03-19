import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex  items-center mt-4 justify-end w-full">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-xl transition-all duration-300 bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white text-[11px] ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:opacity-90"
        }`}
      >
        Previous
      </button>

      <span className="text-gray-500 w-28 ml-6">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`px-8 py-2 rounded-xl transition-all duration-300 bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white text-[11px] ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:opacity-90"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
