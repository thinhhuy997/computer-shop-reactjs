import React from "react";
// import "./showingProduct.css";
import HeadingBar from "../headingBar/HeadingBar";
import Slider from "../slider/Slider";

const ShowingProduct = (props) => {
  const headingBarName = props.headingBarName;
  const products = props.items;
  const idControl = props.idControl;
  const showAllUrl = props.showAllUrl;
  const loading = props.loading;

  return (
    <div className="container">
      <div className="row mt-5">
        <HeadingBar headingBarName={headingBarName} showAllUrl={showAllUrl} />
      </div>
      <div className="row mt-2" style={{ backgroundColor: "white" }}>
        <Slider
          screens={["xl", "lg", "md", "sm"]}
          items={products}
          idControl={idControl}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ShowingProduct;
