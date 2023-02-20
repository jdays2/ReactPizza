import styles from "./Pagination.module.scss";
import React from "react";

import ReactPaginate from "react-paginate";

type PaginationProps = {
  setCurrendPage: (e: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ setCurrendPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={(event) => setCurrendPage(event.selected + 1)}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
