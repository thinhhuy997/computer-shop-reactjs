import React from "react";
import { Link } from "react-router-dom";
import "./headingBar.css";
const HeadingBar = (props) => {
  const headingBarName = props.headingBarName;
  const showAllUrl = props.showAllUrl;
  return (
    <div
      className="col p-0 d-flex align-items-center justify-content-between"
      style={{ height: "45px", backgroundColor: "white" }}
    >
      <div className="d-flex align-items-center blockTitle">
        <div className="text-decoration-none d-flex align-items-center ps-3 py-1 pe-2  bg-danger">
          <h2
            className="text-white text-uppercase bg-danger m-0"
            style={{
              lineHeight: "36px",
              fontWeight: 600,
              fontSize: "24px",
            }}
          >
            {headingBarName}
          </h2>
        </div>
      </div>

      <Link
        to={showAllUrl.toString()}
        className="btn rounded-pill border px-3 py-0 py-1"
        style={{ fontSize: "12px" }}
      >
        Xem tất cả &gt;&gt;
      </Link>
    </div>
  );
};

export default HeadingBar;
