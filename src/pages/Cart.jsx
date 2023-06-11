import React, { useState, useEffect } from "react";
import axios from "axios";
import cartNothingImg from "../assets/cart-nothing.png";
import { useLottie } from "lottie-react";
import emptyAnimation from "./96758-empty-cart.json";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Cart = () => {
  const options = {
    animationData: emptyAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  const [isShown, setIsShown] = useState(false);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState();
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const ids = localStorage.getItem("product_ids").split(",");
      try {
        axios
          .post("http://127.0.0.1:8000/api/product-list-by-ids/", { ids: ids })
          .then((response) => {
            let addition_data = response.data.results;
            addition_data.map((item) => (item.quantity = 1));
            setProducts(addition_data);
          });
      } catch (error) {
        console.error("Error response:");
        console.error(error.response.data); // ***
        console.error(error.response.status); // ***
        console.error(error.response.headers); // ***
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const SetProductQuantity = (productId, quantityValue) => {
    let data = products;
    data.map((item) => {
      if (item.id == productId) {
        item.quantity = quantityValue;
      }
    });
    setProducts(data);
    setFlag((prev) => prev + 1);
  };

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
    });
    setTotalCartPrice(total);
    // alert(totalCartPrice);
  }, [flag]);

  const useStyle = {
    Button: {
      "&:hover": {
        backgroundColor: "#ffffff !important",
        boxShadow: "none !important",
      },
      "&:active": {
        boxShadow: "none !important",
        backgroundColor: "#3c52b2 !important",
      },
    },
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 d-flex justify-content-end px-0">
            <div
              className="text-center py-1 text-white d-flex justify-content-center align-items-center rounded"
              style={{ width: "100%", backgroundColor: "#505050" }}
            >
              {/* icon */}
              <i class="fa-solid fa-bars me-2" style={{ fontSize: "16px" }}></i>
              {/* text */}
              <span
                className="text-uppercase fw-bold"
                style={{ fontSize: "14px" }}
              >
                Danh mục sản phẩm
              </span>
            </div>
          </div>
          <div className="col-10">
            <div
              className="text-white d-flex align-items-center justify-content-between py-1 rounded"
              style={{ backgroundColor: "#9f9f9f" }}
            >
              <div>
                {/* icon */}
                <i
                  className="fa-solid fa-wrench ms-2 me-1"
                  style={{ fontSize: "14px" }}
                ></i>
                {/* text */}
                <span style={{ fontSize: "13px", fontWeight: "500" }}>
                  Lắp đặt phòng net
                </span>
              </div>
              <div>
                {/* icon */}
                <i
                  className="fa-solid fa-table-list ms-2 me-1"
                  style={{ fontSize: "14px" }}
                ></i>
                {/* text */}
                <span style={{ fontSize: "13px", fontWeight: "500" }}>
                  Trả góp
                </span>
              </div>
              <div>
                {/* icon */}
                <i
                  className="fa-solid fa-money-check-dollar ms-2 me-1"
                  style={{ fontSize: "14px" }}
                ></i>
                {/* text */}
                <span style={{ fontSize: "13px", fontWeight: "500" }}>
                  Bảng giá
                </span>
              </div>
              <div>
                {/* icon */}
                <i
                  className="fa-solid fa-sliders ms-2 me-1"
                  style={{ fontSize: "14px" }}
                ></i>
                {/* text */}
                <span style={{ fontSize: "13px", fontWeight: "500" }}>
                  Xây dựng cấu hình
                </span>
              </div>
              <div>
                {/* icon */}
                <i
                  className="fa-solid fa-shield ms-2 me-1"
                  style={{ fontSize: "14px" }}
                ></i>
                {/* text */}
                <span style={{ fontSize: "13px", fontWeight: "500" }}>
                  Kiếm tra bảo hành
                </span>
              </div>
              <div className="me-2">
                {/* icon */}
                <i
                  className="fa-solid fa-dollar-sign ms-2 me-1"
                  style={{ fontSize: "14px" }}
                ></i>
                {/* text */}
                <span style={{ fontSize: "13px", fontWeight: "500" }}>
                  Thiết bị mining
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 m-0 p-0">
            <h2
              className="text-uppercase m-0 p-0 mt-3 fw-normal"
              style={{ fontSize: "22px" }}
            >
              Giỏ Hàng
            </h2>
          </div>

          {localStorage.getItem("product_ids") ? (
            <>
              <div className="row">
                <div className="col-8 m-0 p-0 border-top border-bottom mt-4 py-2">
                  <div className="row">
                    <div className="col-2 text-center">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Sản Phẩm
                      </span>
                    </div>
                    <div className="col-3 text-center">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Mô Tả
                      </span>
                    </div>
                    <div className="col-2 text-center">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Giá
                      </span>
                    </div>
                    <div className="col-2 text-center">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Số Lượng
                      </span>
                    </div>
                    <div className="col-2 text-center">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Tổng
                      </span>
                    </div>
                    <div className="col-1 text-center">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Xoá
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <span>Tổng: {totalCartPrice.toString()}</span>
                </div>
              </div>

              <div className="row">
                <div className="col-8 m-0 p-0 mt-4 pb-2">
                  {products &&
                    products.map((product) => (
                      <div className="row border-bottom pt-2">
                        {/* product thumbnail img */}
                        <div className="col-2 text-center">
                          <div
                            className="product-thumbnail py-3"
                            style={{ zIndex: -1 }}
                          >
                            <a href="#" className="pt-4">
                              <img
                                src={
                                  product.image_urls && product.image_urls[0]
                                }
                                alt="product thumbnail"
                                style={{
                                  width: "120px",
                                  height: "auto",
                                  zIndex: 1,
                                }}
                              />
                            </a>
                          </div>
                        </div>
                        {/* product description */}
                        <div className="col-3 text-left">
                          <span style={{ fontWeight: 400, fontSize: "14px" }}>
                            {product.name}
                          </span>
                        </div>
                        {/* product price */}
                        <div className="col-2 text-center">
                          <span style={{ fontWeight: 400, fontSize: "14px" }}>
                            {product.price.toLocaleString("en-US")} đ
                          </span>
                        </div>
                        {/* product quantity */}
                        <div className="col-2">
                          <div class="form-outline  w-50 mx-auto">
                            <input
                              min="1"
                              max="20"
                              defaultValue={product.quantity}
                              // value={product.quantity.toString()}
                              // value="5"
                              type="number"
                              id="typeNumber"
                              className="form-control text-center"
                              onChange={(e) =>
                                SetProductQuantity(product.id, e.target.value)
                              }
                              style={{ fontSize: 13.5 }}
                            />
                          </div>
                        </div>
                        {/* item total price */}
                        <div className="col-2 text-center">
                          <span style={{ fontWeight: 400, fontSize: "14px" }}>
                            {(product.price * product.quantity).toLocaleString(
                              "en-US"
                            )}{" "}
                            đ
                          </span>
                        </div>
                        <div className="col-1 text-center">
                          <RemoveCircleOutlineIcon
                            variant="text"
                            sx={{
                              ":hover": {
                                color: "red",
                              },
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </>
          ) : (
            <>{View}</>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
