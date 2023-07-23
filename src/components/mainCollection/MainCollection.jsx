import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./mainCollection.css";
import CartContext from "../../contexts/CartContext";

const MainCollection = (props) => {
  const { categoryName } = useParams();

  const [productQuantity, setProductQuanity] = useState(0);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(20);
  const [remainQuantity, setRemainQuantity] = useState(0);
  const [nextLink, setNextLink] = useState(null);

  const navigate = useNavigate();

  const cartContext = useContext(CartContext);

  const { addDataIntoLocalStorage } = cartContext;

  const AddItemIntoCart = (productId) => {
    addDataIntoLocalStorage(productId);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=${categoryName}`,
    })
      .then((res) => {
        setNextLink(res.data.next);
        setProductQuanity(res.data.count);
        setProducts(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  useEffect(() => {
    setRemainQuantity((prevProductQuantity) => {
      if (productQuantity - offset < 0) {
        return 0;
      } else {
        return productQuantity - offset;
      }
    });
  }, [products, offset]);

  function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  const loadProductsWithOrderingFilter = (orderingParam) => {
    console.log(orderingParam);
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=${categoryName}&ordering=${orderingParam}`,
    })
      .then((res) => {
        setNextLink(res.data.next);
        setOffset(20);
        setProducts(res.data.results);
      })
      .catch((e) => console.dir(e));
  };

  const LoadMoreProducts = () => {
    setOffset((prevOffset) => {
      return prevOffset + 20;
    });

    axios({
      method: "GET",
      url: nextLink,
    })
      .then((res) => {
        setNextLink(res.data.next);
        setProducts((prevProducst) => {
          return [...prevProducst, ...res.data.results];
        });
      })
      .catch((e) => console.dir(e));
  };

  const handleNavigateToProductDetailPath = (slug) => {
    navigate(`/product/${slug}`);
  };

  return (
    <>
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col d-flex align-items-center justify-content-between"
              style={{ height: "50px" }}
            >
              <h5 className="m-0">{productQuantity} sản phẩm</h5>
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
                  onChange={(e) => {
                    loadProductsWithOrderingFilter(e.target.value);
                  }}
                >
                  <option value="+price">Giá: Tăng dần</option>
                  <option value="-price">Giá: Giảm dần</option>
                  <option value="+create_at">Cũ nhất</option>
                  <option value="-create_at" selected>
                    Mới nhất
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-white">
          <div className="row row-cols-2 row-cols-md-4 row-cols-xl-5">
            {products &&
              products.map((product) => (
                <div className="col p-0">
                  <div
                    className="product-inner position-relative border collection-item"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="product-item"
                      onClick={(e) =>
                        handleNavigateToProductDetailPath(product.slug)
                      }
                    >
                      <div
                        className="product-thumbnail d-flex justify-content-center"
                        style={{ zIndex: -1 }}
                      >
                        <img
                          src={product.image_urls[0]}
                          alt="product thumbnail"
                          style={{ width: "100%", height: "auto", zIndex: 1 }}
                        />
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
                            {product.name}
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
                          <span>{thousands_separators(product.price)}đ</span>
                        </div>
                      </div>
                    </div>

                    {/* icon cart */}
                    <button
                      type="button"
                      className="cart-icon-wrapper position-absolute translate-middle mt-3 p-3 rounded-circle border-0"
                      data-bs-container="body"
                      style={{ zIndex: 2 }}
                      onClick={() => AddItemIntoCart(product.id)}
                    >
                      <i className="cib-shopify product-inner--cart fs-5 position-absolute top-50 start-50 translate-middle"></i>
                    </button>
                    {/* text bubble */}
                    <div
                      class="speech-bubble position-absolute start-50 translate-middle"
                      contenteditable
                      style={{ zIndex: 2 }}
                    >
                      Thêm vào giỏ hàng
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              {/* show more btn */}
              <button
                type="button"
                className={
                  remainQuantity > 0
                    ? `btn bg-white border showmore-btn mt-3 mb-4`
                    : `d-none`
                }
                style={{ width: "320px", fontSize: "13.5px", fontWeight: 400 }}
                onClick={(e) => LoadMoreProducts()}
              >
                Xem thêm {remainQuantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCollection;
