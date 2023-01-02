import React from "react";
import { Link, Outlet } from "react-router-dom";
import PeopleYouMayKnow from "../Components/Freedom/PeopleYouMayKnow";
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
        <div className="flex justify-between w-full mt-2">
          {/* <div className="grid grid-cols-12 justify-center w-full relative"> */}
          <div className="hidden md:block w-full md:w-3/12 md:relative">
            {/* <div className="md:col-span-3 fixed top-20 left-0 md:w-3/12 h-screen pl-3 hidden lg:block"> */}
            <div className="md:sticky top-20">
              <Link to="/profile/about">
                <AvatarWithName className="hover:bg-primary" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            {/* <div className="w-full col-span-full md:col-span-6 md:px-12 md:relative md:left-2/4"> */}
            <div>
              <Outlet />
            </div>
          </div>
          <div className="hidden md:block w-full md:w-3/12 md:relative">
            {/* <div className="hidden md:block md:col-span-3 fixed md:w-3/12 top-20 pr-5 right-0"> */}
            <div className="md:sticky top-20">
              <PeopleYouMayKnow />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
