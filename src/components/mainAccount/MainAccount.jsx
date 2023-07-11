import React from "react";
import "./mainAccount.css";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const MainAccount = () => {
  let { logoutUser } = useContext(AuthContext);
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#f4f8fa", height: "550px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 d-none d-md-flex justify-content-start px-0 category position-relative border">
              {/* User side box */}
              <div
                className="text-center py-1 text-white d-flex justify-content-center align-items-center rounded category-header position-relative bg-white border"
                style={{
                  minWidth: "270px",
                }}
              ></div>
              {/* User Info Box */}
              <div
                className="row ms-2"
                style={{
                  width: "79%",

                  paddingLeft: "5px",
                }}
              >
                <div className="col-12 pt-3 bg-white">
                  <div className="row py-1 rounded custom-navbar">
                    <div className="col-10 d-flex align-items-center">
                      <span className="fw-bold" style={{ fontSize: "16px" }}>
                        BẢNG THÔNG TIN CỦA TÔI
                      </span>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-end">
                      <button
                        className="text-end text-decoration-underline"
                        style={{ fontSize: "12px" }}
                        onClick={logoutUser}
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </div>

                  <p
                    className=" m-0 p-0 mt-2 mb-1"
                    style={{ fontSize: "15px", fontWeight: 400 }}
                  >
                    Thông tin tài khoản
                  </p>

                  <div className="row">
                    <div className="col-6 border py-1">
                      <div className="row">
                        <div className="col-4">
                          <span style={{ fontSize: "12px" }}>Họ và tên:</span>
                        </div>
                        <div className="col-8">
                          {" "}
                          <span style={{ fontSize: "12px" }}>
                            Nguyen Huy Thinh
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4">
                          <span style={{ fontSize: "12px" }}>Email:</span>
                        </div>
                        <div className="col-8">
                          {" "}
                          <span style={{ fontSize: "12px" }}>
                            thinhhuy997@gmail.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6"></div>
                  </div>

                  {/* orders history */}
                  <div className="row">
                    <div className="col-6">
                      <div className="orders-history">
                        <p
                          className="m-0 p-0 mt-4 mb-1"
                          style={{ fontSize: "15px", fontWeight: 400 }}
                        >
                          Các đơn hàng vừa đặt
                        </p>
                        <p
                          className="fw-light m-0 p-0  ms-4 mt-2 mb-1"
                          style={{ fontSize: "14px" }}
                        >
                          Bạn hiện chưa đặt mua sản phẩm nào!...
                        </p>
                      </div>
                    </div>

                    <div className="col-6 text-end"></div>
                  </div>

                  {/* Address */}
                  <div className="row mt-5">
                    <div className="col-6">
                      <p
                        className="m-0 p-0"
                        style={{ fontSize: "15px", fontWeight: 400 }}
                      >
                        Sổ địa chỉ
                      </p>
                      {/* Adress box */}
                      <div className="address-box border border-info">
                        <div>
                          <div className="row ms-2">
                            <div className="mt-2 pe-4 d-flex justify-content-between">
                              <span
                                style={{ fontSize: "15px", fontWeight: "500" }}
                              >
                                Nguyen Huy Thinh
                              </span>
                              <span
                                className="text-danger"
                                style={{ fontSize: "10.5px" }}
                              >
                                Mặc định
                              </span>
                            </div>
                          </div>

                          <div className="row ms-2 my-2">
                            <span className="my-1" style={{ fontSize: "12px" }}>
                              Địa chỉ:
                            </span>
                          </div>
                          <div className="row ms-2 my-2">
                            <span className="my-1" style={{ fontSize: "12px" }}>
                              Điện thoại:
                            </span>
                          </div>
                          <div className="row ms-2 mt-2 mb-4">
                            <button
                              className="btn fw-light btn-light m-0 p-0 py-1 border mx-2"
                              style={{ width: "60px", fontSize: "13px" }}
                            >
                              Sửa
                            </button>
                            <button
                              className="btn fw-light btn-light m-0 p-0 py-1 border mx-2"
                              style={{ width: "60px", fontSize: "13px" }}
                            >
                              Xoá
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <button
                        className="text-decoration-underline"
                        style={{ fontSize: "12px" }}
                      >
                        Xem tất cả{">"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sidebar */}
        </div>
      </div>
    </>
  );
};

export default MainAccount;
