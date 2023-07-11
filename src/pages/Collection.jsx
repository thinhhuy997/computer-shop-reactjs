import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";

import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Footer from "../components/footer/Footer";
import MainCollection from "../components/mainCollection/MainCollection";

const Collection = () => {
  return (
    <>
      <NavigationBar />
      <Breadcrumb breadcrumbContents={[""]} />
      <MainCollection />
      <Footer />
    </>
  );
};

export default Collection;
