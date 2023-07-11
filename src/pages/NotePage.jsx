import React from "react";
import Note from "../components/note/Note";
import NavigationBar from "../components/navigationBar/NavigationBar";
import Footer from "../components/footer/Footer";

const NotePage = () => {
  return (
    <>
      <NavigationBar />
      <Note />
    </>
  );
};

export default NotePage;
