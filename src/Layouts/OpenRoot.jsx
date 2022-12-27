import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Freedom/ScrollToTop";
import Navbar from "../Components/Shared/Navbar";

const OpenRoot = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
};

export default OpenRoot;
