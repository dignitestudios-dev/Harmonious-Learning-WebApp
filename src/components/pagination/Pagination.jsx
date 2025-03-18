import React from "react";
import { IconSquareChevronRight } from "@tabler/icons-react";

const Pagination = ({ currentPage, setCurrentPage, totalPages, setUpdate }) => {
  console.log("🚀 ~ totalPages:", totalPages);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setUpdate((prev) => !prev);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setUpdate((prev) => !prev);
    }
  };

  return (
    <div className="flex  items-center mt-4 justify-end w-full">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-xl transition-all duration-300 bg-[#199BD5] text-white text-[11px] ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#199BD3]"
        }`}
      ></button>
      Previous <IconSquareChevronRight stroke={2} />
      <span className="text-gray-500 w-20 ml-6">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`px-8 py-2 rounded-xl transition-all duration-300 bg-[#6490bc] text-white text-[11px] ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#199BD5]"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
