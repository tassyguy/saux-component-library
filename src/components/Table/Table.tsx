import React from "react";

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2"
              }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
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
