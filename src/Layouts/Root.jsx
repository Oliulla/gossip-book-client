import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import Home from "../Pages/Home/Home";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="my-2 flex justify-center">
        <div className="grid grid-cols-12 justify-center w-full">
          <div className="col-span-3 border border-red-500">
            <h2>Left menu</h2>
          </div>
          <div className="col-span-6 border border-red-500">
            <Outlet />
          </div>
          <div className="col-span-3 border border-red-500">
            <h2>Contacts</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
