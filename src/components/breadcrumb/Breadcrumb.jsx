import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = (props) => {
  const breadcrumbContents = props.breadcrumbContents;
  return (
    <div className="d-none d-sm-block" style={{ backgroundColor: "#efefef" }}>
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
                {breadcrumbContents.map((brc_item) => (
                  <li class="breadcrumb-item">
                    <Link to="#" className="text-decoration-none text-muted">
                      {brc_item}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
