import React from "react";
import { useTheme } from "../Theme/ThemeProvider";
import "./Table.css";

export interface Column {
  header: string;
  accessor: string;
}

export interface TableProps {
  columns: Column[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const theme = useTheme(); // Get theme values

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <table className="table" style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} style={{ borderColor: theme.borderColor }}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex} style={{ borderColor: theme.borderColor }}>
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;