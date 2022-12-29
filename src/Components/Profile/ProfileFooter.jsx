import React from "react";
import { Link } from "react-router-dom";

const ProfileFooter = () => {
  return (
    <footer className="mx-0 mt-10 hidden md:block">
      <div className="flex flex-wrap">
        <Link className="mx-2" to="/">
          Privacy
        </Link>
        ·
        <Link className="mx-2" to="/">
          Terms
        </Link>
        ·
        <Link className="mx-2" to="/">
          Advertising
        </Link>
        ·
        <Link className="mx-2" to="/">
          Ad Choices
        </Link>
        ·
        <Link className="mx-2" to="/">
          Cookies
        </Link>
        ·<span className="mx-1"></span>·
        <Link className="mx-2" to="/">
          Gossip ©{new Date().getFullYear()}
        </Link>
      </div>
    </footer>
  );
};

export default ProfileFooter;
