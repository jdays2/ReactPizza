import styles from "./Pagination.module.scss";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  setCurrendPage: any;
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
