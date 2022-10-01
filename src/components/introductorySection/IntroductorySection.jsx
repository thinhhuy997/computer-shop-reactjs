import React from "react";
import ReactPlayer from "react-player";
import HoverMenuButton from "../hoverMenu/HoverMenuButton";
// import Carousel from "../carousel/Carousel";
import "./introductorySection.css";
const IntroductorySection = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div
          className="col-2 d-none d-xxl-flex flex-column align-items-center p-0 border-top border-start border-end border-1 bg-white ms-5 rounded"
          style={{ height: "100%" }}
        >
          <HoverMenuButton
            categoryName="Linh kiện mới"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2018/12/Linh-kien-moi.png"
          />
          <HoverMenuButton
            categoryName="Linh kiện cũ"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2018/12/Linh-kien-cu.png"
          />
          <HoverMenuButton
            categoryName="Thiết bị phòng game"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2018/12/Thiet-bi-phong-game.png"
          />
          <HoverMenuButton
            categoryName="Máy tính để bàn"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2018/12/May-tinh-de-ban.png"
          />
          <HoverMenuButton
            categoryName="Màn hình máy tính"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2018/12/Man-hinh.png"
          />
          <HoverMenuButton
            categoryName="Laptop"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/04/Laptop-512-2.png"
          />
          <HoverMenuButton
            categoryName="Ổ cứng PC"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/04/SSD-HDD-1.png"
          />
          <HoverMenuButton
            categoryName="Chuột, bàn phím, phone"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2018/12/Ban-phim-va-chuot.png"
          />
          <HoverMenuButton
            categoryName="Thiết bị mạng, camera"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2018/12/Thiet-bi-mang-va-may-in.png"
          />
          <HoverMenuButton
            categoryName="Phụ kiện điện thoại"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/01/phu-kien-dien-thoai.png"
          />
          <HoverMenuButton
            categoryName="Thiết bị âm thanh"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/Music-speaker.png"
          />
          <HoverMenuButton
            categoryName="Phụ kiện và phần mềm"
            imageLink="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2018/12/Phan-mem-va-phu-kien.png"
          />
        </div>
        <div className="col-lg-12 col-xxl-9">
          <div className="row">
            <div className="col-8" style={{ zIndex: -1 }}>
              {/* <Carousel /> */}
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12 mb-2 p-0">
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      width="100%"
                      height="100%"
                      url="https://youtu.be/_1uKLb4d2n8"
                    />
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="player-wrapper">
                    <img
                      src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/WEB-T6-2022-22.png"
                      alt=""
                      className="w-100 react-player"
                      style={{ height: "auto", maxHeight: "165px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <a href="#">
                <img
                  src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/Asset-7-8.png"
                  alt=""
                  className="w-100"
                />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img
                  src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/Asset-6-8.png"
                  alt=""
                  className="w-100"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/Asset-1-8.png"
                  alt=""
                  className="w-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductorySection;
