import React from "react";
import { useParams } from "react-router-dom";
import HeaderPage from "../components/headerPage/HeaderPage";
import MainMenu from "../components/mainMenu/MainMenu";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Footer from "../components/footer/Footer";
import MainProductDetail from "../components/mainProductDetail/MainProductDetail";

const ProductDetail = () => {
  return (
    <>
      {/* <HeaderPage /> */}
      <MainMenu />
      <Breadcrumb breadcrumbContents={[""]} />
      <MainProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetail;
