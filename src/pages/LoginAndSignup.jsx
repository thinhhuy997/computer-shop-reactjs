import React from "react";
import HeaderPage from "../components/headerPage/HeaderPage";
import MainMenu from "../components/mainMenu/MainMenu";
import MainLS from "../components/mainLS/MainLS";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/navigationBar/NavigationBar";
import SideBar from "../components/sideBar/SideBar";

const LoginAndSignup = () => {
  return (
    <>
      {/* <HeaderPage /> */}
      {/* <MainMenu /> */}
      <NavigationBar />
      {/* <SideBar /> */}
      <MainLS />
      <Footer />
    </>
  );
};

export default LoginAndSignup;
