import React from "react";
import "./headingBar.css";
const HeadingBar = (props) => {
  const headingBarName = props.headingBarName;
  return (
    <div
      className="col p-0 d-flex align-items-center bg-light"
      style={{ height: "45px" }}
    >
      <div className="d-flex align-items-center blockTitle">
        <a
          href="#"
          className="text-decoration-none d-flex align-items-center ps-3 py-1 pe-2  bg-danger"
        >
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
        </a>
      </div>
    </div>
  );
};

export default HeadingBar;
