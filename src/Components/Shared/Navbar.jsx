import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Avatar from "./Avatar";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="navbar bg-accent fixed top-0 z-50">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-secondary w-12 h-12 rounded-[50%] text-4xl"
        >
          G
        </Link>
        <div className="my-0 mx-auto flex gap-4 text-base-100 font-semibold">
          <Link className="md:text-xl" to="/media">
            Media
          </Link>
          <Link className="md:text-xl" to="/message">
            Message
          </Link>
          <Link className="md:text-xl" to="/about">
            About
          </Link>
          {/* <Link to="/media" onClick={() => setIsActive(!isActive)} className={`text-xl ${isActive && "text-secondary"} hover:text-primary mx-2`}>Media</Link> */}
          {/* <Link to="/message" onClick={() => setIsActive(!isActive)} className={`text-xl ${isActive && "text-secondary"} hover:text-primary mx-2`}>Message</Link> */}
          {/* <Link to="/about" onClick={() => setIsActive(!isActive)} className={`text-xl ${isActive && "text-secondary"} hover:text-primary mx-2`}>About</Link> */}
        </div>
      </div>

      <div className="flex-none">
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
            </div>
        </div> */}

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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
          >
            <li>
              <Link to="/" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to='/openroot/login'>Login</Link>
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
