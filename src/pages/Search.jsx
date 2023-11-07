import React, { useState, useEffect } from "react";
import HeaderPage from "../components/headerPage/HeaderPage";
import MainMenu from "../components/mainMenu/MainMenu";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Footer from "../components/footer/Footer";
import MainSearch from "../components/mainSearch/MainSearch";
import PaginationButtonList from "../components/paginationButtonList/PaginationButtonList";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [productQuantity, setProductQuanity] = useState(0);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(20);
  const [remainQuantity, setRemainQuantity] = useState(0);
  const [searchParam, setSearchParam] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParam.get("page") === null ? 1 : searchParam.get("page")
  );
  const [nextLink, setNextLink] = useState(null);

  const q = searchParam.get("q");

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/product-multiple-create-page-pagination/?search=${q}&page=${currentPage}`,
    })
      .then((res) => {
        setNextLink(res.data.next);
        setProductQuanity(res.data.count);
        setProducts(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, [currentPage]);

  const calculatePagesCount = (pageSize, totalCount) => {
    // we suppose that if we have 0 items we want 1 empty page
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  };

  return (
    <>
      {/* <HeaderPage /> */}
      <MainMenu />
      <Breadcrumb
        breadcrumbContents={[`Tìm kiếm: kết quả tìm kiếm của "${q}"`]}
      />
      <MainSearch
        products={products}
        setProducts={setProducts}
        productQuantity={productQuantity}
        offset={offset}
        setOffset={setOffset}
        remainQuantity={remainQuantity}
        setRemainQuantity={setRemainQuantity}
        nextLink={nextLink}
        setNextLink={setNextLink}
        queryParam={q}
      />
      {/* paginate btns */}
      <div className="container mt-2 pb-2">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-end">
            <PaginationButtonList
              pageNumber={Math.floor((productQuantity + 20 - 1) / 20)}
              q={q}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
