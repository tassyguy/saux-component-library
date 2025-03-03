import React from "react";
import "./Pagination.css";

export interface PaginationProps {
  /** The current active page */
  currentPage: number;
  /** Total number of pages available */
  totalPages: number;
  /** Callback function to change the page */
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null; // No pagination needed for one or fewer pages

  // Generate an array of page numbers (1 to totalPages)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        &laquo;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__button ${
            page === currentPage ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
          aria-label={`Page ${page}`}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
