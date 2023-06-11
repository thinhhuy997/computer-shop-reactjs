import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./paginationButtonList.css";
import { Link } from "react-router-dom";

const PaginationButtonList = (props) => {
  const { pageNumber, q, currentPage, setCurrentPage } = props;

  const paginateURLs = [];

  for (let i = 0; i < pageNumber; i++) {
    paginateURLs.push("");
  }

  return (
    <>
      {/* paginiation btns */}
      <Link
        to={`?q=${q}&page=${currentPage + 1}`}
        className={
          currentPage !== 1 ? `search-page--pagination-button` : `d-none`
        }
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        Trước
      </Link>
      {/* {paginationButtons &&
        paginationButtons.map((paginationButton, index) => paginationButton)} */}
      {paginateURLs.map((paginateUrl, index) => {
        if (currentPage === index + 1) {
          return (
            <Link
              to={`?q=${q}&page=${index + 1}`}
              className="search-page--pagination-button active"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Link>
          );
        } else {
          return (
            <Link
              to={`?q=${q}&page=${index + 1}`}
              className="search-page--pagination-button"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Link>
          );
        }
      })}
      <Link
        to={`?q=${q}&page=${currentPage + 1}`}
        className={
          currentPage !== paginateURLs.length
            ? `search-page--pagination-button`
            : `d-none`
        }
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Sau
      </Link>
    </>
  );
};

export default PaginationButtonList;
