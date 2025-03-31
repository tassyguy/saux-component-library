import React, { useEffect, useState } from 'react';
import './Pagination.css';

export interface PaginationProps {
  currentPage?: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
  style?: React.CSSProperties;
  prevAriaLabel?: string;
  nextAriaLabel?: string;
  maxVisiblePages?: number; // NEW
  showFirstLast?: boolean;  // NEW
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  style,
  prevAriaLabel = 'Previous page',
  nextAriaLabel = 'Next page',
  maxVisiblePages = 5,
  showFirstLast = true,
}) => {
  const [internalPage, setInternalPage] = useState(currentPage ?? 1);

  useEffect(() => {
    if (typeof currentPage === 'number') {
      setInternalPage(currentPage);
    }
  }, [currentPage]);

  const isControlled = typeof currentPage === 'number';
  const page = isControlled ? currentPage! : internalPage;

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

  const handleFirst = () => changePage(1);
  const handleLast = () => changePage(totalPages);

  const getVisiblePages = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, page - half);
    let end = Math.min(totalPages, page + half);

    if (end - start + 1 < maxVisiblePages) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisiblePages - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`pagination ${className}`.trim()} style={style}>
      {showFirstLast && (
        <button
          className="pagination__button"
          onClick={handleFirst}
          disabled={page === 1}
          aria-label="First page"
        >
          First
        </button>
      )}

      <button
        className="pagination__button"
        onClick={handlePrevious}
        disabled={page <= 1}
        aria-label={prevAriaLabel}
      >
        &laquo;
      </button>

      {visiblePages.map((p, idx) =>
        p === '...' ? (
          <span key={`ellipsis-${idx}`} className="pagination__ellipsis">
            …
          </span>
        ) : (
          <button
            key={p}
            className={`pagination__button ${p === page ? 'active' : ''}`}
            onClick={() => changePage(p as number)}
            aria-label={`Page ${p}`}
          >
            {p}
          </button>
        )
      )}

      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={page >= totalPages}
        aria-label={nextAriaLabel}
      >
        &raquo;
      </button>

      {showFirstLast && (
        <button
          className="pagination__button"
          onClick={handleLast}
          disabled={page === totalPages}
          aria-label="Last page"
        >
          Last
        </button>
      )}
    </div>
  );
};

export default Pagination;
