import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Freedom/ScrollToTop";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import Home from "../Pages/Home/Home";

const Root = () => {
  return (
    <>
    <ScrollToTop />
      <Navbar />
      <div className="py-20 px-4">
        <div className="grid grid-cols-12 justify-center w-full">
          <div className="col-span-3 border border-red-500 fixed top-20 left-0 w-3/12 h-screen pl-2">
            <h2>Left menu</h2>
          </div>
          <div className="col-span-6 px-12 relative left-2/4">
            <Outlet />
          </div>
          <div className="col-span-3 border border-red-500 fixed top-20 right-0 h-screen w-3/12 pr-2">
            <h2>Contacts</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
