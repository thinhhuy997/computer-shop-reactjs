import React from "react";
import HeaderPage from "../components/headerPage/HeaderPage";
import MainMenu from "../components/mainMenu/MainMenu";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Footer from "../components/footer/Footer";
import MainCollection from "../components/mainCollection/MainCollection";
import MainProductDetail from "../components/mainProductDetail/MainProductDetail";

const ProductDetail = () => {
  return (
    <>
      <HeaderPage />
      <MainMenu />
      <Breadcrumb />
      <MainProductDetail />
    </>
  );
};

export default ProductDetail;
