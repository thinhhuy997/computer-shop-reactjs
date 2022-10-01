import React from "react";
import HeaderPage from "../components/headerPage/HeaderPage";
import MainMenu from "../components/mainMenu/MainMenu";
import IntroductorySection from "../components/introductorySection/IntroductorySection";
import BestSeller from "../components/bestSeller/BestSeller";
import ShowingProduct from "../components/showingProduct/ShowingProduct";
import Footer from "../components/footer/Footer";

const laptop_products = [
  {
    name: "Màn hình LCD 20″ Dahua DHI-LM19-A200 HD TN 60Hz 5Ms",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/07/Man-hinh-LCD-19-Dahua-DHI-LM19-A200-HD-TN-60Hz-5Ms-Chinh-Hang.jpg",
    price: "1,790,000",
  },
  {
    name: "Màn hình LCD 24″ MSI Pro MP241X FHD VA 75Hz 8Ms",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/03/Man-hinh-LCD-24-MSI-Pro-MP241X-FHD-VA-75Hz-8Ms-1.jpg",
    price: "2,650,000",
  },
  {
    name: "Laptop Dell Vostro 3405 (P132G002ABL)",
    thumbnail:
      "https://product.hstatic.net/200000420363/product/dell-vostro-3405-p132g002ablf2_d3d962799d424205a505696aff236f33_master.jpg",
    price: "10,590,000",
  },
  {
    name: "Laptop MSI GF63 Thin 11UC-443VN: I5 11400H, RTX 3050",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/02/Laptop-Acer-Gaming-Aspire-7-A715-75G-58U4.jpg",
    price: "17,390,000",
  },
  {
    name: "Ram DDR4 Kingston 8G/3200 Fury Beast (1x 8GB)",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/11/R4_KT_FR_Beast_8G3200.jpg",
    price: "680,000",
  },
  {
    name: "Ram DDR4 ADATA XPG SPECTRIX D50 8G/3600 RGB",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/08/Ram-DDR4-ADATA-XPG-SPECTRIX-D50-1.jpg",
    price: "990,000",
  },
  {
    name: "VGA Asus GTX 1660 Super 6G TUF Gaming 2 Fan (TUF-",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/03/VGA-Asus-GTX-1660-Super-6G-TUF-Gaming-2-Fan-TUF-GTX1660S-O6G-GAMING.jpg",
    price: "4,390,000",
  },
  {
    name: "CPU Intel Core I5 12400F Tray Không Fan (LGA1700, 3.00",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/03/12400.jpg",
    price: "3,990,000",
  },
  {
    name: "CPU Intel Core i5 12400F Box Chính Hãng (2.50 Up to",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/12/CPU-i5-12400F_BCH.jpg",
    price: "4,450,000",
  },
  {
    name: "CPU Intel Core i3 12100F Box Chính Hãng (3.30 Up to",
    thumbnail:
      "https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2022/01/CPU_I3-12100F_BCT-300x300-1.jpg",
    price: "2,590,000",
  },
];

const Home = () => {
  return (
    <>
      <HeaderPage />
      <MainMenu />
      <IntroductorySection />
      <BestSeller />
      {/* Showing product - pc */}
      <ShowingProduct
        headingBarName="PC Văn Phòng"
        items={laptop_products}
        idControl="sliderControl-pc-showing-product-1"
      />
      {/* Showing product - pc gaming */}
      <ShowingProduct
        headingBarName="PC gaming"
        items={laptop_products}
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
