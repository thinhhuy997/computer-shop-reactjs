import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../components/headerPage/HeaderPage";
import MainMenu from "../components/mainMenu/MainMenu";
import IntroductorySection from "../components/introductorySection/IntroductorySection";
import BestSeller from "../components/bestSeller/BestSeller";
import ShowingProduct from "../components/showingProduct/ShowingProduct";
import Footer from "../components/footer/Footer";
import NavigationBarHome from "../components/navigationBarHome/NavigationBarHome";

import CartContext from "../contexts/CartContext";

const laptop_products = [
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/laptop-gaming-msi-gf63-thin-11uc-443vn-_255e80469282415da9aa61986500a7d3_large.jpg",
    price: "1,790,000",
  },
];

const Home = () => {
  const [vgaProducts, setVgaProducts] = useState([]);
  const [monitorProducts, setMonitorProducts] = useState([]);
  const [officeLaptops, setOfficeLaptops] = useState([]);

  let navigate = useNavigate();

  const handleNavigateToProductDetailPath = (slug) => {
    navigate(`/product/${slug}`);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=graphic-card&limit=10`,
    })
      .then((res) => {
        setVgaProducts(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=monitor&limit=10`,
    })
      .then((res) => {
        setMonitorProducts(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  return (
    <>
      <NavigationBarHome />
      <IntroductorySection />
      {/* <BestSeller /> */}
      {/* Showing product - vga */}
      <ShowingProduct
        headingBarName="Card màn hình vga"
        items={vgaProducts}
        idControl="sliderControl-pc-showing-product-1"
      />
      {/* Showing product - pc gaming */}
      <ShowingProduct
        headingBarName="Màn hình"
        items={monitorProducts}
        idControl="sliderControl-pcgaming-showing-product-1"
      />
      {/* Showing product - laptop */}
      <ShowingProduct
        headingBarName="Laptop"
        items={laptop_products}
        idControl="sliderControl-laptop-showing-product-1"
      />
      {/* Showing product - keyboard, mouse, phone */}
      <ShowingProduct
        headingBarName="Phím, Chuột, Tai Nghe"
        items={laptop_products}
        idControl="sliderControl-kmp-showing-product-1"
      />
      {/* Showing product - laptop */}
      <ShowingProduct
        headingBarName="Bán ghế gaming"
        items={laptop_products}
        idControl="sliderControl-deskchair-showing-product-1"
      />
      <Footer />
    </>
  );
};

export default Home;
