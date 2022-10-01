import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = () => {
  return (
    <div style={{ backgroundColor: "#efefef" }}>
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-center">
            <nav aria-label="breadcrumb bg" style={{ fontSize: "14px" }}>
              <ol class="breadcrumb m-0 my-2">
                <li class="breadcrumb-item">
                  <Link to="#" className="text-decoration-none text-muted">
                    Trang chủ
                  </Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to="#" className="text-decoration-none text-muted">
                    Danh mục
                  </Link>
                </li>
                <li
                  class="breadcrumb-item active text-muted"
                  aria-current="page"
                >
                  CPU AMD Cũ
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
