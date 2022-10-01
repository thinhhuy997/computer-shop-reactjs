import React from "react";
import { Link } from "react-router-dom";
import ProductCarousel from "../productCarousel/ProductCarousel";
import "./mainProductDetail.css";
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();

const images = [
  {
    original:
      "https://product.hstatic.net/200000420363/product/lt_as_b1400ceae-ek4113-2_7e8b91e11c8842849e1b6c7a04950987_master.jpg",
  },
  {
    original:
      "https://product.hstatic.net/200000420363/product/amd-a4-3300-600x600_23b1704698a64c23a572cf49147d256a_master.jpg",
  },
  {
    original:
      "https://product.hstatic.net/200000420363/product/lt_as_b1400ceae-ek4113-2_7e8b91e11c8842849e1b6c7a04950987_master.jpg",
  },
];

const product_detail_info_rows_input = `<tr style="height: 19px;">
<td style="width: 45.5014%; height: 19px;">
  <strong>Hãng sản xuất</strong>
</td>
<td style="width: 54.4986%; height: 19px;">
  <strong>
    <span class="comma">Laptop Asus</span>
  </strong>
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 10px;">
  <strong>Tên sản phẩm</strong>
</td>
<td style="width: 54.4986%; height: 10px;">
  <h2 class="producttitle">
    <span style="font-size: 11pt;">
      Asus ExpertBook B1400CEAE-EK4113
    </span>
  </h2>
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 19px;">
  <strong>Bộ vi xử lý</strong>
</td>
<td style="width: 54.4986%; height: 19px; padding-left: 40px;">
  &nbsp;
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 15px;">Công nghệ CPU&nbsp;</td>
<td style="width: 54.4986%; height: 15px;">
  <span class="comma">Intel Core i5-1135G7</span>
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Số nhân</td>
<td style="width: 54.4986%; height: 18px;">4</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Số luồng</td>
<td style="width: 54.4986%; height: 18px;">8</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Tốc độ CPU</td>
<td style="width: 54.4986%; height: 18px;">2.40GHz</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Tốc độ tối đa</td>
<td style="width: 54.4986%; height: 18px;">4.20GHz</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Bộ nhớ đệm</td>
<td style="width: 54.4986%; height: 18px;">8MB Cache</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Bộ nhớ trong (RAM)</strong>
</td>
<td style="width: 54.4986%; height: 18px;">&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">RAM</td>
<td style="width: 54.4986%; height: 18px;">4GB DDR4</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Loại RAM</td>
<td style="width: 54.4986%; height: 18px;">DDR4</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Số khe cắm</td>
<td style="width: 54.4986%; height: 18px;">1 khe</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Ổ cứng</strong>
</td>
<td style="width: 54.4986%; height: 18px;">&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Dung lượng</td>
<td style="width: 54.4986%; height: 18px;">
  SSD 256GB M.2 NVMe PCIe&nbsp;
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Tốc độ vòng quay</td>
<td style="width: 54.4986%; height: 18px;">&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Khe cắm SSD mở rộng</strong>
</td>
<td style="width: 54.4986%; height: 18px;">-</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Ổ đĩa quang (ODD)</strong>
</td>
<td style="width: 54.4986%; height: 18px;">Không có&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Màn hình</strong>
</td>
<td style="width: 54.4986%; height: 18px;">&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Kích thước màn hình</td>
<td style="width: 54.4986%; height: 18px;">14.0-inch</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Độ phân giải</td>
<td style="width: 54.4986%; height: 18px;">FHD (1920 x 1080)</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 23px;">Công nghệ màn hình</td>
<td style="width: 54.4986%; height: 23px;">
  16:9, Wide view, Màn hình chống chói, LED Backlit, 250 nit, NTSC:
  45%
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Đồ Họa (VGA)</strong>
</td>
<td style="width: 54.4986%; height: 18px;">&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">Card màn hình</td>
<td style="width: 54.4986%; height: 18px;">Intel Iris Xe Graphics</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 17px;">Card mở rộng</td>
<td style="width: 54.4986%; height: 17px;">-</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 22px;">
  <strong>LOA</strong>
</td>
<td style="width: 54.4986%; height: 22px;">2 Loa</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 17px;">
  <strong>Kiểu Pin</strong>
</td>
<td style="width: 54.4986%; height: 17px;">3 Cells 42WHr</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Sạc pin</strong>
</td>
<td style="width: 54.4986%; height: 18px;">Đi kèm</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Hệ điều hành&nbsp;(bản quyền) đi kèm&nbsp;</strong>
</td>
<td style="width: 54.4986%; height: 18px;">Không</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Trọng Lượng</strong>
</td>
<td style="width: 54.4986%; height: 18px;" width="303">
  1.45 kg
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 17px;">
  <strong>Màu sắc</strong>
</td>
<td style="width: 54.4986%; height: 17px;">Đen</td>
</tr>
<tr style="height: 18px;">
<td style="width: 45.5014%; height: 18px;">
  <strong>Xuất Xứ</strong>
</td>
<td style="width: 54.4986%; height: 18px;">Trung Quốc</td>
</tr>`;

