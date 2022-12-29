import React from "react";
import { Link, Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Freedom/ScrollToTop";
import AvatarWithName from "../Components/Shared/AvatarWithName";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
// import Home from "../Pages/Home/Home";

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="py-20 px-4">
        <div className="grid grid-cols-12 justify-center w-full">
          <div className="md:col-span-3 fixed top-20 left-0 md:w-3/12 h-screen pl-3 hidden lg:block">
            <Link to="/profile/about">
              <AvatarWithName className="hover:bg-primary" />
            </Link>
          </div>
          <div className="w-full col-span-full md:col-span-6 md:px-12 md:relative md:left-2/4">
            <Outlet />
          </div>
          <div className="md:col-span-3 fixed top-20 right-0 h-screen md:w-3/12 pr-3 hidden lg:block">
            <h2>Contacts</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
