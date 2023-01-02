import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-2 md:p-10 bg-neutral text-neutral-content w-full md:w-2/4 mx-auto">
      <div className="flex flex-wrap">
        <Link className="mr-2" to="/">
          Privacy
        </Link>
        ·
        <Link className="mr-2" to="/">
          Terms
        </Link>
        ·
        <Link className="mr-2" to="/">
          Advertising
        </Link>
        ·
        <Link className="mr-2" to="/">
          Ad Choices
        </Link>
        ·
        <Link className="mr-2" to="/">
          Cookies
        </Link>
        ·<span></span>·
        <Link className="mr-2" to="/">
          Gossip ©{new Date().getFullYear()}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
