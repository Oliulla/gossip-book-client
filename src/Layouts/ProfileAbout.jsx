import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Freedom/ScrollToTop";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const ProfileAbout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProfileAbout;
