// cart row
<>
  <div className="row">
    <div className="col-xl-8 col-lg-12 m-0 p-0 border-top border-bottom mt-4 py-2">
      <div className="row">
        <div className="col-2 text-center">
          <span style={{ fontWeight: 400, fontSize: "14px" }}>Sản Phẩm</span>
        </div>
        <div className="col-3 text-center">
          <span style={{ fontWeight: 400, fontSize: "14px" }}>Mô Tả</span>
        </div>
        <div className="col-2 text-center">
          <span style={{ fontWeight: 400, fontSize: "14px" }}>Giá</span>
        </div>
        <div className="col-2 text-center">
          <span style={{ fontWeight: 400, fontSize: "14px" }}>Số Lượng</span>
        </div>
        <div className="col-2 text-center">
          <span style={{ fontWeight: 400, fontSize: "14px" }}>Tổng</span>
        </div>
        <div className="col-1 text-center">
          <span style={{ fontWeight: 400, fontSize: "14px" }}>Xoá</span>
        </div>
      </div>
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
    </div>
  </div>

  <div className="row">
    <div className="col-xl-8 col-lg-12 m-0 p-0 mt-4 pb-2">
      {products &&
        products.map((product) => (
          <div className="row border-bottom pt-2">
            {/* product thumbnail img */}
            <div className="col-2 text-center">
              <div className="product-thumbnail py-3" style={{ zIndex: -1 }}>
                <Link
                  className="pt-4"
                  to={`/product/${product.slug}`}
                  // onClick={(e) =>
                  //   handleNavigateToProductDetailPath(product.slug)
                  // }
                >
                  <img
                    src={product.image_urls && product.image_urls[0]}
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
            <div className="col-3 text-left">
              <Link to={`/product/${product.slug}`}>
                <span style={{ fontWeight: 400, fontSize: "14px" }}>
                  {product.name}
                </span>
              </Link>
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
                {(product.price * product.quantity).toLocaleString("en-US")} đ
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
                onClick={(e) => removeProductFromCart(product.id)}
              />
            </div>
          </div>
        ))}
    </div>
    <div className="col-4 px-3">
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
</>;
