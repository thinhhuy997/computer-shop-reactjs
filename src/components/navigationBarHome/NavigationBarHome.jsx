import React from "react";
import "./navigationBarHome.css";
import { Link } from "react-router-dom";

const NavigationBarHome = () => {
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  CPU - Bộ vi xử lý
                </Link>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU Intel
                </Link>
                <Link
                  to="/search?q=intel%20core%20i3"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Intel Core I3
                </Link>
                <Link
                  to="/search?q=intel%20core%20i5"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Intel Core I5
                </Link>
                <Link
                  to="/search?q=intel%20core%20i7"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Intel Core I7
                </Link>
                <Link
                  to="/search?q=intel%20core%20i9"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Intel Core I9
                </Link>

                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU AMD
                </Link>
                <Link
                  to="/search?q=ryzen 7"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  AMD 7000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 5"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  AMD 5000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 4"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  AMD 4000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 3"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  Maiboard - Bo mạch chủ
                </Link>
                <Link
                  to="/search?q=mainboard gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard Gigabyte
                </Link>
                <Link
                  to="/search?q=mainboard asus"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard Asus
                </Link>
                <Link
                  to="/search?q=mainboard asrock"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard Asrock
                </Link>
                <Link
                  to="/search?q=mainboard msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard MSI
                </Link>
                <Link
                  to="/search?q=mainboard server"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard Server
                </Link>
                <Link
                  to="/search?q=mainboard huananzhi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard huananzhi
                </Link>
                <Link
                  to="/search?q=mainboard vsp"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  VGA - Card Màn Hình
                </Link>
                <Link
                  to="/search?q=vga asus"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Asus
                </Link>
                <Link
                  to="/search?q=vga gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Gigabyte
                </Link>
                <Link
                  to="/search?q=vga radeon"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Radeon
                </Link>
                <Link
                  to="/search?q=vga asrock"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Asrock
                </Link>
                <Link
                  to="/search?q=vga msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA MSI
                </Link>
                <Link
                  to="/search?q=vga powercolor"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA PowerColor
                </Link>
                <Link
                  to="/search?q=vga corlorful"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Colorful
                </Link>
                <Link
                  to="/search?q=vga zotac"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Zotac
                </Link>
                <Link
                  to="/search?q=vga zotac"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Zotac
                </Link>
                <Link
                  to="/search?q=vga nvidia"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Nvidia
                </Link>
                <Link
                  to="/search?q=vga inno3d"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Inno3D
                </Link>
                <Link
                  to="/search?q=vga intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  Case - Thùng máy
                </Link>
                <Link
                  to="/search?q=case msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case MSI
                </Link>
                <Link
                  to="/search?q=case deepcool"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case Deepcool
                </Link>
                <Link
                  to="/search?q=case jetek"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case Jetek
                </Link>
                <Link
                  to="/search?q=case vsp"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case VSP
                </Link>
                <Link
                  to="/search?q=case thermaltake"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case Thermaltake
                </Link>
                <Link
                  to="/search?q=case Xigmatek"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case Thermaltake
                </Link>
                <Link
                  to="/search?q=case mik"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case MIK
                </Link>
                <Link
                  to="/search?q=case msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case MSI
                </Link>
                <Link
                  to="/search?q=case montech"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  PSU - Nguồn máy tính
                </Link>
                <Link
                  to="/search?q=Nguồn Cooler Master"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Cooler Master
                </Link>
                <Link
                  to="/search?q=Nguồn Corsair"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Corsair
                </Link>
                <Link
                  to="/search?q=Nguồn Sagotep"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Sagotep
                </Link>
                <Link
                  to="/search?q=Nguồn SilverStone"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn SilverStone
                </Link>
                <Link
                  to="/search?q=Nguồn SilverStone"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Xigmatek
                </Link>
                <Link
                  to="/search?q=Nguồn MSI"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn MSI
                </Link>
                <Link
                  to="/search?q=Nguồn Antec"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Antec
                </Link>
                <Link
                  to="/search?q=Nguồn Gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  SSD - HDD
                </Link>
                <Link
                  to="/search?q=Billion Reservoir"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Billion Reservoir
                </Link>
                <Link
                  to="/search?q=SSD Billion Reservoir"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Billion Reservoir
                </Link>
                <Link
                  to="/search?q=SSD Lexar"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Lexar
                </Link>
                <Link
                  to="/search?q=SSD ADATA"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD ADATA
                </Link>
                <Link
                  to="/search?q=SSD Western"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Western
                </Link>
                <Link
                  to="/search?q=SSD Samsung"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Samsung
                </Link>
                <Link
                  to="/search?q=SSD Kingston"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Kingston
                </Link>
                <Link
                  to="/search?q=SSD Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Kingmax
                </Link>
                <Link
                  to="/search?q=HDD Seagate"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  Bộ nhớ RAM
                </Link>
                <Link
                  to="/search?q=ram ddr5"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram DDR5
                </Link>
                <Link
                  to="/search?q=ram ddr4"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram DDR4
                </Link>
                <Link
                  to="/search?q=ram ddr3"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram DDR3
                </Link>
                <Link
                  to="/search?q=ram rgb"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram LED RGB
                </Link>
                <Link
                  to="/search?q=ram gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Gigabyte
                </Link>
                <Link
                  to="/search?q=ram corsair"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Corsair
                </Link>
                <Link
                  to="/search?q=ram Gskill"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Gskill
                </Link>
                <Link
                  to="/search?q=ram Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Kingmax
                </Link>
                <Link
                  to="/search?q=ram Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Galax
                </Link>
                <Link
                  to="/search?q=ram Adata"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  Màn Hình
                </Link>
                <Link
                  to="/search?q=Màn hình Samsung"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình Samsung
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình Dell
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình Acer
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình Asus
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình LG
                </Link>
                <Link
                  to="/search?q=Màn hình 144hz"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình 144hz
                </Link>
                <Link
                  to="/search?q=Màn hình 165hz"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  VGA - Card Màn Hình
                </Link>
                <Link
                  to="/search?q=vga asus"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Asus
                </Link>
                <Link
                  to="/search?q=vga gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Gigabyte
                </Link>
                <Link
                  to="/search?q=vga radeon"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Radeon
                </Link>
                <Link
                  to="/search?q=vga asrock"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Asrock
                </Link>
                <Link
                  to="/search?q=vga msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA MSI
                </Link>
                <Link
                  to="/search?q=vga powercolor"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA PowerColor
                </Link>
                <Link
                  to="/search?q=vga corlorful"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Colorful
                </Link>
                <Link
                  to="/search?q=vga zotac"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Zotac
                </Link>
                <Link
                  to="/search?q=vga zotac"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Zotac
                </Link>
                <Link
                  to="/search?q=vga nvidia"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Nvidia
                </Link>
                <Link
                  to="/search?q=vga inno3d"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  VGA Inno3D
                </Link>
                <Link
                  to="/search?q=vga intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  CPU - Bộ vi xử lý
                </Link>
                <Link
                  to="/collections/cpu-intel"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU Intel
                </Link>
                <Link
                  to="/search?q=intel%20core%20i3"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Intel Core I3
                </Link>
                <Link
                  to="/search?q=intel%20core%20i5"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Intel Core I5
                </Link>
                <Link
                  to="/search?q=intel%20core%20i7"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Intel Core I7
                </Link>
                <Link
                  to="/search?q=intel%20core%20i9"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Intel Core I9
                </Link>

                <Link
                  to="/collections/cpu-amd"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  CPU AMD
                </Link>
                <Link
                  to="/search?q=ryzen 7"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  AMD 7000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 5"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  AMD 5000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 4"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  AMD 4000 Series
                </Link>
                <Link
                  to="/search?q=ryzen 3"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  Case - Thùng máy
                </Link>
                <Link
                  to="/search?q=case msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case MSI
                </Link>
                <Link
                  to="/search?q=case deepcool"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case Deepcool
                </Link>
                <Link
                  to="/search?q=case jetek"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case Jetek
                </Link>
                <Link
                  to="/search?q=case vsp"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case VSP
                </Link>
                <Link
                  to="/search?q=case thermaltake"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case Thermaltake
                </Link>
                <Link
                  to="/search?q=case Xigmatek"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case Thermaltake
                </Link>
                <Link
                  to="/search?q=case mik"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case MIK
                </Link>
                <Link
                  to="/search?q=case msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Case MSI
                </Link>
                <Link
                  to="/search?q=case montech"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  Maiboard - Bo mạch chủ
                </Link>
                <Link
                  to="/search?q=mainboard gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard Gigabyte
                </Link>
                <Link
                  to="/search?q=mainboard asus"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard Asus
                </Link>
                <Link
                  to="/search?q=mainboard asrock"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard Asrock
                </Link>
                <Link
                  to="/search?q=mainboard msi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard MSI
                </Link>
                <Link
                  to="/search?q=mainboard server"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard Server
                </Link>
                <Link
                  to="/search?q=mainboard huananzhi"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Mainboard huananzhi
                </Link>
                <Link
                  to="/search?q=mainboard vsp"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  Bộ nhớ RAM
                </Link>
                <Link
                  to="/search?q=ram ddr5"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram DDR5
                </Link>
                <Link
                  to="/search?q=ram ddr4"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram DDR4
                </Link>
                <Link
                  to="/search?q=ram ddr3"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram DDR3
                </Link>
                <Link
                  to="/search?q=ram rgb"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram LED RGB
                </Link>
                <Link
                  to="/search?q=ram gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Gigabyte
                </Link>
                <Link
                  to="/search?q=ram corsair"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Corsair
                </Link>
                <Link
                  to="/search?q=ram Gskill"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Gskill
                </Link>
                <Link
                  to="/search?q=ram Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Kingmax
                </Link>
                <Link
                  to="/search?q=ram Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Ram Galax
                </Link>
                <Link
                  to="/search?q=ram Adata"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  Màn Hình
                </Link>
                <Link
                  to="/search?q=Màn hình Samsung"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình Samsung
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình Dell
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình Acer
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình Asus
                </Link>
                <Link
                  to="/search?q=Màn hình Dell"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình LG
                </Link>
                <Link
                  to="/search?q=Màn hình 144hz"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Màn hình 144hz
                </Link>
                <Link
                  to="/search?q=Màn hình 165hz"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  PSU - Nguồn máy tính
                </Link>
                <Link
                  to="/search?q=Nguồn Cooler Master"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Cooler Master
                </Link>
                <Link
                  to="/search?q=Nguồn Corsair"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Corsair
                </Link>
                <Link
                  to="/search?q=Nguồn Sagotep"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Sagotep
                </Link>
                <Link
                  to="/search?q=Nguồn SilverStone"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn SilverStone
                </Link>
                <Link
                  to="/search?q=Nguồn SilverStone"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Xigmatek
                </Link>
                <Link
                  to="/search?q=Nguồn MSI"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn MSI
                </Link>
                <Link
                  to="/search?q=Nguồn Antec"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  Nguồn Antec
                </Link>
                <Link
                  to="/search?q=Nguồn Gigabyte"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
                  class="text-uppercase fw-bold mb-3 item-header"
                >
                  SSD - HDD
                </Link>
                <Link
                  to="/search?q=Billion Reservoir"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Billion Reservoir
                </Link>
                <Link
                  to="/search?q=SSD Billion Reservoir"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Billion Reservoir
                </Link>
                <Link
                  to="/search?q=SSD Lexar"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Lexar
                </Link>
                <Link
                  to="/search?q=SSD ADATA"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD ADATA
                </Link>
                <Link
                  to="/search?q=SSD Western"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Western
                </Link>
                <Link
                  to="/search?q=SSD Samsung"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Samsung
                </Link>
                <Link
                  to="/search?q=SSD Kingston"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Kingston
                </Link>
                <Link
                  to="/search?q=SSD Kingmax"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
                  SSD Kingmax
                </Link>
                <Link
                  to="/search?q=HDD Seagate"
                  className="m-0 p-0 pb-1 item-name bg-transparent"
                >
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
    <div className="container">
      <div className="row">
        <div className="col-12 d-none d-md-flex justify-content-start px-0 category position-relative border">
          {/* category header */}
          <div
            className="text-center py-1 text-white d-flex justify-content-center align-items-center rounded category-header position-relative"
            style={{
              minWidth: "270px",
              minHeight: "35px",
              backgroundColor: "#505050",
            }}
          >
            {/* icon */}
            <i
              className="fa-solid fa-bars me-2"
              style={{ fontSize: "16px" }}
            ></i>
            {/* text */}
            <span
              className="text-uppercase fw-bold"
              style={{ fontSize: "14px" }}
            >
              Danh mục sản phẩm
            </span>
          </div>
          {/* nav menus */}
          <div className="row" style={{ width: "82%", paddingLeft: "5px" }}>
            <div className="col-12">
              <div
                className="text-white d-flex align-items-center justify-content-between py-1 rounded custom-navbar"
                style={{ backgroundColor: "#9f9f9f", minHeight: "35px" }}
              >
                <div className="d-flex align-items-center">
                  {/* icon */}
                  <i
                    className="fa-solid fa-wrench ms-2 me-1"
                    style={{ fontSize: "14px" }}
                  ></i>
                  {/* text */}
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>
                    Lắp đặt phòng net
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {/* icon */}
                  <i
                    className="fa-solid fa-table-list ms-2 me-1"
                    style={{ fontSize: "14px" }}
                  ></i>
                  {/* text */}
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>
                    Trả góp
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {/* icon */}
                  <i
                    className="fa-solid fa-money-check-dollar ms-2 me-1"
                    style={{ fontSize: "14px" }}
                  ></i>
                  {/* text */}
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>
                    Bảng giá
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {/* icon */}
                  <i
                    className="fa-solid fa-sliders ms-2 me-1"
                    style={{ fontSize: "14px" }}
                  ></i>
                  {/* text */}
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>
                    Xây dựng cấu hình
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {/* icon */}
                  <i
                    className="fa-solid fa-shield ms-2 me-1"
                    style={{ fontSize: "14px" }}
                  ></i>
                  {/* text */}
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>
                    Kiếm tra bảo hành
                  </span>
                </div>
                <div className="d-flex align-items-center me-2">
                  {/* icon */}
                  <i
                    className="fa-solid fa-dollar-sign ms-2 me-1"
                    style={{ fontSize: "14px" }}
                  ></i>
                  {/* text */}
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>
                    Thiết bị mining
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
    </div>
  );
};

export default NavigationBarHome;
