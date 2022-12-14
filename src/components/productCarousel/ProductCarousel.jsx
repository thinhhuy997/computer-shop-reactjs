import React from "react";
import "./productCarousel.css";
import { Link } from "react-router-dom";

const ProductCarousel = (props) => {
  const items = props.items;

  return (
    <div
      id="productCarousel"
      class="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item product-carousel-item active">
          <img src={items[0].original} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item product-carousel-item">
          <img src={items[1].original} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item product-carousel-item">
          <img src={items[2].original} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev carousel-directional-btn position-absolute top-50 start-0 translate-middle bg-white text-dark"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
        style={{ width: "25px", height: "45px" }}
      >
        <i class="fa-solid fa-chevron-left" style={{ fontSize: "25px" }}></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-prev carousel-directional-btn position-absolute top-50 start-100 translate-middle bg-white text-dark"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
        style={{ width: "25px", height: "45px" }}
      >
        <i class="fa-solid fa-chevron-right" style={{ fontSize: "25px" }}></i>
        <span class="visually-hidden">Previous</span>
      </button>
      {/* show all imgs */}
      <div className="w-100 text-center" style={{ fontSize: "13.5px" }}>
        <Link className="text-primary me-1">Xem tất cả hình</Link>
        <span style={{ fontSize: "13px" }}>(1/4)</span>
      </div>
      {/* product policy */}
      <div className="w-100 mt-4">
        <div className="row py-1">
          <div className="col policy-info">
            <div>
              <img
                src="//theme.hstatic.net/200000420363/1000874510/14/product_policy_1.png?v=3399"
                alt=""
                style={{ width: "25px" }}
              />
              <span
                className="mx-2"
                style={{ fontSize: "14px", fontWeight: 400 }}
              >
                Chính sách bảo hành
              </span>
            </div>
          </div>
          <div className="col policy-info">
            <div>
              <img
                src="//theme.hstatic.net/200000420363/1000874510/14/product_policy_3.png?v=3399"
                alt=""
                style={{ width: "25px" }}
              />
              <span
                className="mx-2"
                style={{ fontSize: "14px", fontWeight: 400 }}
              >
                Bảo hành: 3 tháng
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col policy-info">
            <div>
              <img
                src="//theme.hstatic.net/200000420363/1000874510/14/product_policy_2.png?v=3399"
                alt=""
                style={{ width: "25px" }}
              />
              <span
                className="mx-2"
                style={{ fontSize: "14px", fontWeight: 400 }}
              >
                Cam kết chính hãng 100%
              </span>
            </div>
          </div>
          <div className="col policy-info">
            <div>
              <img
                src="//theme.hstatic.net/200000420363/1000874510/14/product_policy_4.png?v=3399"
                alt=""
                style={{ width: "25px" }}
              />
              <span
                className="mx-2"
                style={{ fontSize: "14px", fontWeight: 400 }}
              >
                1900 0243
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
