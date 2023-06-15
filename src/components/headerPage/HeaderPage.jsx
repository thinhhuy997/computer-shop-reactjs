import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { thousands_separators } from "../utils";
import CartContext from "../../contexts/CartContext";
import "./headerPage.css";

const HeaderPage = () => {
  const [searchParam, setSearchParam] = useState("");
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  let { cartItemQuantity, setCartItemQuantity } = useContext(CartContext);

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

  useEffect(() => {
    if (!localStorage.getItem("product_ids")) {
      setCartItemQuantity(0);
    } else {
      let quantity = localStorage.getItem("product_ids").split(",").length;
      setCartItemQuantity(quantity);
    }
  }, [cartItemQuantity]);

  // useEffect(() => {
  //   if (localStorage.getItem("product_ids") !== null) {
  //     let product_ids = localStorage.getItem("product_ids").split(",");

  //   }
  // });

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
          <div className="col-12 p-0 d-flex align-items-center">
            {/* brand logo */}
            <div className="d-flex justify-content-center brand-logo--wrapper">
              <Link to="/">
                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/logo.png?v=4006"
                  alt="brand logo"
                  className="brand-logo"
                />
              </Link>
            </div>

            {/* search bar */}
            <div className="input-group d-lg-flex header-page--search ms-3">
              <input
                type="search"
                className="form-control rounded dropdown-toggle"
                placeholder="Bạn tìm gì..."
                aria-label="Search"
                aria-describedby="search-addon"
                style={{ fontSize: "14px", backgroundColor: "#EDEDED" }}
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-danger px-3 rounded-end d-flex align-items-center header-page-search-btn"
                style={{ fontWeight: "500", fontSize: "14px" }}
              >
                <i className="fa-solid fa-magnifying-glass header-page-search-btn-icon"></i>
                <span className="d-none d-lg-inline-block header-page-search-btn-text">
                  Tìm kiếm
                </span>
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
            {/* login and register */}
            <div className="d-none d-lg-flex align-items-center ms-4">
              <i class="fa-solid fa-user-large fs-4 me-2 text-secondary"></i>
              <div className="" style={{ fontSize: "12px" }}>
                <Link
                  to="/login-signup"
                  className="text-decoration-none text-dark fw-normal pb-5"
                >
                  Đăng nhập/Đăng ký
                </Link>
                <br />
                <Link
                  to="/login-signup"
                  className="text-decoration-none text-dark fw-bold pt-5"
                >
                  Tài khoản
                  <i
                    class="fa-solid fa-chevron-down ms-1"
                    style={{ fontSize: "10px" }}
                  ></i>
                </Link>
              </div>
            </div>

            {/* cart */}
            <Link
              to={`/cart`}
              className="text-decoration-none text-dark d-flex align-items-center ms-4 cart-icon--wrapper"
            >
              <i className="cib-shopify position-relative cart-icon">
                <span className="position-absolute rounded-circle bg-danger text-white fw-bold cart-icon--quantity">
                  {cartItemQuantity}
                </span>
              </i>
              <span
                style={{ fontSize: "13px" }}
                className="fw-bold ms-2 cart-icon--text"
              >
                Giỏ hàng
              </span>
            </Link>

            {/* menu - md screen*/}
            <Link
              to={"#"}
              className="d-md-flex flex-column d-lg-none ms-4 text-decoration-none align-items-center text-dark"
            >
              {/* menu icon */}
              <i class="fa-solid fa-bars" style={{ fontSize: "25px" }}></i>
              <span style={{ fontSize: "10px" }}>MENU</span>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile*/}
      <div className="container d-sm-block d-md-none p-0 pt-2">
        <div className="col-12 d-flex align-items-center">
          {/* brand logo */}
          <div className="d-flex justify-content-center brand-logo--wrapper">
            <Link to="/">
              <img
                src="//theme.hstatic.net/200000420363/1000874510/14/logo.png?v=4006"
                alt="brand logo"
                className="brand-logo"
              />
            </Link>
          </div>

          {/* search bar */}
          <div className="input-group d-lg-flex header-page--search ms-3">
            <input
              type="search"
              className="form-control rounded dropdown-toggle"
              placeholder="Bạn tìm gì..."
              aria-label="Search"
              aria-describedby="search-addon"
              style={{ fontSize: "14px", backgroundColor: "#EDEDED" }}
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-danger  rounded-end"
              style={{ fontWeight: "500", fontSize: "14px" }}
            >
              <i class="fa-solid fa-magnifying-glass"></i>
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
                        <p className="p-0 m-0 text-dark pb-1">{product.name}</p>
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
          {/* login and register */}
          <div className="d-none d-lg-flex align-items-center ms-4 mt-2">
            <i class="fa-solid fa-user-large fs-4 me-2 text-secondary"></i>
            <div className="" style={{ fontSize: "12px" }}>
              <Link
                to="/login-signup"
                className="text-decoration-none text-dark fw-normal pb-5"
              >
                Đăng nhập/Đăng ký
              </Link>
              <br />
              <Link
                to="/login-signup"
                className="text-decoration-none text-dark fw-bold pt-5"
              >
                Tài khoản
                <i
                  class="fa-solid fa-chevron-down ms-1"
                  style={{ fontSize: "10px" }}
                ></i>
              </Link>
            </div>
          </div>

          {/* cart */}
          <Link
            to={`/cart`}
            className="text-decoration-none text-dark d-flex align-items-center ms-4 cart-icon--wrapper"
          >
            <i className="cib-shopify position-relative cart-icon">
              <span className="position-absolute rounded-circle bg-danger text-white fw-bold cart-icon--quantity">
                {cartItemQuantity}
              </span>
            </i>
          </Link>

          {/* menu - md screen*/}
          <Link
            to={"#"}
            className="d-flex flex-column d-md-none ms-4 text-decoration-none align-items-center text-dark"
          >
            {/* menu icon */}
            <i class="fa-solid fa-bars" style={{ fontSize: "25px" }}></i>
            <span style={{ fontSize: "10px" }}>MENU</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
