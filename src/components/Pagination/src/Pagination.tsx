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
  showFirstLast?: boolean; // NEW
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
  const [currentChunk, setCurrentChunk] = useState(0); // NEW

  const pagesPerChunk = maxVisiblePages;
  const totalChunks = Math.ceil(totalPages / pagesPerChunk);

  useEffect(() => {
    if (typeof currentPage === 'number') {
      setInternalPage(currentPage);
      setCurrentChunk(Math.floor((currentPage - 1) / pagesPerChunk));
    }
  }, [currentPage, pagesPerChunk]);

  const isControlled = typeof currentPage === 'number';
  const page = isControlled ? currentPage! : internalPage;

  const changePage = (newPage: number) => {
    if (!isControlled) setInternalPage(newPage);
    onPageChange?.(newPage);
  };

  const handlePrevious = () => {
    if (currentChunk > 0) {
      const newChunk = currentChunk - 1;
      setCurrentChunk(newChunk);
      const firstPageInChunk = newChunk * pagesPerChunk + 1;
      changePage(firstPageInChunk);
    }
  };

  const handleNext = () => {
    if (currentChunk < totalChunks - 1) {
      const newChunk = currentChunk + 1;
      setCurrentChunk(newChunk);
      const firstPageInChunk = newChunk * pagesPerChunk + 1;
      changePage(firstPageInChunk);
    }
  };

  const handleFirst = () => {
    setCurrentChunk(0);
    changePage(1);
  };

  const handleLast = () => {
    const lastChunk = totalChunks - 1;
    setCurrentChunk(lastChunk);
    const firstPage = lastChunk * pagesPerChunk + 1;
    changePage(firstPage);
  };

  const getVisiblePages = (): number[] => {
    const start = currentChunk * pagesPerChunk + 1;
    const end = Math.min(start + pagesPerChunk - 1, totalPages);

    const pages: number[] = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
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

      {visiblePages.map((p) => (
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
