import React from "react";
import ReactPlayer from "react-player";
import HoverMenuButton from "../hoverMenu/HoverMenuButton";
import { Link } from "react-router-dom";
// import Carousel from "../carousel/Carousel";
import "./introductorySection.css";

const IntroductorySection = () => {
  const navigationContent1 = (
    <div className="navigation-content shadow border">
      {/* <!-- Footer --> */}
      <div class="text-center text-lg-start bg-white text-muted">
        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start">
            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-3 item-header">
                  CPU - Bộ vi xử lý
                </p>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU Intel
                </Link>
                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU AMD
                </Link>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-3 item-header">
                  VGA - Card Màn Hình
                </p>
                <Link
                  to="/collections/vga"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Geforce
                </Link>
                <Link
                  to="/collections/vga"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA AMD
                </Link>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-3 item-header">
                  CPU - Bộ vi xử lý
                </p>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU Intel
                </Link>
                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU AMD
                </Link>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  LƯỠI CÂU ĐƠN / ĐÀI
                </p>
                <p className="m-0 item-name mb-2">Lưỡi Có Ngạnh</p>
                <p className="m-0 item-name my-2">Lưỡi Không Ngạnh</p>
                <p className="m-0 item-name my-2">Lưỡi Gamakatsu</p>
                <p className="m-0 item-name my-2">Lưỡi BKK</p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  MỒI CÂU ĐÀI
                </p>
                <p className="m-0 item-name mb-2">Mồi Bột Câu Đài</p>
                <p className="m-0 item-name my-2">Hương Liệu Câu Đài</p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  THÙNG - HỘP - BÀN ĐÀI
                </p>
                <p className="m-0 item-name mb-2">Thùng Câu Đài</p>
                <p className="m-0 item-name my-2">Bàn Địa Hình</p>
                <p className="m-0 item-name my-2">Ghế Địa Hình</p>
                <p className="m-0 item-name my-2">Phụ Kiện Thùng Đài</p>
                <p className="m-0 item-name my-2">Thùng Kéo - Túi Đựng Cá</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  VỢT - GÁC CẦN - RỌNG CÁ
                </p>
                <p className="m-0 item-name mb-2">
                  Mặt Vợt - Cán Vợt - Lưới Vợt
                </p>
                <p className="m-0 item-name my-2">Giá Cần - Đỡ Cần</p>
                <p className="m-0 item-name my-2">Rọng Đựng Cá - Xích Cá</p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  THỜI TRANG CÂU
                </p>
                <p className="m-0 item-name mb-2">Quần - Áo</p>
                <p className="m-0 item-name my-2">Mũ - Khăn Bịt Mặt</p>
                <p className="m-0 item-name my-2">Kính Câu</p>
                <p className="m-0 item-name my-2">Găng Tay - Bao Tay</p>
                <p className="m-0 item-name my-2">Giầy Câu</p>
                <p className="m-0 item-name my-2">Xịt Côn Trùng</p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  PHỤ KIỆN CÂU ĐÀI
                </p>
                <p className="m-0 item-name mb-2">Hộp Đựng Cần - Túi Cần</p>
                <p className="m-0 item-name my-2">Ghế Câu</p>
                <p className="m-0 item-name my-2">Ô - Dù Câu</p>
                <p className="m-0 item-name my-2">
                  Hộp phao - Thẻo - Trục - Thanh Quấn Chì
                </p>
                <p className="m-0 item-name my-2">Đèn - Pin - Cân</p>
                <p className="m-0 item-name my-2">
                  Chân Phao - Hạt Chặn - Mani - Khoá 8,9
                </p>
                <p className="m-0 item-name my-2">
                  Chì Lá - Chì Neo - Chì Xuyên Tâm
                </p>
                <p className="m-0 item-name my-2">Kìm Gỡ Lưỡi - Kìm Kẹp Cá</p>
                <p className="m-0 item-name my-2">Bát Hoà Mồi - Bát Mồi</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}
      </div>
      {/* <!-- Footer --> */}
    </div>
  );

  const navigationContent2 = (
    <div className="navigation-content shadow border">
      {/* <!-- Footer --> */}
      <div class="text-center text-lg-start bg-white text-muted">
        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start">
            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-3 item-header">
                  CPU - Bộ vi xử lý 2
                </p>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU Intel
                </Link>
                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU AMD
                </Link>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-3 item-header">
                  CPU - Bộ vi xử lý 2
                </p>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU Intel
                </Link>
                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU AMD
                </Link>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-3 item-header">
                  CPU - Bộ vi xử lý
                </p>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU Intel
                </Link>
                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU AMD
                </Link>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  LƯỠI CÂU ĐƠN / ĐÀI
                </p>
                <p className="m-0 item-name mb-2">Lưỡi Có Ngạnh</p>
                <p className="m-0 item-name my-2">Lưỡi Không Ngạnh</p>
                <p className="m-0 item-name my-2">Lưỡi Gamakatsu</p>
                <p className="m-0 item-name my-2">Lưỡi BKK</p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  MỒI CÂU ĐÀI
                </p>
                <p className="m-0 item-name mb-2">Mồi Bột Câu Đài</p>
                <p className="m-0 item-name my-2">Hương Liệu Câu Đài</p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  THÙNG - HỘP - BÀN ĐÀI
                </p>
                <p className="m-0 item-name mb-2">Thùng Câu Đài</p>
                <p className="m-0 item-name my-2">Bàn Địa Hình</p>
                <p className="m-0 item-name my-2">Ghế Địa Hình</p>
                <p className="m-0 item-name my-2">Phụ Kiện Thùng Đài</p>
                <p className="m-0 item-name my-2">Thùng Kéo - Túi Đựng Cá</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  VỢT - GÁC CẦN - RỌNG CÁ
                </p>
                <p className="m-0 item-name mb-2">
                  Mặt Vợt - Cán Vợt - Lưới Vợt
                </p>
                <p className="m-0 item-name my-2">Giá Cần - Đỡ Cần</p>
                <p className="m-0 item-name my-2">Rọng Đựng Cá - Xích Cá</p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  THỜI TRANG CÂU
                </p>
                <p className="m-0 item-name mb-2">Quần - Áo</p>
                <p className="m-0 item-name my-2">Mũ - Khăn Bịt Mặt</p>
                <p className="m-0 item-name my-2">Kính Câu</p>
                <p className="m-0 item-name my-2">Găng Tay - Bao Tay</p>
                <p className="m-0 item-name my-2">Giầy Câu</p>
                <p className="m-0 item-name my-2">Xịt Côn Trùng</p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                <p class="text-uppercase fw-bold mb-2 item-header">
                  PHỤ KIỆN CÂU ĐÀI
                </p>
                <p className="m-0 item-name mb-2">Hộp Đựng Cần - Túi Cần</p>
                <p className="m-0 item-name my-2">Ghế Câu</p>
                <p className="m-0 item-name my-2">Ô - Dù Câu</p>
                <p className="m-0 item-name my-2">
                  Hộp phao - Thẻo - Trục - Thanh Quấn Chì
                </p>
                <p className="m-0 item-name my-2">Đèn - Pin - Cân</p>
                <p className="m-0 item-name my-2">
                  Chân Phao - Hạt Chặn - Mani - Khoá 8,9
                </p>
                <p className="m-0 item-name my-2">
                  Chì Lá - Chì Neo - Chì Xuyên Tâm
                </p>
                <p className="m-0 item-name my-2">Kìm Gỡ Lưỡi - Kìm Kẹp Cá</p>
                <p className="m-0 item-name my-2">Bát Hoà Mồi - Bát Mồi</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}
      </div>
      {/* <!-- Footer --> */}
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f4f8fa" }}>
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
            <div className="row introductory-wrapper introductory-ad-carousel">
              <div className="col-12">
                <div className="row main-introductory-ads">
                  {/* carousel */}
                  <div className="col-8 p-0">
                    <div
                      id="carouselExampleFade"
                      className="carousel slide carousel-fade w-100"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner introductory-carousel w-100">
                        <div className="carousel-item active">
                          <img
                            src="https://file.hstatic.net/200000420363/file/slider_1_image_fc5568fef7374019986e1a38ac82ad26.jpg"
                            className="d-block w-100 introductory-carousel-img"
                            alt="..."
                            // style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://file.hstatic.net/200000420363/file/sli-asus_8426a9a368cb4e11b6319b4d7d2eac6e.jpg"
                            className="d-block w-100 introductory-carousel-img"
                            alt="..."
                            // style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://file.hstatic.net/200000420363/file/slider_3_image_a51ce838ff07489f89b71c0f13c94bf1.jpg"
                            className="d-block w-100 introductory-carousel-img"
                            alt="..."
                            // style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
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
                        data-bs-target="#carouselExampleFade"
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
                  {/* RIGHT SIDE ADS */}
                  <div className="col-4 ps-1">
                    <div className="right-side-ads">
                      <img
                        src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_1.jpg?v=4065"
                        alt=""
                        className="w-100 test-img"
                        style={{ objectFit: "fill" }}
                      />
                      <img
                        src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_1.jpg?v=4065"
                        alt=""
                        className="w-100 test-img mt-1"
                        style={{ objectFit: "fill" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM ADS */}

              <div className="col-12 d-flex p-0 w-100 bottom-ads">
                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_3.jpg?v=4065"
                  alt=""
                  style={{ width: "32.7%" }}
                  className="me-1"
                />

                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_3.jpg?v=4065"
                  alt=""
                  style={{ width: "32.7%" }}
                  className="me-1"
                />

                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_3.jpg?v=4065"
                  alt=""
                  style={{ width: "32.7%" }}
                />
              </div>
            </div>
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
  );
};

export default IntroductorySection;
