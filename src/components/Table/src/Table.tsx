import React from 'react';
import './Table.css';

export interface Column<T extends Record<string, unknown> = Record<string, unknown>> {
  header: string;
  accessor: keyof T & string;
}

export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

function Table<T extends Record<string, unknown>>({
  columns,
  data,
  className = '',
}: TableProps<T>) {
  if (!data || data.length === 0) {
    return <p className={`table-empty ${className}`.trim()}>No data available.</p>;
  }

  return (
    <table className={`table ${className}`.trim()}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              // Row values are typed `unknown` at the generic boundary;
              // consumers are responsible for ensuring cells are ReactNode-compatible.
              <td key={colIndex}>{row[col.accessor] as React.ReactNode}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
