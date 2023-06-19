import React from "react";
import "./inDevelopmentPage.css";
import { Link } from "react-router-dom";
export const InDevelopmentPage = () => {
  return (
    <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
      <header class="top-header"></header>

      {/* <!--dust particel--> */}
      <div>
        <div class="starsec"></div>
        <div class="starthird"></div>
        <div class="starfourth"></div>
        <div class="starfifth"></div>
      </div>
      {/* <!--Dust particle end---> */}

      <div class="lamp__wrap">
        <div class="lamp">
          <div class="cable"></div>
          <div class="cover"></div>
          <div class="in-cover">
            <div class="bulb"></div>
          </div>
          <div class="light"></div>
        </div>
      </div>
      {/* <!-- END Lamp --> */}
      <section class="error">
        {/* <!-- Content --> */}
        <div class="error__content">
          <div class="error__message message">
            <h1 class="message__title">Chức năng này đang phát triển thêm</h1>
            <p class="message__text">
              Chức năng này của Website đang được phát triển thêm, hẹn gặp lại
              trong tương lai!
            </p>
          </div>
          {/* <div class="error__nav e-nav">
            <Link href="" target="_blanck" class="e-nav__link"></Link>
          </div> */}
        </div>
        {/* <!-- END Content --> */}
      </section>
    </a>
  );
};
