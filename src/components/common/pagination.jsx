import React from "react";

const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item active">
          <a href="." className="page-link">
            1
          </a>
        </li>
        <li className="page-item">
          <a href="." className="page-link">
            2
          </a>
        </li>
        <li className="page-item">
          <a href="." className="page-link">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
