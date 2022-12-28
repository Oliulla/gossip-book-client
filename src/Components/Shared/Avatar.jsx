import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Avatar = (props) => {
  const { user } = useContext(AuthContext);
  // console.log(props)

  return (
    <label tabIndex={0} className={`btn btn-ghost btn-circle avatar`}>
      <div className={`w-10 rounded-full ${props?.className}`}>
        <img
          src={`${props?.photoURL ? props?.photoURL : user?.photoURL}`}
          alt="user img"
        />
      </div>
    </label>
  );
};

export default Avatar;
