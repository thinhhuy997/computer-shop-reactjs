import React from "react";
import { Link } from "react-router-dom";
import "./mainCollection.css";
const MainCollection = () => {
  return (
    <>
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col d-flex align-items-center justify-content-between"
              style={{ height: "50px" }}
            >
              <h5 className="m-0">9 sản phẩm</h5>
              <div
                className="collection-filter d-flex align-items-center"
                style={{ width: "250px" }}
              >
                <span className="me-3" style={{ fontSize: "14px" }}>
                  Sắp xếp theo:
                </span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  style={{ fontSize: "14px", maxWidth: "125px" }}
                >
                  <option selected>Tên: A-Z</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-white">
          <div className="row row-cols-2 row-cols-md-4 row-cols-xl-5">
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/amd-a4-3300-600x600_23b1704698a64c23a572cf49147d256a.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3300 (2.50GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>110,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/cpu-amd-a4-3400_14401cf7583544e8b0e747fe02a94d55.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3400 (2.70GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>320,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/amd-a4-3300-600x600_23b1704698a64c23a572cf49147d256a.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3300 (2.50GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>110,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/cpu-amd-a4-3400_14401cf7583544e8b0e747fe02a94d55.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3400 (2.70GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>320,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/amd-a4-3300-600x600_23b1704698a64c23a572cf49147d256a.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3300 (2.50GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>110,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/cpu-amd-a4-3400_14401cf7583544e8b0e747fe02a94d55.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3400 (2.70GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>320,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/amd-a4-3300-600x600_23b1704698a64c23a572cf49147d256a.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3300 (2.50GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>110,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/cpu-amd-a4-3400_14401cf7583544e8b0e747fe02a94d55.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3400 (2.70GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>320,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/amd-a4-3300-600x600_23b1704698a64c23a572cf49147d256a.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3300 (2.50GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>110,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="product-inner position-relative border collection-item">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#">
                    <img
                      src="https://product.hstatic.net/200000420363/product/cpu-amd-a4-3400_14401cf7583544e8b0e747fe02a94d55.jpg"
                      alt="product thumbnail"
                      style={{ width: "100%", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details pt-2 pb-3">
                  <Link
                    href="#"
                    className="text-decoration-none fw-normal text-center"
                  >
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                      }}
                      className="m-0 text-dark collection-item-name"
                    >
                      CPU AMD A4 3400 (2.70GHz, 2 Cores 2 Threads, FM1) TRAY
                    </h2>
                  </Link>
                  <div
                    className="product-price-box mt-3 mb-1 text-danger"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    <span>320,000đ</span>
                  </div>
                </div>
                {/* icon cart */}
                <button
                  type="button"
                  className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                  data-bs-container="body"
                >
                  <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                </button>
                {/* text bubble */}
                <div
                  class="speech-bubble position-absolute start-50 translate-middle"
                  contenteditable
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              {/* show more btn */}
              <button
                type="button"
                className="btn bg-white border showmore-btn mt-3 mb-4"
                style={{ width: "320px", fontSize: "13.5px", fontWeight: 400 }}
              >
                Xem thêm 68
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCollection;
