import React from "react";
import "./navigationBar.css";

const NavigationBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-none d-md-flex justify-content-start px-0">
          {/* category header */}
          <div
            className="text-center py-1 text-white d-flex justify-content-center align-items-center rounded category-header"
            style={{
              minWidth: "270px",
              minHeight: "35px",
              backgroundColor: "#505050",
            }}
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
          {/* nav menus */}
          <div className="row" style={{ width: "82%", paddingLeft: "5px" }}>
            <div className="col-12">
              <div
                className="text-white d-flex align-items-center justify-content-between py-1 rounded custom-navbar"
                style={{ backgroundColor: "#9f9f9f", minHeight: "35px" }}
              >
                <div className="d-flex align-items-center">
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
                <div className="d-flex align-items-center">
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
                <div className="d-flex align-items-center">
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
                <div className="d-flex align-items-center">
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
                <div className="d-flex align-items-center">
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
                <div className="d-flex align-items-center me-2">
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
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
