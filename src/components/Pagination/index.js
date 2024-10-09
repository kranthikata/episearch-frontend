import React from "react";
import "./index.css";

const Pagination = ({ total, page, setPage }) => {
  const totalPages = Math.ceil(total / 10);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="pagination">
      <button className="previous-btn" onClick={prevPage} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={nextPage}
        className="next-btn"
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
