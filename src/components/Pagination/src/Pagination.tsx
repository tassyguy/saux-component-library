import React, { useState, useEffect } from 'react';
import './Pagination.css';

export interface PaginationProps {
  /** Current page number (1-based). If not provided, component will manage its own state */
  currentPage?: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange?: (page: number) => void;
  /** Optional class name */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
  /** Aria-label for previous button */
  prevAriaLabel?: string;
  /** Aria-label for next button */
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
  const [internalPage, setInternalPage] = useState(currentPage ?? 1);

  // Sync internal state if a controlled currentPage is passed
  useEffect(() => {
    if (typeof currentPage === 'number') {
      setInternalPage(currentPage);
    }
  }, [currentPage]);

  const isControlled = typeof currentPage === 'number';
  const page = isControlled ? currentPage! : internalPage;

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const changePage = (newPage: number) => {
    if (!isControlled) setInternalPage(newPage);
    onPageChange?.(newPage);
  };

  const handlePrevious = () => {
    if (page > 1) changePage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) changePage(page + 1);
  };

  return (
    <div className={`pagination ${className}`.trim()} style={style}>
      <button
        className="pagination__button"
        onClick={handlePrevious}
        disabled={page <= 1}
        aria-label={prevAriaLabel}
      >
        &laquo;
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={`pagination__button ${p === page ? 'active' : ''}`}
          onClick={() => changePage(p)}
          aria-label={`Page ${p}`}
        >
          {p}
        </button>
      ))}
      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={page >= totalPages}
        aria-label={nextAriaLabel}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
