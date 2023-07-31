import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import cartNothingImg from "../assets/cart-nothing.png";
import { useLottie } from "lottie-react";
import emptyAnimation from "./96758-empty-cart.json";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CartContext from "../contexts/CartContext";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const {
    setCartItemQuantity,
    RemoveItemFromCartLocalStorage,
    cartItemQuantity,
    emptyCartFlag,
    setEmptyCartFlag,
  } = cartContext;

  const navigate = useNavigate();

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

  const handleNavigateToProductDetailPath = (slug) => {
    navigate(`/product/${slug}`);
  };

  // const [emptyCartFlag, setEmptyCartFlag] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("product_ids")) {
        setLoading(true);
        const ids = localStorage.getItem("product_ids").split(",");
        try {
          axios
            .post(
              "https://computer-shop-drf.onrender.com/api/product-list-by-ids/",
              {
                ids: ids,
              }
            )
            .then((response) => {
              let addition_data = response.data.results;
              addition_data.map((item) => (item.quantity = 1));
              setProducts(addition_data);
              setFlag((prev) => prev + 1);

              // new
              let quantity = localStorage
                .getItem("product_ids")
                .split(",").length;
              setCartItemQuantity(quantity);
            });
        } catch (error) {
          console.error("Error response:");
          console.error(error.response.data); // ***
          console.error(error.response.status); // ***
          console.error(error.response.headers); // ***
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
    });
    setTotalCartPrice(total);
  }, [flag]);

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
    });
    setTotalCartPrice(total);
  }, [flag, products]);

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

  const removeProductFromCart = (productId) => {
    setProducts((products) =>
      products.filter(function (product) {
        return product.id !== productId;
      })
    );
    RemoveItemFromCartLocalStorage(productId);
  };

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
        <div className="row d-none d-xl-flex">
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
        </div>

        <div className="row">
          {cartItemQuantity !== 0 ? (
            <>
              {/* cart row */}
              <div className="row">
                <div className="col-xl-8 col-lg-12">
                  <div className="row d-none d-sm-block border-top border-bottom p-0 mt-4 py-2">
                    <div className="col-2 text-center ">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Sản Phẩm
                      </span>
                    </div>
                    <div className="col-3 text-center ">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Mô Tả
                      </span>
                    </div>
                    <div className="col-2 text-center ">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Giá
                      </span>
                    </div>
                    <div className="col-2 text-center ">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Số Lượng
                      </span>
                    </div>
                    <div className="col-2 text-center ">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Tổng
                      </span>
                    </div>
                    <div className="col-1 text-center ">
                      <span style={{ fontWeight: 400, fontSize: "14px" }}>
                        Xoá
                      </span>
                    </div>
                  </div>
                  <div className="my-2"></div>
                  {/* <div className="row border mt-3"> */}
                  {products &&
                    products.map((product) => (
                      <>
                        {/* LG-SCREEN DESIGN */}
                        <div className="row border-bottom pt-2 d-none d-lg-flex">
                          {/* product thumbnail img */}
                          <div className="col-lg-2 text-center">
                            <div
                              className="product-thumbnail py-3"
                              style={{ zIndex: -1 }}
                            >
                              <Link
                                className="pt-4"
                                to={`/product/${product.slug}`}
                              >
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
                              </Link>
                            </div>
                          </div>
                          {/* product description */}
                          <div className="col-md-8 col-lg-3 text-left">
                            <Link to={`/product/${product.slug}`}>
                              <span
                                style={{ fontWeight: 400, fontSize: "14px" }}
                              >
                                {product.name}
                              </span>
                            </Link>
                          </div>

                          {/* product price */}
                          <div className="col-lg-2 text-center">
                            <span style={{ fontWeight: 400, fontSize: "14px" }}>
                              {product.price.toLocaleString("en-US")} đ
                            </span>
                          </div>
                          {/* product quantity */}
                          <div className="col-lg-2">
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
                          <div className="col-lg-2 text-center">
                            <span style={{ fontWeight: 400, fontSize: "14px" }}>
                              {(
                                product.price * product.quantity
                              ).toLocaleString("en-US")}{" "}
                              đ
                            </span>
                          </div>
                          {/* item remove */}
                          <div className="col-lg-1 text-center">
                            <RemoveCircleOutlineIcon
                              variant="text"
                              sx={{
                                ":hover": {
                                  color: "red",
                                },
                              }}
                              onClick={(e) => removeProductFromCart(product.id)}
                            />
                          </div>
                        </div>

                        {/* MD-SCREEN DESIGN */}
                        <div className="row border-bottom mt-4 pt-2 d-none d-md-flex d-lg-none">
                          {/* product thumbnail img */}
                          <div className="col-4">
                            <div
                              className="product-thumbnail py-3"
                              style={{ zIndex: -1 }}
                            >
                              <Link
                                className="pt-4"
                                to={`/product/${product.slug}`}
                              >
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
                              </Link>
                            </div>
                          </div>
                          {/* product description */}
                          <div className="col-8 text-left">
                            <div className="col-12">
                              <Link to={`/product/${product.slug}`}>
                                <span
                                  style={{ fontWeight: 400, fontSize: "14px" }}
                                >
                                  {product.name}
                                </span>
                              </Link>
                            </div>
                            <div className="col-12 mt-2">
                              <span
                                style={{ fontWeight: 400, fontSize: "14px" }}
                              >
                                {product.price.toLocaleString("en-US")} đ
                              </span>
                            </div>
                            <div className="row mt-2">
                              <div className="col-8">
                                <div class="form-outline  w-25">
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
                                      SetProductQuantity(
                                        product.id,
                                        e.target.value
                                      )
                                    }
                                    style={{ fontSize: 13.5 }}
                                  />
                                </div>
                              </div>
                              <div className="col-4 mt-2">
                                <RemoveCircleOutlineIcon
                                  variant="text"
                                  sx={{
                                    ":hover": {
                                      color: "red",
                                    },
                                  }}
                                  onClick={(e) =>
                                    removeProductFromCart(product.id)
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          {/* product price */}
                          {/* <div className="col-12 text-left">
                            <span style={{ fontWeight: 400, fontSize: "14px" }}>
                              {product.price.toLocaleString("en-US")} đ
                            </span>
                          </div> */}
                          {/* product quantity */}
                          {/* <div className="col-lg-2">
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
                          </div> */}
                          {/* item total price */}
                          {/* <div className="col-lg-2 text-center">
                            <span style={{ fontWeight: 400, fontSize: "14px" }}>
                              {(
                                product.price * product.quantity
                              ).toLocaleString("en-US")}{" "}
                              đ
                            </span>
                          </div> */}
                          {/* item remove */}
                          {/* <div className="col-lg-1 text-center">
                            <RemoveCircleOutlineIcon
                              variant="text"
                              sx={{
                                ":hover": {
                                  color: "red",
                                },
                              }}
                              onClick={(e) => removeProductFromCart(product.id)}
                            />
                          </div> */}
                        </div>

                        {/* MD-SCREEN DESIGN */}
                        <div className="row border-bottom mt-4 pt-2 d-sm-block d-md-none">
                          {/* product thumbnail img */}
                          <div className="col-4">
                            <div
                              className="product-thumbnail py-3"
                              style={{ zIndex: -1 }}
                            >
                              <Link
                                className="pt-4"
                                to={`/product/${product.slug}`}
                              >
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
                              </Link>
                            </div>
                          </div>
                          {/* product description */}
                          <div className="col-8 text-left">
                            <div className="col-12">
                              <Link to={`/product/${product.slug}`}>
                                <span
                                  style={{ fontWeight: 400, fontSize: "14px" }}
                                >
                                  {product.name}
                                </span>
                              </Link>
                            </div>
                            <div className="col-12 mt-2">
                              <span
                                style={{ fontWeight: 400, fontSize: "14px" }}
                              >
                                {product.price.toLocaleString("en-US")} đ
                              </span>
                            </div>
                            <div className="row mt-2">
                              <div className="col-8">
                                <div class="form-outline  w-25">
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
                                      SetProductQuantity(
                                        product.id,
                                        e.target.value
                                      )
                                    }
                                    style={{ fontSize: 13.5 }}
                                  />
                                </div>
                              </div>
                              <div className="col-4 mt-2">
                                <RemoveCircleOutlineIcon
                                  variant="text"
                                  sx={{
                                    ":hover": {
                                      color: "red",
                                    },
                                  }}
                                  onClick={(e) =>
                                    removeProductFromCart(product.id)
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          {/* product price */}
                          {/* <div className="col-12 text-left">
                            <span style={{ fontWeight: 400, fontSize: "14px" }}>
                              {product.price.toLocaleString("en-US")} đ
                            </span>
                          </div> */}
                          {/* product quantity */}
                          {/* <div className="col-lg-2">
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
                          </div> */}
                          {/* item total price */}
                          {/* <div className="col-lg-2 text-center">
                            <span style={{ fontWeight: 400, fontSize: "14px" }}>
                              {(
                                product.price * product.quantity
                              ).toLocaleString("en-US")}{" "}
                              đ
                            </span>
                          </div> */}
                          {/* item remove */}
                          {/* <div className="col-lg-1 text-center">
                            <RemoveCircleOutlineIcon
                              variant="text"
                              sx={{
                                ":hover": {
                                  color: "red",
                                },
                              }}
                              onClick={(e) => removeProductFromCart(product.id)}
                            />
                          </div> */}
                        </div>
                      </>
                    ))}
                  {/* </div> */}
                </div>
                {/* total cart price */}
                <div className="col-xl-4 col-lg-12 mt-4">
                  <div className="d-flex justify-content-between">
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: "14px",
                        marginTop: 10,
                      }}
                      className="ms-3"
                    >
                      Tổng:
                    </span>
                    <span
                      className="total-cart-price fs-4 fw-light"
                      style={{ marginTop: 3.5 }}
                    >
                      {/* {totalCartPrice}  */}
                      {totalCartPrice && totalCartPrice.toLocaleString()}đ
                    </span>
                  </div>
                  {/* cart buttons */}
                  <div>
                    {/* cart-button */}
                    <div className="mt-2 d-flex justify-content-between">
                      <Link
                        to={"/"}
                        type="button"
                        className="btn btn-danger text-uppercase rounded-pill border fw-light py-2"
                        style={{ fontSize: 13.5, width: 190 }}
                      >
                        Tiếp tục mua sắm
                      </Link>

                      <Link
                        to={"/indevpage"}
                        type="button"
                        className="btn text-uppercase rounded-pill border fw-light py-2 border border-danger text-danger"
                        style={{ fontSize: 13.5, width: 190 }}
                      >
                        Thanh toán
                      </Link>
                    </div>
                    {/* order notes */}
                    <div className="mt-5">
                      <label
                        for="orderNoteFormControlTextarea1"
                        class="form-label"
                        style={{
                          fontWeight: 400,
                          fontSize: "14px",
                        }}
                        className="ms-1"
                      >
                        Chú Thích:
                      </label>
                      <textarea
                        class="form-control"
                        id="orderNoteFormControlTextarea1"
                        placeholder="Bạn muốn mô tả rõ hơn về đơn hàng này..."
                        rows="3"
                        style={{
                          fontWeight: 400,
                          fontSize: "14px",
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Show anmation if the cart is empty

            <>
              {/* if api is loading not show empty-cart-animation */}
              {loading && (
                <>
                  <div className="col-3"></div>
                  <div className="col-6">{View}</div>
                  <div className="col-3"></div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
