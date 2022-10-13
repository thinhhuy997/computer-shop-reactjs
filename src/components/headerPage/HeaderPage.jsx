import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { thousands_separators } from "../utils";

const HeaderPage = () => {
  const [searchParam, setSearchParam] = useState("");
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    if (searchParam != "") {
      axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/product-list-create/?search=${searchParam}&limit=5`,
      })
        .then((res) => {
          setProducts(res.data.results);
          setProductCount(res.data.count);
        })
        .catch((e) => console.dir(e));
    } else {
      setProducts([]);
      setProductCount(0);
    }
  }, [searchParam]);

  // const handleSearchOnchange = (searchParam) => {
  //   setSearchParam(searchParam);
  //   axios({
  //     method: "GET",
  //     url: `http://127.0.0.1:8000/api/product-list-create/?search=${searchParam}&limit=5`,
  //   })
  //     .then((res) => {
  //       setProducts(res.data.results);
  //       setProductCount(res.data.count);
  //     })
  //     .catch((e) => console.dir(e));
  // };

  const handleNavigateToDetailProduct = (slug) => {
    navigate(`/product/${slug}}`, { replace: true });
  };

  return (
    <>
      {/* desktop */}
      <div className="container d-none d-md-block">
        <div className="row pt-4 pb-4">
          <div className="col-lg-9 col-md-5 d-flex align-items-center">
            {/* brand logo */}
            <Link to="/">
              <img
                src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2020/05/cropped-STAR-DEN-DO-02-10.png"
                alt="brand logo"
                style={{ width: "205.5px", height: "auto" }}
                className="ms-5"
              />
            </Link>

            {/* list category icon */}
            <svg
              type="button"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="ms-3 me-5 d-none d-lg-flex"
              style={{ width: "35px", height: "30px", color: "red" }}
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#4A5568"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            {/* search bar */}
            <div
              className="input-group d-none d-lg-flex"
              style={{ width: "600px", height: "42px" }}
            >
              <input
                type="search"
                className="form-control rounded dropdown-toggle"
                placeholder="Bạn tìm gì..."
                aria-label="Search"
                aria-describedby="search-addon"
                style={{ fontSize: "14px" }}
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-danger pe-4"
                style={{ fontWeight: "500", fontSize: "14px" }}
              >
                <i class="fa-solid fa-magnifying-glass pe-2"></i>
                Tìm kiếm
              </button>
              <ul
                className="dropdown-menu w-100 shadow border-1 py-0 rounded-0"
                aria-labelledby="dropdownMenuButton1"
              >
                {products &&
                  products.map((product) => (
                    <li
                    // onClick={() =>
                    //   handleNavigateToDetailProduct(product.slug)
                    // }
                    >
                      <Link
                        to={`product/${product.slug}`}
                        className="d-flex dropdown-item p-0 py-1"
                      >
                        <img
                          src={product?.image_urls[0] && product.image_urls[0]}
                          alt="test"
                          style={{ width: "45px", height: "45px" }}
                          className="me-1"
                        />
                        <div
                          className="searching-item-text-group text-decoration-none"
                          style={{ fontSize: "13px" }}
                        >
                          <p className="p-0 m-0 text-dark pb-1">
                            {product.name}
                          </p>
                          <p className="p-0 m-0 text-danger">
                            {thousands_separators(product.price)}đ
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                <li
                  className={
                    productCount !== 0
                      ? `test text-center py-2 border-top border-1`
                      : `d-none`
                  }
                >
                  <Link
                    to={`/search?q=${searchParam}`}
                    className="text-decoration-none text-dark"
                  >
                    <span style={{ fontSize: "13px" }}>
                      Xem thêm {productCount} sản phẩm
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-7 d-flex align-items-center">
            {/* icon */}
            {/* <i
              style={{ transform: "scaleX(-1)" }}
              class="cil-phone fs-2 d-none d-lg-block"
            ></i> */}
            {/* contact */}
            {/* <div className="mx-3 d-none d-md-block">
              <p className="m-0 text-muted" style={{ fontSize: "14px" }}>
                Hotline
              </p>
              <p className="m-0 fw-bold">1900 0243 (8:30 - 21:00)</p>
            </div> */}

            {/* cart */}
            <i class="cib-shopify fs-1 mx-5 position-relative">
              <span
                class="position-absolute rounded-circle bg-danger text-white fw-bold"
                style={{
                  fontSize: "12px",
                  width: "18px",
                  height: "18px",
                  padding: "0 5px",
                  top: 28,
                  left: 25,
                  textAlign: "center",
                  lineHeight: "15px",
                }}
              >
                0
              </span>
            </i>

            {/* login and register */}
            <div className="d-flex align-items-center">
              <i class="cil-user me-2" style={{ fontSize: "38px" }}></i>
              <div
                className="d-none d-xl-flex flex-column"
                style={{ fontSize: "14px", lineHeight: "1.2" }}
              >
                <Link
                  to="/login-signup"
                  className="text-decoration-none text-dark fw-bold"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/login-signup"
                  className="text-decoration-none text-dark fw-bold"
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-md-block d-lg-none">
          <div className="col-12 d-flex justify-content-center">
            {/* list category icon */}
            <svg
              type="button"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="ms-3 me-5"
              style={{ width: "35px", height: "30px", color: "red" }}
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#4A5568"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            {/* search bar */}
            <div
              className="input-group"
              style={{ width: "347px", height: "42px" }}
            >
              <input
                type="search"
                className="form-control rounded"
                placeholder="Bạn muốn tìm sản phẩm nào..."
                aria-label="Search"
                aria-describedby="search-addon"
                style={{ fontSize: "14px" }}
              />
              <button
                type="button"
                className="btn btn-danger px-4"
                style={{ fontWeight: "500", fontSize: "14px" }}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile*/}
      <div className="container d-sm-block d-md-none">
        <div className="row pt-4">
          <div className="col-12 d-flex align-items-center justify-content-between">
            {/* brand logo */}
            <img
              src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2020/05/cropped-STAR-DEN-DO-02-10.png"
              alt="brand logo"
              style={{ width: "216px", height: "90px" }}
            />
            {/* cart and account */}
            <div>
              {/* cart */}
              <i class="cib-shopify fs-1 me-3 position-relative">
                <span
                  class="position-absolute rounded-circle bg-danger text-white fw-bold"
                  style={{
                    fontSize: "12px",
                    width: "18px",
                    height: "18px",
                    padding: "0 5px",
                    top: 20,
                    left: 18,
                    textAlign: "center",
                    lineHeight: "15px",
                  }}
                >
                  0
                </span>
              </i>
              {/* account */}
              <a href="#" className="text-decoration-none text-dark">
                <i class="cil-user me-2" style={{ fontSize: "25px" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 d-flex justify-content-center">
            {/* search bar */}
            <div
              className="input-group mt-3"
              style={{ width: "347px", height: "42px" }}
            >
              <input
                type="search"
                className="form-control rounded-0"
                placeholder="Bạn muốn tìm sản phẩm nào..."
                aria-label="Search"
                aria-describedby="search-addon"
                style={{ fontSize: "14px" }}
              />
              <button
                type="button"
                className="btn btn-danger rounded-0"
                style={{ width: "60px" }}
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
