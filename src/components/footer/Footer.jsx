import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      {/* // <!-- Footer --> */}
      <footer
        className="text-center text-lg-start bg-light text-muted"
        style={{ height: "500px" }}
      >
        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row pt-5">
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4 d-flex align-items-center">
                {/* policy */}
                {/* icon */}
                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/icon_policy_page_1.png?v=3193"
                  alt="policy icon"
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="ms-2 bg-light">
                  <h6 className="text-uppercase fw-bold m-0 mt-3">
                    CHÍNH SÁCH GIAO HÀNG
                  </h6>
                  <p style={{ fontSize: "12px" }}>
                    Nhận hàng và thanh toán tại nhà
                  </p>
                </div>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4 d-flex align-items-center">
                {/* policy */}
                {/* icon */}
                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/icon_policy_page_2.png?v=3193"
                  alt="policy icon"
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="ms-2 bg-light">
                  <h6 className="text-uppercase fw-bold m-0 mt-3">
                    ĐỔI TRẢ DỄ DÀNG
                  </h6>
                  <p style={{ fontSize: "12px" }}>1 đổi 1 trong 7 ngày</p>
                </div>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4 d-flex align-items-center">
                {/* policy */}
                {/* icon */}
                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/icon_policy_page_2.png?v=3193"
                  alt="policy icon"
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="ms-2 bg-light">
                  <h6 className="text-uppercase fw-bold m-0 mt-3">
                    THANH TOÁN TIỆN LỢI
                  </h6>
                  <p style={{ fontSize: "12px" }}>
                    Trả tiền mặt, CK, Trà góp 0%
                  </p>
                </div>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4 d-flex align-items-center">
                {/* policy */}
                {/* icon */}
                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/icon_policy_page_4.png?v=3193"
                  alt="policy icon"
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="ms-2 bg-light">
                  <h6 className="text-uppercase fw-bold m-0 mt-3">
                    HỖ TRỢ NHIỆT TÌNH
                  </h6>
                  <p style={{ fontSize: "12px" }}>
                    Tư vấn, giải đáp mọi thắc mắc
                  </p>
                </div>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
            {/* <!-- Grid row --> */}
            {/* hidden only on mobile screen  */}
            <div className="row mt-3 d-none d-sm-flex">
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                {/*  */}
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2 heading-footer-column">
                  GIỚI THIỆU THNS
                </h6>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Về chúng tôi
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Tư vấn mua hàng
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Tuyển dụng
                  </a>
                </p>
                <p>
                  <a href="" className="me-2 text-reset">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="me-2 text-reset">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="me-2 text-reset">
                    <i className="fab fa-google"></i>
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2 heading-footer-column">
                  CHÍNH SÁCH CHUNG
                </h6>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Chính sách trả góp
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Chính sách bảo mật
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Chính sách giải quyết khiếu nại
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Chính sách bảo vệ thông tin cá nhân
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Chính sách bảo hành
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Chính sách đổi - trả hàng
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2 heading-footer-column">
                  THÔNG TIN KHUYẾN MÃI
                </h6>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Tổng hợp khuyến mãi
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    VGA Giảm Sâu
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Laptop 1.990k - Giảm đến 50%
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2 heading-footer-column">
                  HỖ TRỢ KHÁCH HÀNG
                </h6>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Tổng hợp Hotline CSKH, phản ánh.
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Thông tin thanh toán
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Lắp đặt phòng net
                  </a>
                </p>
                <p style={{ fontSize: "14px" }} className="m-0 mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-dark"
                    style={{ fontWeight: 300 }}
                  >
                    Thiết bị Mining
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
