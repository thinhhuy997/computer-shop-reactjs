import React from "react";
import { Link } from "react-router-dom";
import "./hoverMenuButton.css";
const HoverMenuButton = (props) => {
  const imageLink = props.imageLink;
  const categoryName = props.categoryName;
  const textDanger = props.textDanger;
  const navigationContent = props.navigationContent;
  console.log(navigationContent);
  return (
    <>
      <li className="d-flex navigation w-100" style={{ zIndex: "100" }}>
        <div className="mx-auto" style={{ width: "92%" }}>
          <a
            href="#"
            className="rounded-0 d-flex align-items-center justify-content-between border-bottom ps-1"
          >
            <div
              className="ps-2 d-flex align-items-center"
              style={{ width: "92%", height: "38px" }}
            >
              {/* icon */}
              <img
                src={imageLink}
                alt="category img"
                style={{ width: "20px", height: "20px" }}
              />
              {/* category name */}
              <span
                className="mx-2 text-capitalize category-name"
                style={{
                  fontSize: "13px",
                }}
              >
                {categoryName}
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-right pe-1 text-dark"
              style={{ color: "#999", fontSize: "10px" }}
            ></i>
          </a>
          {navigationContent}
        </div>
      </li>
    </>
  );
};

export default HoverMenuButton;
