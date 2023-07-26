import React, { useEffect, useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { width } from "@mui/system";
// import "./slider.css";
const Slider = (props) => {
  const screens = props.screens;
  const products = props.items;
  const idControl = props.idControl;
  const loading = props.loading;

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  //   products for xl xxl screen
  const xlScreenProducts_page_1 = products.slice(0, 5);
  const xlScreenProducts_page_2 = products.slice(5, 10);

  const xlScreenProducts_range = [0, 0, 0, 0, 0];
  //   products for lg screen
  const lgScreenProducts_page_1 = products.slice(0, 4);
  const lgScreenProducts_page_2 = products.slice(1, 5);
  //   products for md screen
  const mdScreenProducts_page_1 = products.slice(0, 3);
  const mdScreenProducts_page_2 = products.slice(2, 5);
  //   products for sm screen
  const smScreenProduct_page_1 = products.slice(0, 2);
  const smScreenProduct_page_2 = products.slice(2, 4);
  const smScreenProduct_page_3 = products.slice(3, 5);

  const cartContext = useContext(CartContext);

  const { addDataIntoLocalStorage, setCartItemQuantity, GetCartItemQuantity } =
    cartContext;

  const AddItemIntoCart = (productId) => {
    addDataIntoLocalStorage(productId);
  };

  // <DotLoader color="#36d7b7" />
  return (
    <>
      {/* XL XXL SCREEN - 5 cols*/}
      {screens.includes("xl") && (
        <div className="position-relative d-none d-xl-block p-0">
          <div
            // id="carouselExampleControls"
            id={`${idControl}-col-5`}
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner w-100">
              {/* LG SCREEN - 5 cols*/}
              <div class="carousel-item container active p-0">
                <div className="row ">
                  {loading
                    ? // <DotLoader color="#36d7b7" />
                      xlScreenProducts_range.map((product) => (
                        <div className="col">
                          <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ width: "208px", height: "336px" }}
                          >
                            <DotLoader color="#36d7b7" />
                          </div>
                        </div>
                      ))
                    : xlScreenProducts_page_1 &&
                      xlScreenProducts_page_1.map((product) => (
                        <div className="col">
                          <div className="product-inner position-relative">
                            <div
                              className="product-thumbnail d-flex justify-content-center"
                              style={{ zIndex: -1 }}
                            >
                              <Link
                                to={`/product/${product.slug}`}
                                className="pt-4"
                              >
                                <img
                                  src={
                                    // product.image_urls && product.image_urls[0]
                                    product?.image_urls && product.image_urls[0]
                                  }
                                  alt="product thumbnail"
                                  style={{
                                    width: "192px",
                                    height: "auto",
                                    zIndex: 1,
                                  }}
                                />
                              </Link>
                            </div>
                            <div className="product-details ps-4 pb-3 pt-3">
                              <Link
                                to={`/product/${product.slug}`}
                                className="text-decoration-none fw-normal"
                              >
                                <h2
                                  style={{
                                    fontSize: "13.5px",
                                    fontWeight: 400,
                                    maxWidth: "192px",
                                  }}
                                >
                                  {product.name}
                                </h2>
                              </Link>
                              <div className="product-price-box fw-bold">
                                <span>
                                  {product.price.toLocaleString("en-US")} đ
                                </span>
                              </div>
                            </div>
                            {/* icon cart */}
                            <button
                              type="button"
                              className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                              data-bs-container="body"
                              onClick={() => AddItemIntoCart(product.id)}
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
                      ))}
                </div>
              </div>
              <div class="carousel-item container">
                <div className="row ">
                  {xlScreenProducts_page_2 &&
                    xlScreenProducts_page_2.map((product) => (
                      <div className="col p-0 m-0">
                        <div className="product-inner position-relative">
                          <div
                            className="product-thumbnail d-flex justify-content-center"
                            style={{ zIndex: -1 }}
                          >
                            <Link
                              to={`/product/${product.slug}`}
                              className="pt-4"
                            >
                              <img
                                src={
                                  product?.image_urls && product.image_urls[0]
                                }
                                alt="product thumbnail"
                                style={{
                                  width: "192px",
                                  height: "auto",
                                  zIndex: 1,
                                }}
                              />
                            </Link>
                          </div>
                          <div className="product-details ps-4 pb-3 pt-3">
                            <Link
                              to={`/product/${product.slug}`}
                              className="text-decoration-none fw-normal"
                            >
                              <h2
                                style={{
                                  fontSize: "13.5px",
                                  fontWeight: 400,
                                  maxWidth: "192px",
                                }}
                              >
                                {product.name}
                              </h2>
                            </Link>
                            <div className="product-price-box fw-bold">
                              <span>
                                {product.price.toLocaleString("en-US")} đ
                              </span>
                            </div>
                          </div>
                          {/* icon cart */}
                          <button
                            type="button"
                            className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                            data-bs-container="body"
                            onClick={() => addDataIntoLocalStorage(product.id)}
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
                    ))}
                </div>
              </div>
            </div>
            {/* <!-- slider btn --> */}
            <div
              class="position-absolute start-0 top-50 translate-middle d-xl-block"
              type="button"
              data-bs-target={`#${idControl}-col-5`}
              data-bs-slide="prev"
            >
              <div
                class="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="fas fa-chevron-left text-muted"></i>
              </div>
            </div>

            <div
              class="position-absolute start-100 top-50 translate-middle d-xl-block"
              type="button"
              data-bs-target={`#${idControl}-col-5`}
              data-bs-slide="next"
            >
              <div
                class="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="fas fa-chevron-right text-muted"></i>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LG SCREEN - 4 cols*/}
      {screens.includes("lg") && (
        <div className="position-relative d-none d-lg-block d-xl-none">
          <div
            // id="carouselExampleControls"
            id={`${idControl}-col-4`}
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner w-100">
              {/* LG SCREEN - 4 cols*/}
              <div class="carousel-item container active">
                <div className="row ">
                  {lgScreenProducts_page_1 &&
                    lgScreenProducts_page_1.map((product) => (
                      <div className="col-lg-3 p-0 m-0">
                        <div className="product-inner position-relative">
                          <div
                            className="product-thumbnail d-flex justify-content-center"
                            style={{ zIndex: -1 }}
                          >
                            <Link
                              to={`/product/${product.slug}`}
                              className="pt-4"
                            >
                              <img
                                src={
                                  product?.image_urls && product.image_urls[0]
                                }
                                alt="product thumbnail"
                                style={{
                                  width: "192px",
                                  height: "auto",
                                  zIndex: 1,
                                }}
                              />
                            </Link>
                          </div>
                          <div className="product-details ps-4 pb-3">
                            <Link
                              to={`/product/${product.slug}`}
                              className="text-decoration-none fw-normal"
                            >
                              <h2
                                style={{
                                  fontSize: "13.5px",
                                  fontWeight: 400,
                                  maxWidth: "192px",
                                }}
                              >
                                {product.name}
                              </h2>
                            </Link>
                            <div className="product-price-box fw-bold">
                              <span>
                                {product.price.toLocaleString("en-US")} đ
                              </span>
                            </div>
                          </div>
                          {/* icon cart */}
                          <button
                            type="button"
                            className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                            data-bs-container="body"
                            onClick={() => addDataIntoLocalStorage(product.id)}
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
                    ))}
                </div>
              </div>
              <div class="carousel-item container">
                <div className="row ">
                  {lgScreenProducts_page_2 &&
                    lgScreenProducts_page_2.map((product) => (
                      <div className="col-lg-3 p-0 m-0">
                        <div className="product-inner position-relative">
                          <div
                            className="product-thumbnail d-flex justify-content-center"
                            style={{ zIndex: -1 }}
                          >
                            <Link
                              to={`/product/${product.slug}`}
                              className="pt-4"
                            >
                              <img
                                src={
                                  product?.image_urls && product.image_urls[0]
                                }
                                alt="product thumbnail"
                                style={{
                                  width: "192px",
                                  height: "auto",
                                  zIndex: 1,
                                }}
                              />
                            </Link>
                          </div>
                          <div className="product-details ps-4 pb-3">
                            <Link
                              to={`/product/${product.slug}`}
                              className="text-decoration-none fw-normal"
                            >
                              <h2
                                style={{
                                  fontSize: "13.5px",
                                  fontWeight: 400,
                                  maxWidth: "192px",
                                }}
                              >
                                {product.name}
                              </h2>
                            </Link>
                            <div className="product-price-box fw-bold">
                              <span>
                                {product.price.toLocaleString("en-US")} đ
                              </span>
                            </div>
                          </div>
                          {/* icon cart */}
                          <button
                            type="button"
                            className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                            data-bs-container="body"
                            onClick={() => addDataIntoLocalStorage(product.id)}
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
                    ))}
                </div>
              </div>
            </div>
            {/* <!-- slider btn --> */}
            <div
              class="position-absolute start-0 top-50 translate-middle d-lg-block d-xl-none"
              type="button"
              data-bs-target={`#${idControl}-col-4`}
              data-bs-slide="prev"
            >
              <div
                class="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="fas fa-chevron-left text-muted"></i>
              </div>
            </div>

            <div
              class="position-absolute start-100 top-50 translate-middle d-lg-block d-xl-none"
              type="button"
              data-bs-target={`#${idControl}-col-4`}
              data-bs-slide="next"
            >
              <div
                class="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="fas fa-chevron-right text-muted"></i>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MD SCREEN - 3 cols*/}
      {screens.includes("md") && (
        <div className="position-relative d-none d-md-block d-lg-none">
          <div
            id={`${idControl}-cols-3`}
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner w-100">
              {/* MD SCREEN - 3 cols*/}
              <div class="carousel-item container active">
                <div className="row ">
                  {mdScreenProducts_page_1 &&
                    mdScreenProducts_page_1.map((product) => (
                      <div className="col p-0 m-0">
                        <div className="product-inner position-relative">
                          <div
                            className="product-thumbnail d-flex justify-content-center"
                            style={{ zIndex: -1 }}
                          >
                            <Link
                              to={`/product/${product.slug}`}
                              className="pt-4"
                            >
                              <img
                                src={
                                  product?.image_urls && product.image_urls[0]
                                }
                                alt="product thumbnail"
                                style={{
                                  width: "192px",
                                  height: "auto",
                                  zIndex: 1,
                                }}
                              />
                            </Link>
                          </div>
                          <div className="product-details ps-4 pb-3">
                            <Link
                              to={`/product/${product.slug}`}
                              className="text-decoration-none fw-normal"
                            >
                              <h2
                                style={{
                                  fontSize: "13.5px",
                                  fontWeight: 400,
                                  maxWidth: "192px",
                                }}
                              >
                                {product.name}
                              </h2>
                            </Link>
                            <div className="product-price-box fw-bold">
                              <span>
                                {product.price.toLocaleString("en-US")} đ
                              </span>
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
                    ))}
                </div>
              </div>
              <div class="carousel-item container">
                <div className="row">
                  {mdScreenProducts_page_2 &&
                    mdScreenProducts_page_2.map((product) => (
                      <div className="col p-0 m-0">
                        <div className="product-inner position-relative">
                          <div
                            className="product-thumbnail d-flex justify-content-center"
                            style={{ zIndex: -1 }}
                          >
                            <Link
                              to={`/product/${product.slug}`}
                              className="pt-4"
                            >
                              <img
                                src={
                                  product?.image_urls && product.image_urls[0]
                                }
                                alt="product thumbnail"
                                style={{
                                  width: "192px",
                                  height: "auto",
                                  zIndex: 1,
                                }}
                              />
                            </Link>
                          </div>
                          <div className="product-details ps-4 pb-3">
                            <Link
                              to={`/product/${product.slug}`}
                              className="text-decoration-none fw-normal"
                            >
                              <h2
                                style={{
                                  fontSize: "13.5px",
                                  fontWeight: 400,
                                  maxWidth: "192px",
                                }}
                              >
                                {product.name}
                              </h2>
                            </Link>
                            <div className="product-price-box fw-bold">
                              <span>
                                {product.price.toLocaleString("en-US")} đ
                              </span>
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
                    ))}
                </div>
              </div>
            </div>
            {/* <!-- slider btn --> */}
            <div
              class="position-absolute start-0 top-50 translate-middle"
              type="button"
              data-bs-target={`#${idControl}-cols-3`}
              data-bs-slide="prev"
            >
              <div
                class="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="fas fa-chevron-left text-muted"></i>
              </div>
            </div>

            <div
              class="position-absolute start-100 top-50 translate-middle d-lg-block d-xl-none"
              type="button"
              data-bs-target={`#${idControl}-cols-3`}
              data-bs-slide="next"
            >
              <div
                class="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="fas fa-chevron-right text-muted"></i>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SM SCREEN - 2 cols */}
      {screens.includes("sm") && (
        <div className="position-relative d-sm-block d-md-none">
          <div
            id={`${idControl}-cols-2`}
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner w-100">
              {/* SM SCREEN - 2 cols*/}
              <div class="carousel-item container active">
                <div className="row">
                  {smScreenProduct_page_1 &&
                    smScreenProduct_page_1.map((product) => (
                      <div
                        className="col p-0 m-0 mx-auto"
                        style={{ maxWidth: "200px" }}
                      >
                        <div className="product-inner position-relative">
                          <div
                            className="product-thumbnail d-flex justify-content-center"
                            style={{ zIndex: -1 }}
                          >
                            <Link
                              to={`/product/${product.slug}`}
                              className="pt-4"
                            >
                              <img
                                src={
                                  product?.image_urls && product.image_urls[0]
                                }
                                alt="product thumbnail"
                                style={{
                                  width: "142px",
                                  height: "auto",
                                  zIndex: 1,
                                }}
                              />
                            </Link>
                          </div>
                          <div className="product-details ps-4 pb-3">
                            <Link
                              to={`/product/${product.slug}`}
                              className="text-decoration-none fw-normal"
                            >
                              <h2
                                style={{
                                  fontSize: "8.5px",
                                  fontWeight: 400,
                                  maxWidth: "192px",
                                }}
                              >
                                {product.name}
                              </h2>
                            </Link>
                            <div
                              className="product-price-box fw-bold"
                              style={{ fontSize: "8.5px" }}
                            >
                              <span>
                                {product.price.toLocaleString("en-US")} đ
                              </span>
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
                    ))}
                </div>
              </div>
              <div class="carousel-item container">
                <div className="row">
                  {smScreenProduct_page_2 &&
                    smScreenProduct_page_2.map((product) => (
                      <div
                        className="col p-0 m-0 mx-auto"
                        style={{ maxWidth: "200px" }}
                      >
                        <div className="product-inner position-relative">
                          <div
                            className="product-thumbnail d-flex justify-content-center"
                            style={{ zIndex: -1 }}
                          >
                            <Link
                              to={`/product/${product.slug}`}
                              className="pt-4"
                            >
                              <img
                                src={
                                  product?.image_urls && product.image_urls[0]
                                }
                                alt="product thumbnail"
                                style={{
                                  width: "142px",
                                  height: "auto",
                                  zIndex: 1,
                                }}
                              />
                            </Link>
                          </div>
                          <div className="product-details ps-4 pb-3">
                            <Link
                              to={`/product/${product.slug}`}
                              className="text-decoration-none fw-normal"
                            >
                              <h2
                                style={{
                                  fontSize: "8.5px",
                                  fontWeight: 400,
                                  maxWidth: "192px",
                                }}
                              >
                                {product.name}
                              </h2>
                            </Link>
                            <div
                              className="product-price-box fw-bold"
                              style={{ fontSize: "8.5px" }}
                            >
                              <span>
                                {product.price.toLocaleString("en-US")} đ
                              </span>
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
                    ))}
                </div>
              </div>
            </div>
            {/* <!-- slider btn --> */}
            <div
              class="position-absolute start-0 top-50 translate-middle"
              type="button"
              data-bs-target={`#${idControl}-cols-2`}
              data-bs-slide="prev"
            >
              <div
                class="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="fas fa-chevron-left text-muted"></i>
              </div>
            </div>

            <div
              class="position-absolute start-100 top-50 translate-middle d-lg-block d-xl-none"
              type="button"
              data-bs-target={`#${idControl}-cols-2`}
              data-bs-slide="next"
            >
              <div
                class="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="fas fa-chevron-right text-muted"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
