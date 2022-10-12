import React from "react";
import { Link } from "react-router-dom";
import "./hoverMenuButton.css";
const HoverMenuButton = (props) => {
  const imageLink = props.imageLink;
  const categoryName = props.categoryName;
  const textDanger = props.textDanger;
  return (
    <>
      <li className="w-100 d-flex navigation" style={{ zIndex: "100" }}>
        <div className="w-100">
          <a
            href="#"
            className="rounded-0 d-flex align-items-center justify-content-between border-bottom ps-1"
          >
            <div className="ps-2">
              {/* icon */}
              <img
                src={imageLink}
                alt="category img"
                style={{ width: "24px", height: "25px" }}
              />
              {/* category name */}
              <span
                className="mx-2 text-capitalize category-name"
                style={{
                  fontSize: "14px",
                }}
              >
                {categoryName}
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-right pe-1 fs-8"
              style={{ color: "#999" }}
            ></i>
          </a>
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
                      <p className="m-0 item-name my-2">
                        Thùng Kéo - Túi Đựng Cá
                      </p>
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
                      <p className="m-0 item-name my-2">
                        Rọng Đựng Cá - Xích Cá
                      </p>
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
                      <p className="m-0 item-name mb-2">
                        Hộp Đựng Cần - Túi Cần
                      </p>
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
                      <p className="m-0 item-name my-2">
                        Kìm Gỡ Lưỡi - Kìm Kẹp Cá
                      </p>
                      <p className="m-0 item-name my-2">
                        Bát Hoà Mồi - Bát Mồi
                      </p>
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
        </div>
      </li>
    </>
  );
};

export default HoverMenuButton;
