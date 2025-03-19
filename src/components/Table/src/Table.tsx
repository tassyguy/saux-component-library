import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Table.css';

export interface Column {
  header: string;
  accessor: string;
}

export interface TableProps {
  columns: Column[];
  data: any[];
  /** Optional additional CSS classes */
  className?: string;
}

const Table: React.FC<TableProps> = ({ columns, data, className = '' }) => {
  const { theme } = useTheme(); // Get theme values

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
              <td key={colIndex}>{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
