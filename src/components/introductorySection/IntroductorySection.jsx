import React from "react";
import ReactPlayer from "react-player";
import HoverMenuButton from "../hoverMenu/HoverMenuButton";
import { Link } from "react-router-dom";
// import Carousel from "../carousel/Carousel";
import "./introductorySection.css";

const IntroductorySection = () => {
  const navigationContent1 = (
    <div className="navigation-content shadow border">
      {/* <!-- Footer --> */}
      <div class="text-center text-lg-start bg-white text-muted">
        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start">
            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              {/* CPU - Bộ vi xử lý */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to="/search?q=cpu"
                  class="text-uppercase fw-bold mb-3 item-header">
                  CPU - Bộ vi xử lý
                </Link>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  CPU Intel
                </Link>
                <Link
                  to="/search?q=intel%20core%20i3"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Intel Core I3
                </Link>
                <Link
                  to="/search?q=intel%20core%20i5"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Intel Core I5
                </Link>
                <Link
                  to="/search?q=intel%20core%20i7"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Intel Core I7
                </Link>
                <Link
                  to="/search?q=intel%20core%20i9"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Intel Core I9
                </Link>

                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  CPU AMD
                </Link>
                <Link
                  to="/search?q=ryzen 7"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  AMD 7000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 5"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  AMD 5000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 4"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  AMD 4000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 3"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  AMD 3000 Series
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* mainboard */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/mainboard"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  Maiboard - Bo mạch chủ
                </Link>
                <Link
                  to="/search?q=mainboard gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard Gigabyte
                </Link>
                <Link
                  to="/search?q=mainboard asus"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard Asus
                </Link>
                <Link
                  to="/search?q=mainboard asrock"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard Asrock
                </Link>
                <Link
                  to="/search?q=mainboard msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard MSI
                </Link>
                <Link
                  to="/search?q=mainboard server"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard Server
                </Link>
                <Link
                  to="/search?q=mainboard huananzhi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard huananzhi
                </Link>
                <Link
                  to="/search?q=mainboard vsp"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard VSP
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* VGA - Card Màn Hình */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to="/collections/graphic-card"
                  class="text-uppercase fw-bold mb-3 item-header">
                  VGA - Card Màn Hình
                </Link>
                <Link
                  to="/search?q=vga asus"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Asus
                </Link>
                <Link
                  to="/search?q=vga gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Gigabyte
                </Link>
                <Link
                  to="/search?q=vga radeon"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Radeon
                </Link>
                <Link
                  to="/search?q=vga asrock"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Asrock
                </Link>
                <Link
                  to="/search?q=vga msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA MSI
                </Link>
                <Link
                  to="/search?q=vga powercolor"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA PowerColor
                </Link>
                <Link
                  to="/search?q=vga corlorful"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Colorful
                </Link>
                <Link
                  to="/search?q=vga zotac"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Zotac
                </Link>
                <Link
                  to="/search?q=vga zotac"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Zotac
                </Link>
                <Link
                  to="/search?q=vga nvidia"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Nvidia
                </Link>
                <Link
                  to="/search?q=vga inno3d"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Inno3D
                </Link>
                <Link
                  to="/search?q=vga intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Intel
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* Case - Thùng Máy */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/case"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  Case - Thùng máy
                </Link>
                <Link
                  to="/search?q=case msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case MSI
                </Link>
                <Link
                  to="/search?q=case deepcool"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Deepcool
                </Link>
                <Link
                  to="/search?q=case jetek"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Jetek
                </Link>
                <Link
                  to="/search?q=case vsp"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case VSP
                </Link>
                <Link
                  to="/search?q=case thermaltake"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Thermaltake
                </Link>
                <Link
                  to="/search?q=case Xigmatek"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Thermaltake
                </Link>
                <Link
                  to="/search?q=case mik"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case MIK
                </Link>
                <Link
                  to="/search?q=case msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case MSI
                </Link>
                <Link
                  to="/search?q=case montech"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Montech
                </Link>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}

            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              {/* PSU - Nguồn máy tính */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to="/collections/psu"
                  class="text-uppercase fw-bold mb-3 item-header">
                  PSU - Nguồn máy tính
                </Link>
                <Link
                  to="/search?q=Nguồn Cooler Master"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Cooler Master
                </Link>
                <Link
                  to="/search?q=Nguồn Corsair"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Corsair
                </Link>
                <Link
                  to="/search?q=Nguồn Sagotep"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Sagotep
                </Link>
                <Link
                  to="/search?q=Nguồn SilverStone"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn SilverStone
                </Link>
                <Link
                  to="/search?q=Nguồn SilverStone"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Xigmatek
                </Link>
                <Link
                  to="/search?q=Nguồn MSI"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn MSI
                </Link>
                <Link
                  to="/search?q=Nguồn Antec"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Antec
                </Link>
                <Link
                  to="/search?q=Nguồn Gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Gigabyte
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* SSD - HDD */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/hard-drive"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  SSD - HDD
                </Link>
                <Link
                  to="/search?q=Billion Reservoir"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Billion Reservoir
                </Link>
                <Link
                  to="/search?q=SSD Billion Reservoir"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Billion Reservoir
                </Link>
                <Link
                  to="/search?q=SSD Lexar"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Lexar
                </Link>
                <Link
                  to="/search?q=SSD ADATA"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD ADATA
                </Link>
                <Link
                  to="/search?q=SSD Western"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Western
                </Link>
                <Link
                  to="/search?q=SSD Samsung"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Samsung
                </Link>
                <Link
                  to="/search?q=SSD Kingston"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Kingston
                </Link>
                <Link
                  to="/search?q=SSD Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Kingmax
                </Link>
                <Link
                  to="/search?q=HDD Seagate"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  HDD Seagate
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* Bộ nhớ RAM */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/ram"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  Bộ nhớ RAM
                </Link>
                <Link
                  to="/search?q=ram ddr5"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram DDR5
                </Link>
                <Link
                  to="/search?q=ram ddr4"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram DDR4
                </Link>
                <Link
                  to="/search?q=ram ddr3"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram DDR3
                </Link>
                <Link
                  to="/search?q=ram rgb"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram LED RGB
                </Link>
                <Link
                  to="/search?q=ram gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Gigabyte
                </Link>
                <Link
                  to="/search?q=ram corsair"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Corsair
                </Link>
                <Link
                  to="/search?q=ram Gskill"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Gskill
                </Link>
                <Link
                  to="/search?q=ram Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Kingmax
                </Link>
                <Link
                  to="/search?q=ram Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Galax
                </Link>
                <Link
                  to="/search?q=ram Adata"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Adata
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* FAN RGB - Tản nhiệt */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/monitor"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  Màn Hình
                </Link>
                <Link
                  to="/search?q=Màn hình Samsung"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình Samsung
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình Dell
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình Acer
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình Asus
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình LG
                </Link>
                <Link
                  to="/search?q=Màn hình 144hz"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình 144hz
                </Link>
                <Link
                  to="/search?q=Màn hình 165hz"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình 165hz
                </Link>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}
      </div>
      {/* <!-- Footer --> */}
    </div>
  );

  const navigationContent2 = (
    <div className="navigation-content shadow border">
      {/* <!-- Footer --> */}
      <div class="text-center text-lg-start bg-white text-muted">
        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start">
            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              {/* VGA - Card Màn Hình */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to="/collections/graphic-card"
                  class="text-uppercase fw-bold mb-3 item-header">
                  VGA - Card Màn Hình
                </Link>
                <Link
                  to="/search?q=vga asus"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Asus
                </Link>
                <Link
                  to="/search?q=vga gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Gigabyte
                </Link>
                <Link
                  to="/search?q=vga radeon"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Radeon
                </Link>
                <Link
                  to="/search?q=vga asrock"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Asrock
                </Link>
                <Link
                  to="/search?q=vga msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA MSI
                </Link>
                <Link
                  to="/search?q=vga powercolor"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA PowerColor
                </Link>
                <Link
                  to="/search?q=vga corlorful"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Colorful
                </Link>
                <Link
                  to="/search?q=vga zotac"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Zotac
                </Link>
                <Link
                  to="/search?q=vga zotac"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Zotac
                </Link>
                <Link
                  to="/search?q=vga nvidia"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Nvidia
                </Link>
                <Link
                  to="/search?q=vga inno3d"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Inno3D
                </Link>
                <Link
                  to="/search?q=vga intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  VGA Intel
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* CPU - Bộ vi xử lý */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to="/search?q=cpu"
                  class="text-uppercase fw-bold mb-3 item-header">
                  CPU - Bộ vi xử lý
                </Link>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  CPU Intel
                </Link>
                <Link
                  to="/search?q=intel%20core%20i3"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Intel Core I3
                </Link>
                <Link
                  to="/search?q=intel%20core%20i5"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Intel Core I5
                </Link>
                <Link
                  to="/search?q=intel%20core%20i7"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Intel Core I7
                </Link>
                <Link
                  to="/search?q=intel%20core%20i9"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Intel Core I9
                </Link>

                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  CPU AMD
                </Link>
                <Link
                  to="/search?q=ryzen 7"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  AMD 7000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 5"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  AMD 5000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 4"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  AMD 4000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 3"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  AMD 3000 Series
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* Case - Thùng Máy */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/case"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  Case - Thùng máy
                </Link>
                <Link
                  to="/search?q=case msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case MSI
                </Link>
                <Link
                  to="/search?q=case deepcool"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Deepcool
                </Link>
                <Link
                  to="/search?q=case jetek"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Jetek
                </Link>
                <Link
                  to="/search?q=case vsp"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case VSP
                </Link>
                <Link
                  to="/search?q=case thermaltake"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Thermaltake
                </Link>
                <Link
                  to="/search?q=case Xigmatek"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Thermaltake
                </Link>
                <Link
                  to="/search?q=case mik"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case MIK
                </Link>
                <Link
                  to="/search?q=case msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case MSI
                </Link>
                <Link
                  to="/search?q=case montech"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Case Montech
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* mainboard */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/mainboard"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  Maiboard - Bo mạch chủ
                </Link>
                <Link
                  to="/search?q=mainboard gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard Gigabyte
                </Link>
                <Link
                  to="/search?q=mainboard asus"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard Asus
                </Link>
                <Link
                  to="/search?q=mainboard asrock"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard Asrock
                </Link>
                <Link
                  to="/search?q=mainboard msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard MSI
                </Link>
                <Link
                  to="/search?q=mainboard server"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard Server
                </Link>
                <Link
                  to="/search?q=mainboard huananzhi"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard huananzhi
                </Link>
                <Link
                  to="/search?q=mainboard vsp"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Mainboard VSP
                </Link>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}

            {/* <!-- Grid row --> */}
            <div class="row pt-3">
              {/* <!-- Grid column --> */}
              {/* Bộ nhớ RAM */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/ram"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  Bộ nhớ RAM
                </Link>
                <Link
                  to="/search?q=ram ddr5"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram DDR5
                </Link>
                <Link
                  to="/search?q=ram ddr4"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram DDR4
                </Link>
                <Link
                  to="/search?q=ram ddr3"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram DDR3
                </Link>
                <Link
                  to="/search?q=ram rgb"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram LED RGB
                </Link>
                <Link
                  to="/search?q=ram gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Gigabyte
                </Link>
                <Link
                  to="/search?q=ram corsair"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Corsair
                </Link>
                <Link
                  to="/search?q=ram Gskill"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Gskill
                </Link>
                <Link
                  to="/search?q=ram Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Kingmax
                </Link>
                <Link
                  to="/search?q=ram Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Galax
                </Link>
                <Link
                  to="/search?q=ram Adata"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Ram Adata
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* FAN RGB - Tản nhiệt */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/monitor"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  Màn Hình
                </Link>
                <Link
                  to="/search?q=Màn hình Samsung"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình Samsung
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình Dell
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình Acer
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình Asus
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình LG
                </Link>
                <Link
                  to="/search?q=Màn hình 144hz"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình 144hz
                </Link>
                <Link
                  to="/search?q=Màn hình 165hz"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Màn hình 165hz
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* PSU - Nguồn máy tính */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to="/collections/psu"
                  class="text-uppercase fw-bold mb-3 item-header">
                  PSU - Nguồn máy tính
                </Link>
                <Link
                  to="/search?q=Nguồn Cooler Master"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Cooler Master
                </Link>
                <Link
                  to="/search?q=Nguồn Corsair"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Corsair
                </Link>
                <Link
                  to="/search?q=Nguồn Sagotep"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Sagotep
                </Link>
                <Link
                  to="/search?q=Nguồn SilverStone"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn SilverStone
                </Link>
                <Link
                  to="/search?q=Nguồn SilverStone"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Xigmatek
                </Link>
                <Link
                  to="/search?q=Nguồn MSI"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn MSI
                </Link>
                <Link
                  to="/search?q=Nguồn Antec"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Antec
                </Link>
                <Link
                  to="/search?q=Nguồn Gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  Nguồn Gigabyte
                </Link>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* SSD - HDD */}
              <div class="col-md-3 col-lg-4 col-xl-3 me-auto mb-4">
                {/* <!-- Content --> */}
                {/* <!-- Content --> */}
                <Link
                  to={"/collections/hard-drive"}
                  class="text-uppercase fw-bold mb-3 item-header">
                  SSD - HDD
                </Link>
                <Link
                  to="/search?q=Billion Reservoir"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Billion Reservoir
                </Link>
                <Link
                  to="/search?q=SSD Billion Reservoir"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Billion Reservoir
                </Link>
                <Link
                  to="/search?q=SSD Lexar"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Lexar
                </Link>
                <Link
                  to="/search?q=SSD ADATA"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD ADATA
                </Link>
                <Link
                  to="/search?q=SSD Western"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Western
                </Link>
                <Link
                  to="/search?q=SSD Samsung"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Samsung
                </Link>
                <Link
                  to="/search?q=SSD Kingston"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Kingston
                </Link>
                <Link
                  to="/search?q=SSD Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  SSD Kingmax
                </Link>
                <Link
                  to="/search?q=HDD Seagate"
                  className="m-0 p-0 pb-1 item-name bg-transparent">
                  HDD Seagate
                </Link>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}
      </div>
      {/* <!-- Footer --> */}
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f4f8fa" }}>
      <div className="container">
        <div className="row">
          {/* desktop */}
          <div className="col-12 p-0 d-none d-md-flex">
            {/* SIDE BAR */}
            <div
              className="d-none d-xl-flex flex-column align-items-start p-0 border-top border-start border-end border-1 bg-white rounded pt-2 navigation--wrapper"
              style={{ height: "100%", minWidth: "270px" }}>
              <HoverMenuButton
                categoryName="Linh kiện mới"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_1.png?v=4006"
                navigationContent={navigationContent1}
              />
              <HoverMenuButton
                categoryName="Linh kiện cũ"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_1.png?v=4006"
                navigationContent={navigationContent2}
              />
              <HoverMenuButton
                categoryName="Laptop chính hãng"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_3.png?v=4065"
              />
              <HoverMenuButton
                categoryName="PC gaming, Đồ hoạ, Audio"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_4.png?v=4065"
              />
              <HoverMenuButton
                categoryName="PC Văn Phòng, Mini PC, AiO"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_5.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Màn Hình Máy Tính"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_6.png?v=4065"
              />
              <HoverMenuButton
                categoryName="SSD, HDD, Thiết Bị Lưu Trữ"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_7.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Bàn, Ghế Gaming"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_8.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Phím, Chuột, Tai Nghe"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_9.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Phụ kiện chung"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_10.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Thiết bị âm thanh"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_11.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Phụ kiện và phần mềm"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_12.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Camera, Thiết Bị Quan Sát"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_13.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Máy In"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_14.png?v=4065"
              />
              <HoverMenuButton
                categoryName="Tản Nhiệt PC"
                imageLink="//theme.hstatic.net/200000420363/1000874510/14/nav_15.png?v=4065"
              />
            </div>
            {/* CAROUSEL AND AD IMAGES*/}
            <div className="row introductory-wrapper introductory-ad-carousel">
              {/* <div className="col-12"> */}
              {/* <div className="row main-introductory-ads"> */}
              {/* carousel */}
              <div className="col-8 p-0">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade w-100"
                  data-bs-ride="carousel">
                  <div className="carousel-inner introductory-carousel w-100">
                    <div className="carousel-item active">
                      <img
                        src="https://file.hstatic.net/200000420363/file/slider_1_image_fc5568fef7374019986e1a38ac82ad26.jpg"
                        className="d-block w-100 introductory-carousel-img"
                        alt="..."
                        // style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://file.hstatic.net/200000420363/file/sli-asus_8426a9a368cb4e11b6319b4d7d2eac6e.jpg"
                        className="d-block w-100 introductory-carousel-img"
                        alt="..."
                        // style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://file.hstatic.net/200000420363/file/slider_3_image_a51ce838ff07489f89b71c0f13c94bf1.jpg"
                        className="d-block w-100 introductory-carousel-img"
                        alt="..."
                        // style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev">
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next">
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              {/* RIGHT SIDE ADS */}
              <div className="col-4 ps-1">
                <div className="right-side-ads">
                  <img
                    src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_1.jpg?v=4065"
                    alt=""
                    className="w-100 test-img"
                    style={{ objectFit: "fill" }}
                  />
                  <img
                    src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_1.jpg?v=4065"
                    alt=""
                    className="w-100 test-img mt-1"
                    style={{ objectFit: "fill" }}
                  />
                </div>
              </div>
              {/* </div> */}
              {/* </div> */}

              {/* BOTTOM ADS */}

              <div className="col-12 d-flex p-0 w-100 bottom-ads">
                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_3.jpg?v=4065"
                  alt=""
                  style={{ width: "32.7%" }}
                  className="me-1"
                />

                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_3.jpg?v=4065"
                  alt=""
                  style={{ width: "32.7%" }}
                  className="me-1"
                />

                <img
                  src="//theme.hstatic.net/200000420363/1000874510/14/banner_right_3.jpg?v=4065"
                  alt=""
                  style={{ width: "32.7%" }}
                />
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="col-12 d-sm-block d-md-none">
            {/* mobile carousel*/}
            <div className="introductory-wrapper introductory-ad-carousel">
              <div className="main-introductory-ads">
                {/* carousel */}
                <div
                  id="introductoryCarouselMobile"
                  className="carousel slide carousel-fade d-flex"
                  data-bs-ride="carousel">
                  <div className="carousel-inner introductory-carousel-mobile">
                    <div className="carousel-item active">
                      <img
                        src="https://file.hstatic.net/200000420363/file/slider_1_image_fc5568fef7374019986e1a38ac82ad26.jpg"
                        className="d-block introductory-carousel-img w-100"
                        alt="..."
                        // style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://file.hstatic.net/200000420363/file/sli-asus_8426a9a368cb4e11b6319b4d7d2eac6e.jpg"
                        className="d-block introductory-carousel-img w-100"
                        alt="..."
                        // style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://file.hstatic.net/200000420363/file/slider_3_image_a51ce838ff07489f89b71c0f13c94bf1.jpg"
                        className="d-block introductory-carousel-img w-100"
                        alt="..."
                        // style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#introductoryCarouselMobile"
                    data-bs-slide="prev">
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#introductoryCarouselMobile"
                    data-bs-slide="next">
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductorySection;