const MainProductDetail = () => {
  return (
    <div className="container" style={{ height: "1500px" }}>
      <div className="row">
        <div
          className="col-12 d-flex align-items-center justify-content-between border-bottom"
          style={{ height: "50px" }}
        >
          {/* product name */}
          <p className="m-0 p-0" style={{ fontSize: "16px", fontWeight: 500 }}>
            CPU AMD A4 3300 (2.50GHz, 2 Cores 2 Threads, FM1) TRAY
          </p>
          {/* facebook btn group */}
          <div className="d-flex">
            <button
              className="btn btn-primary p-0 px-1 d-flex align-items-center me-2"
              style={{ maxHeight: "20px" }}
            >
              <i class="fa-solid fa-thumbs-up" style={{ fontSize: "12px" }}></i>
              <span
                className="mx-2"
                style={{ fontSize: "12px", fontWeight: 500, marginTop: "2px" }}
              >
                Thích 0
              </span>
            </button>
            <button
              className="btn btn-primary p-0 px-1 d-flex align-items-center"
              style={{ maxHeight: "20px" }}
            >
              <i class="fa-solid fa-share" style={{ fontSize: "12px" }}></i>
              <span
                className="mx-2"
                style={{ fontSize: "12px", fontWeight: 500, marginTop: "2px" }}
              >
                Chia sẻ
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <ProductCarousel items={images} />
        </div>
        <div className="col-5">
          {/* price */}
          <div
            className="d-flex align-items-center border-bottom"
            style={{ height: "60px", fontWeight: 900, fontSize: "20px" }}
          >
            <span className="text-danger">110,000₫</span>
          </div>
          {/* buttons */}
          <p className="m-0 p-0 fw-bold mt-2 mb-3" style={{ fontSize: "13px" }}>
            Ưu đãi khi thanh toán
          </p>
          <div className="w-100">
            <button
              className="btn text-uppercase w-100 text-white py-2"
              style={{
                backgroundColor: "#fb6e2e",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              Mua Ngay
            </button>
            <div className="w-100 d-flex justify-content-between mt-2">
              <button
                className="btn btn-primary text-white"
                style={{
                  width: "49%",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "15px",
                }}
              >
                <span className="text-uppercase">Mua trả góp</span>
                <br />
                <span style={{ fontSize: "10px" }}>
                  Duyệt hồ sơ trong 5 phút
                </span>
              </button>
              <button
                className="btn btn-primary text-white"
                style={{
                  width: "49%",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "15px",
                }}
              >
                <span className="text-uppercase">trả góp 0% qua thẻ</span>
                <br />
                <span className="text-capitalize" style={{ fontSize: "10px" }}>
                  visa, mastercard, jcb, amex
                </span>
              </button>
            </div>
          </div>
          {/* contact line */}
          <p className="text-center mt-2" style={{ fontSize: "13px" }}>
            Gọi đặt mua{" "}
            <Link to="#" className="text-decoration-none">
              1900 0243{" "}
            </Link>{" "}
            (7:30 - 22:00)
          </p>
          {/* product detail information*/}
          <div className="product-detail-info">
            <h6 className="text-uppercase" style={{ fontWeight: 550 }}>
              Cấu hình chi tiết
            </h6>
            <table class="table table-striped table-product-detail-info">
              <tbody style={{ fontSize: "13px" }}>
                {htmlToReactParser.parse(product_detail_info_rows_input)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductDetail;
