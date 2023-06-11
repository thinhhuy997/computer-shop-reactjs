import React, { useRef, useEffect } from "react";
import "./bestSeller.css";
import Slider from "../slider/Slider";

const products = [
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/07/Man-hinh-LCD-19-Dahua-DHI-LM19-A200-HD-TN-60Hz-5Ms-Chinh-Hang.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 24″ MSI Pro MP241X FHD VA 75Hz 8Ms",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/03/Man-hinh-LCD-24-MSI-Pro-MP241X-FHD-VA-75Hz-8Ms-1.jpg",
    price: "2,650,000",
  },
  {
    name: "Laptop Dell Vostro 3405 (P132G002ABL)",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/dell-vostro-3405-p132g002ablf2_d3d962799d424205a505696aff236f33_master.jpg",
    price: "10,590,000",
  },
  {
    name: "Laptop MSI GF63 Thin 11UC-443VN: I5 11400H, RTX 3050",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/02/Laptop-Acer-Gaming-Aspire-7-A715-75G-58U4.jpg",
    price: "17,390,000",
  },
  {
    name: "Ram DDR4 Kingston 8G/3200 Fury Beast (1x 8GB)",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/11/R4_KT_FR_Beast_8G3200.jpg",
    price: "680,000",
  },
  {
    name: "Ram DDR4 ADATA XPG SPECTRIX D50 8G/3600 RGB GREY",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/08/Ram-DDR4-ADATA-XPG-SPECTRIX-D50-1.jpg",
    price: "990,000",
  },
  {
    name: "VGA Asus GTX 1660 Super 6G TUF Gaming 2 Fan (TUF-",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/03/VGA-Asus-GTX-1660-Super-6G-TUF-Gaming-2-Fan-TUF-GTX1660S-O6G-GAMING.jpg",
    price: "4,390,000",
  },
  {
    name: "CPU Intel Core I5 12400F Tray Không Fan (LGA1700, 3.00",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/03/12400.jpg",
    price: "3,990,000",
  },
  {
    name: "CPU Intel Core i5 12400F Box Chính Hãng (2.50 Up to",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/12/CPU-i5-12400F_BCH.jpg",
    price: "4,450,000",
  },
  {
    name: "CPU Intel Core i3 12100F Box Chính Hãng (3.30 Up to",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/01/CPU_I3-12100F_BCT-300x300-1.jpg",
    price: "2,590,000",
  },
];
const BestSeller = () => {
  return (
    <div className="container p-0 mt-4">
      {/* heading image */}
      <div className="row m-0 mt">
        {/* img header */}
        <div className="col-12 p-0 d-flex justify-content-center">
          <img
            src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/06/sp-hot-2048x116.png"
            alt="img header"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
      {/* product show without slider */}
      <div className="row row-cols-xl-5 mt-1 d-none d-xl-flex">
        {products &&
          products.map((product) => (
            <div className="col">
              <div className="product-inner position-relative">
                <div
                  className="product-thumbnail d-flex justify-content-center"
                  style={{ zIndex: -1 }}
                >
                  <a href="#" className="pt-4">
                    <img
                      src={product.thumbnail}
                      alt="product thumbnail"
                      style={{ width: "192px", height: "auto", zIndex: 1 }}
                    />
                  </a>
                </div>
                <div className="product-details ps-4 pb-3">
                  <a href="#" className="text-decoration-none fw-normal">
                    <h2
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 400,
                        maxWidth: "192px",
                      }}
                    >
                      {product.name}
                    </h2>
                  </a>
                  <div className="product-price-box fw-bold">
                    <span>{product.price}đ</span>
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
      {/* slider product */}
      <div className="row my-1">
        <Slider
          screens={["lg", "md", "sm"]}
          items={products.filter((product, index) => index < 5)}
          idControl="sliderControl-1"
        />
      </div>
      <div className="row my-1">
        <Slider
          screens={["lg", "md", "sm"]}
          items={products.filter((product, index) => index >= 5)}
          idControl="sliderControl-2"
        />
      </div>
    </div>
  );
};

export default BestSeller;
