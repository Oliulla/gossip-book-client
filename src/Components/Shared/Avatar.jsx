import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-10 rounded-full">
        <img
          src={`${
            user?.photoURL
              ? user?.photoURL
              : "https://i.ibb.co/4JKWmDG/anonymous.jpg"
          }`}
          alt="user img"
        />
    </div>
  );
};

export default Avatar;
