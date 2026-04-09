import React from "react";

const AccordionTable = ({ title, columns = [], rows = [], defaultOpen = false }) => {
  return (
    <details className="acc" open={defaultOpen}>
      <summary className="acc-sum">
        <span className="acc-title">{title}</span>
      </summary>

      <div className="acc-content">
        <div className="table-wrapper">
          <table className="universal-table">
            <thead>
              <tr>
                <th colSpan={columns.length}>{title}</th>
              </tr>
              {columns.length > 0 && (
                <tr>
                  {columns.map((col, i) => (
                    <th key={i}>{col}</th>
                  ))}
                </tr>
              )}
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </details>
  );
};

export default AccordionTable;
