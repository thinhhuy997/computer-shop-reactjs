import React from "react";
import "./mainMenu.css";
import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <div className="bg-danger">
      <div className="container">
        <div className="row d-none d-lg-flex" style={{ height: "52px" }}>
          <div className="col-md-12 d-flex align-items-center">
            <ul className="menu list-unstyled list-inline d-flex align-items-center m-0 p-0">
              <li>
                <Link
                  to={"/in-dev-stage"}
                  className="text-white text-decoration-none fw-bold text-uppercase ms-5 ps-5"
                  //   style={{ w }}
                >
                  lắp đặt phòng net
                </Link>
              </li>
              <li>
                <Link
                  to={"/in-dev-stage"}
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Trả Góp
                </Link>
              </li>
              <li>
                <Link
                  to={"/in-dev-stage"}
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  bảng giá
                </Link>
              </li>
              <li>
                <Link
                  to={"/in-dev-stage"}
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Xây dựng cấu hình
                </Link>
              </li>
              <li>
                <Link
                  to={"/in-dev-stage"}
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Kiểm tra bảo hành
                </Link>
              </li>
              <li>
                <Link
                  to={"/in-dev-stage"}
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Thiết bị mining
                </Link>
              </li>
              <li>
                <Link
                  to={"/in-dev-stage"}
                  className="text-white text-decoration-none fw-bold text-uppercase"
                  //   style={{ w }}
                >
                  Dịch vụ tận nơi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
