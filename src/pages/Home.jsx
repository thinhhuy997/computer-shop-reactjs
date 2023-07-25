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
  const [intelCpus, setIntelCpus] = useState([]);
  const [amdCpus, setAmdCpus] = useState([]);
  const [monitorProducts, setMonitorProducts] = useState([]);
  const [pcgamings, setPcgamings] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [kmps, setKmps] = useState([]);
  const [gamingChairs, setGamingChairs] = useState([]);
  const [webcams, setWebcams] = useState([]);
  const [psus, setPsus] = useState([]);
  const [hardDrive, setHardDrive] = useState([]);

  const [mainboards, setMainboards] = useState([]);
  const [rams, setRams] = useState([]);
  const [cases, setCases] = useState([]);
  const [cameras, setCameras] = useState([]);

  // load vgas
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

  // load monitors
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

  // load pc-gaming
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=pc-gaming&limit=10`,
    })
      .then((res) => {
        setPcgamings(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load laptop
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=laptop-gaming&limit=10&offset=14`,
    })
      .then((res) => {
        setLaptops(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load keyboard-mouse-phone
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=keyboard-mouse-phone&limit=10&offset=`,
    })
      .then((res) => {
        setKmps(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load gaming-chair
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=gaming-chair&limit=10&offset=`,
    })
      .then((res) => {
        setGamingChairs(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load webcam
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=webcam&limit=10&offset=`,
    })
      .then((res) => {
        setWebcams(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load psu
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=psu&limit=10&offset=`,
    })
      .then((res) => {
        setPsus(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load hard-drive
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=hard-drive&limit=10&offset=`,
    })
      .then((res) => {
        setHardDrive(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load intel cpus
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?search=core+i7&limit=10`,
    })
      .then((res) => {
        setIntelCpus(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load amd cpus
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=cpu-amd&limit=10`,
    })
      .then((res) => {
        setAmdCpus(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load mainboards
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=mainboard&limit=10`,
    })
      .then((res) => {
        setMainboards(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load rams
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=ram&limit=10`,
    })
      .then((res) => {
        setRams(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load cases
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=case&limit=10`,
    })
      .then((res) => {
        setCases(res.data.results);
      })
      .catch((e) => console.dir(e));
  }, []);

  // load cameras
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://computer-shop-drf.onrender.com/api/product-list-create/?categories=camera&limit=10`,
    })
      .then((res) => {
        setCameras(res.data.results);
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
        idControl="sliderControl-vga-showing-product-1"
        showAllUrl="collections/graphic-card"
      />

      {/* Showing product - pc monitor */}
      <ShowingProduct
        headingBarName="Màn hình"
        items={monitorProducts}
        idControl="sliderControl-pcmonitor-showing-product-1"
        showAllUrl="collections/monitor"
      />

      {/* Showing product - pc gaming */}
      <ShowingProduct
        headingBarName="PC GAMING"
        items={pcgamings}
        idControl="sliderControl-pcgaming-showing-product-1"
        showAllUrl="collections/pc-gaming"
      />

      {/* Showing product - laptop */}
      <ShowingProduct
        headingBarName="Laptop"
        items={laptops}
        idControl="sliderControl-laptop-showing-product-1"
        showAllUrl="collections/laptop-gaming"
      />
      {/* Showing product - keyboard, mouse, phone */}
      <ShowingProduct
        headingBarName="Phím, Chuột, Tai Nghe"
        items={kmps}
        idControl="sliderControl-kmp-showing-product-1"
        showAllUrl="collections/keyboard-mouse-phone"
      />
      {/* Showing product - laptop */}
      <ShowingProduct
        headingBarName="Bàn ghế gaming"
        items={gamingChairs}
        idControl="sliderControl-deskchair-showing-product-1"
        showAllUrl="collections/gaming-chair"
      />
      {/* Showing product - webcam */}
      <ShowingProduct
        headingBarName="webcam"
        items={webcams}
        idControl="sliderControl-webcam-showing-product-1"
        showAllUrl="collections/webcam"
      />
      {/* Showing product - psu */}
      <ShowingProduct
        headingBarName="Nguồn máy tính"
        items={psus}
        idControl="sliderControl-psu-showing-product-1"
        showAllUrl="collections/psu"
      />
      {/* Showing product - harddrive */}
      <ShowingProduct
        headingBarName="BỘ NHỚ"
        items={hardDrive}
        idControl="sliderControl-harddrive-showing-product-1"
        showAllUrl="collections/hard-drive"
      />

      {/* Showing product - intel cpus */}
      <ShowingProduct
        headingBarName="Vi xử lý Intel"
        items={intelCpus}
        idControl="sliderControl-intel-showing-product-1"
        showAllUrl="collections/cpu-intel"
      />

      {/* Showing product - amd cpus */}
      <ShowingProduct
        headingBarName="Vi xử lý amd"
        items={amdCpus}
        idControl="sliderControl-amd-showing-product-1"
        showAllUrl="collections/cpu-amd"
      />

      {/* Showing product - mainboards */}
      <ShowingProduct
        headingBarName="Bo mạch chủ"
        items={mainboards}
        idControl="sliderControl-mainboards-showing-product-1"
        showAllUrl="collections/mainboard"
      />

      {/* Showing product - rams */}
      <ShowingProduct
        headingBarName="Bộ nhớ ram"
        items={rams}
        idControl="sliderControl-rams-showing-product-1"
        showAllUrl="collections/ram"
      />

      {/* Showing product - case */}
      <ShowingProduct
        headingBarName="Thùng máy - case"
        items={cases}
        idControl="sliderControl-case-showing-product-1"
        showAllUrl="collections/case"
      />

      {/* Showing product - amd cameras */}
      <ShowingProduct
        headingBarName="Camera"
        items={cameras}
        idControl="sliderControl-cameras-showing-product-1"
        showAllUrl="collections/camera"
      />

      <Footer />
    </>
  );
};

export default Home;
