import React from "react";
import "./mainMenu.css";
const MainMenu = () => {
  return (
    <div className="bg-danger">
      <div className="container">
        <div className="row d-none d-lg-flex" style={{ height: "52px" }}>
          <div className="col-md-12 d-flex align-items-center">
            <ul className="menu list-unstyled list-inline d-flex align-items-center m-0 p-0">
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none fw-bold text-uppercase ms-5 ps-5"
                  //   style={{ w }}
                >
                  lắp đặt phòng net
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Trả Góp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  bảng giá
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Xây dựng cấu hình
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Kiểm tra bảo hành
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Thiết bị mining
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Dịch vụ tận nơi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
