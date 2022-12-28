import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Avatar from "./Avatar";
import AvatarWithName from "./AvatarWithName";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { TfiLayoutMediaOverlayAlt } from "react-icons/tfi";
import { AiFillMessage } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, logOut } = useContext(AuthContext);

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
    <div className="navbar bg-accent fixed top-0 z-50 border border-b-2 border-primary">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-secondary w-12 h-12 rounded-[50%] text-4xl"
        >
          G
        </Link>
        <div className="my-0 mx-auto flex gap-6 text-base-100">
          <Link
            // onClick={() => setIsActive(!isActive)}
            className={`flex items-center gap-1 py-3 px-4 rounded-md hover:btn-primary ${isActive && 'text-secondary'} `}
            to="/media"
          >
            <TfiLayoutMediaOverlayAlt className="text-2xl" />
            Media
          </Link>
          <Link
          // onClick={() => setIsActive(!isActive)}
            className={`flex items-center gap-1 py-3 px-4 rounded-md hover:btn-primary ${isActive && 'text-secondary'} `}
            to="/message"
          >
            <AiFillMessage className="text-2xl" />
            Message
          </Link>
          <Link
            // onClick={() => setIsActive(!isActive)}
            className={`flex items-center gap-1 py-3 px-4 rounded-md hover:btn-primary ${isActive && 'text-secondary'} `}
            to="/about"
          >
            <ImProfile className="text-2xl" />
            About
          </Link>
        </div>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end bg-accent">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {/* <div className="w-10 rounded-full">
              <img
                src={`${user?.photoURL ? user?.photoURL : "https://i.ibb.co/4JKWmDG/anonymous.jpg"}`}
                alt="user img"
              />
            </div> */}
            <Avatar />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-72"
          >
            <li>
              <Link to="/about" className="justify-between">
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
