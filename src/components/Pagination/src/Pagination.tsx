import React from 'react';
import './Pagination.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  style?: React.CSSProperties;
  prevAriaLabel?: string;
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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      console.log(`Going to previous page: ${currentPage - 1}`); // Debug
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      console.log(`Going to next page: ${currentPage + 1}`); // Debug
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`pagination ${className}`.trim()} style={style}>
      <button
        className="pagination__button"
        onClick={handlePrevious}
        disabled={currentPage <= 1}
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
        disabled={currentPage >= totalPages}
        aria-label={nextAriaLabel}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
