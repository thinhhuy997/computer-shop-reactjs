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

  {/* sidebar */}
  <div className="row change">
    <div className="container">
      <div className="row">
        {/* desktop */}
        <div className="col-12 p-0 d-none d-md-flex">
          {/* SIDE BAR */}
          <div
            className="d-none d-xl-flex flex-column align-items-start p-0 border-top border-start border-end border-1 bg-white rounded pt-2 navigation--wrapper"
            style={{ height: "100%", minWidth: "270px" }}
          >
            <HoverMenuButton
              categoryName="Linh kiện mới"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_1.png?v=4006"
              navigationContent={navigationContent1}
            />
            <HoverMenuButton
              categoryName="Linh kiện cũ"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_1.png?v=4006"
              navigationContent={navigationContent2}
            />
            <HoverMenuButton
              categoryName="Laptop chính hãng"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_3.png?v=4065"
            />
            <HoverMenuButton
              categoryName="PC gaming, Đồ hoạ, Audio"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_4.png?v=4065"
            />
            <HoverMenuButton
              categoryName="PC Văn Phòng, Mini PC, AiO"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_5.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Màn Hình Máy Tính"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_6.png?v=4065"
            />
            <HoverMenuButton
              categoryName="SSD, HDD, Thiết Bị Lưu Trữ"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_7.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Bàn, Ghế Gaming"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_8.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Phím, Chuột, Tai Nghe"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_9.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Phụ kiện chung"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_10.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Thiết bị âm thanh"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_11.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Phụ kiện và phần mềm"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_12.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Camera, Thiết Bị Quan Sát"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_13.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Máy In"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_14.png?v=4065"
            />
            <HoverMenuButton
              categoryName="Tản Nhiệt PC"
              imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_15.png?v=4065"
            />
          </div>
          {/* CAROUSEL AND AD IMAGES*/}
        </div>
        {/* mobile */}
        <div className="col-12 d-sm-block d-md-none">
          {/* mobile carousel*/}
          <div className="introductory-wrapper introductory-ad-carousel">
            <div className="main-introductory-ads">
              {/* carousel */}
              <div
                id="introductoryCarouselMobile"
                className="carousel slide carousel-fade d-flex"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner introductory-carousel-mobile">
                  <div className="carousel-item active">
                    <img
                      src="https://file.hstatic.net/200000420363/file/slider_1_image_fc5568fef7374019986e1a38ac82ad26.jpg"
                      className="d-block introductory-carousel-img w-100"
                      alt="..."
                      // style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://file.hstatic.net/200000420363/file/sli-asus_8426a9a368cb4e11b6319b4d7d2eac6e.jpg"
                      className="d-block introductory-carousel-img w-100"
                      alt="..."
                      // style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://file.hstatic.net/200000420363/file/slider_3_image_a51ce838ff07489f89b71c0f13c94bf1.jpg"
                      className="d-block introductory-carousel-img w-100"
                      alt="..."
                      // style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#introductoryCarouselMobile"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#introductoryCarouselMobile"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>;
