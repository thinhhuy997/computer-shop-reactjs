import React from "react";
import "./mainLS.css";
import { Link } from "react-router-dom";

const MainLS = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center border-bottom pb-5 position-relative">
          <div className="mt-3 text-muted d-flex flex-column align-items-center">
            <p className="m-0 text-uppercase" style={{ fontSize: "16px" }}>
              Đăng nhập bằng
            </p>
            <div className="d-flex mt-3">
              <div
                style={{ maxWidth: "110px", maxHeight: "30px" }}
                className="me-2"
              >
                {/* login by facebook */}
                <Link
                  to={"/login-by-facebook"}
                  className="m-0 text-decoration-none text-white"
                >
                  {/* facebook */}

                  <div className="d-flex align-items-center bg-primary rounded-pill px-2">
                    <i class="fa-brands fa-facebook me-3"></i>
                    <span
                      style={{ fontSize: "14px", paddingBottom: "2px" }}
                      className=" mx-auto"
                    >
                      Facebook
                    </span>
                  </div>

                  {/* facebook */}
                </Link>
              </div>
              <div
                style={{ maxWidth: "110px", maxHeight: "30px" }}
                className="me-2"
              >
                {/* login by google */}
                <Link
                  to={"/login-by-google"}
                  className="m-0 text-decoration-none text-white"
                >
                  {/* google */}

                  <div className="d-flex align-items-center bg-danger rounded-pill px-2">
                    <i class="fa-brands fa-google me-3"></i>
                    <span
                      style={{ fontSize: "14px", paddingBottom: "2px" }}
                      className=" mx-auto"
                    >
                      Google
                    </span>
                  </div>

                  {/* google */}
                </Link>
              </div>
            </div>
          </div>
          <span
            className="position-absolute top-100 start-50 translate-middle text-muted bg-white px-2 text-uppercase"
            style={{ zIndex: 2, fontSize: "14px", fontWeight: 400 }}
          >
            Hoặc
          </span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-6">
          <form
            action="#"
            style={{ maxWidth: "60%", textAlign: "center" }}
            className="mx-auto"
          >
            <span
              className="m-0 p-0 text-uppercase text-muted"
              style={{ fontSize: "15px", fontWeight: 400 }}
            >
              Đăng nhập
            </span>
            <div class="input-group flex-nowrap mx-auto mt-3 align-items-center border">
              <span
                class="input-group-text bg-white border-none text-muted border-0"
                id="addon-wrapping"
                style={{ height: "100%" }}
              >
                <i class="fa-solid fa-envelope"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 m-0"
                placeholder="Email của bạn"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{ fontSize: "14px" }}
              />
            </div>
            <div class="input-group flex-nowrap mx-auto mt-3 align-items-center border">
              <span
                class="input-group-text bg-white border-none text-muted border-0"
                id="addon-wrapping"
                style={{ height: "100%" }}
              >
                <i class="fa-solid fa-lock"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 m-0 text-muted"
                placeholder="Nhập mật khẩu"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{ fontSize: "14px" }}
              />
            </div>
            <Link
              to={"login"}
              type="submit"
              className="bg-white border-1 w-100 mt-4 py-1 btn-login"
              style={{ fontSize: "14px", fontWeight: 400 }}
            >
              Đăng nhập
            </Link>
            {/* forgot account */}
            <Link
              to={"/pw-forgot"}
              type="submit"
              className="bg-white border-1 w-100 mt-4 py-1 btn-login"
              style={{ fontSize: "14px", fontWeight: 400 }}
            >
              Quên mật khẩu?
            </Link>
          </form>
        </div>
        <div className="col-sm-12 col-md-6">
          <form
            action="#"
            style={{ maxWidth: "60%", textAlign: "center" }}
            className="mx-auto"
          >
            <span
              className="m-0 p-0 text-uppercase text-muted"
              style={{ fontSize: "15px", fontWeight: 400 }}
            >
              ĐĂNG KÝ THÀNH VIÊN MỚI
            </span>
            <div class="input-group flex-nowrap mx-auto mt-3 align-items-center border">
              <span
                class="input-group-text bg-white border-none text-muted border-0"
                id="addon-wrapping"
                style={{ height: "100%" }}
              >
                <i class="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 m-0"
                placeholder="Họ"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{ fontSize: "14px" }}
              />
            </div>
            <div class="input-group flex-nowrap mx-auto mt-3 align-items-center border">
              <span
                class="input-group-text bg-white border-none text-muted border-0"
                id="addon-wrapping"
                style={{ height: "100%" }}
              >
                <i class="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 m-0 text-muted"
                placeholder="Tên"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{ fontSize: "14px" }}
              />
            </div>
            <div class="input-group flex-nowrap mx-auto mt-3 align-items-center border">
              <span
                class="input-group-text bg-white border-none text-muted border-0"
                id="addon-wrapping"
                style={{ height: "100%" }}
              >
                <i class="fa-solid fa-envelope"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 m-0"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="addon-wrapping"
                style={{ fontSize: "14px" }}
              />
            </div>
            <div class="input-group flex-nowrap mx-auto mt-3 align-items-center border">
              <span
                class="input-group-text bg-white border-none text-muted border-0"
                id="addon-wrapping"
                style={{ height: "100%" }}
              >
                <i class="fa-solid fa-lock"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 m-0 text-muted"
                placeholder="Mật khẩu"
                aria-label="password"
                aria-describedby="addon-wrapping"
                style={{ fontSize: "14px" }}
              />
            </div>
            <div class="input-group flex-nowrap mx-auto mt-3 align-items-center border">
              <span
                class="input-group-text bg-white border-none text-muted border-0"
                id="addon-wrapping"
                style={{ height: "100%" }}
              >
                <i class="fa-solid fa-unlock-keyhole"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 m-0 text-muted"
                placeholder="Nhập lại mật khẩu"
                aria-label="repassword"
                aria-describedby="addon-wrapping"
                style={{ fontSize: "14px" }}
              />
            </div>
            <Link
              to={"/sign-up"}
              type="submit"
              className="bg-white border-1 w-100 mt-4 py-1 btn-login"
              style={{ fontSize: "14px", fontWeight: 400 }}
            >
              Đăng ký
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainLS;
