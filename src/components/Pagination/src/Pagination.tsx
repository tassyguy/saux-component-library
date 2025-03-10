import React from 'react';
import './Pagination.css';

export interface PaginationProps {
  /** The current active page */
  currentPage: number;
  /** Total number of pages available */
  totalPages: number;
  /** Callback function to change the page */
  onPageChange: (page: number) => void;
  /** Custom class name for additional styling */
  className?: string;
  /** Inline styles for the pagination component */
  style?: React.CSSProperties;
  /** Accessible label for the previous button */
  prevAriaLabel?: string;
  /** Accessible label for the next button */
  nextAriaLabel?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  style,
  prevAriaLabel = 'Previous page',
  nextAriaLabel = 'Next page',
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
    <div className={`pagination ${className}`} style={style}>
      <button
        className="pagination__button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label={prevAriaLabel}
      >
        &laquo;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__button ${page === currentPage ? 'active' : ''}`}
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
        aria-label={nextAriaLabel}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
