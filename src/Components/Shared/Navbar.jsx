import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Avatar from "./Avatar";
import AvatarWithName from "./AvatarWithName";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { TfiHome, TfiLayoutMediaOverlayAlt } from "react-icons/tfi";
import { AiFillMessage } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location)

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("logged out");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-accent fixed top-0 z-[100] border border-b-2 border-primary mb-14 py-0">
      <div className="flex-1 py-0">
        <Link
          to="/"
          className="btn btn-secondary w-12 h-12 rounded-[50%] text-4xl"
        >
          G
        </Link>
        <div className="my-0 mx-auto flex gap-4 md:gap-6 text-base-100">
          <Link
            className={`flex items-center gap-1 md:py-2 md:px-12 hover:rounded-md hover:btn-primary ${
              location.pathname === "/home" && "active"
            } tooltip tooltip-info tooltip-bottom border-b-[3px] border-accent`}
            data-tip="Home"
            to="/home"
          >
            <TfiHome className="text-2xl md:text-3xl" />
            {/* <span className="hidden md:block">Home</span> */}
          </Link>
          <Link
            className={`flex items-center gap-1 md:py-2 md:px-12 hover:rounded-md hover:btn-primary ${
              location.pathname === "/media" && "active"
            } tooltip tooltip-info tooltip-bottom border-b-[3px] border-accent`}
            data-tip="Media"
            to="/media"
          >
            <TfiLayoutMediaOverlayAlt className="text-2xl md:text-3xl" />
            {/* <span className="hidden md:block">Media</span> */}
          </Link>
          <a
            className={`flex items-center gap-1 md:py-2 md:px-12 hover:rounded-md hover:btn-primary ${
              location.pathname === "/message" && "active"
            } tooltip tooltip-info tooltip-bottom border-b-[3px] border-accent`}
            data-tip="Message"
           href="https://olichat.vercel.app"
          >
            <AiFillMessage className="text-2xl md:text-3xl" />
            {/* <span className="hidden md:block">Message</span> */}
          </a>
          <Link
            className={`flex items-center gap-1 md:py-2 md:px-12 hover:rounded-md hover:btn-primary ${
              location.pathname === "/profile/about" && "active"
            } tooltip tooltip-info tooltip-bottom border-b-[3px] border-accent`}
            data-tip="About"
            to="/profile/about"
          >
            <ImProfile className="text-2xl md:text-3xl" />
            {/* <span className="hidden md:block">About</span> */}
          </Link>
        </div>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end bg-accent">
          <Avatar />
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-72"
          >
            <li>
              <Link to="/profile/about" className="justify-between">
                <AvatarWithName className="hover:bg-primary custom_shadow" />
              </Link>
            </li>
            <li className="my-3">
              <Link to="/" className="hover:bg-primary py-3 text-[1.2rem]">
                <FiSettings />
                Settings
              </Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="hover:bg-primary py-3 text-[1.2rem]"
                  >
                    <RiLogoutBoxRFill />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/openroot/login" className="hover:bg-primary py-3">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
