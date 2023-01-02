import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const Avatar = (props) => {
  const { user } = useContext(AuthContext);
  // console.log(props)

  return (
    <label tabIndex={0} className={`btn btn-ghost btn-circle avatar z-0`}>
      <div className={`w-10 rounded-full ${props?.className}`}>
        <img
          src={`${props?.photoURL ? props?.photoURL : user?.photoURL || "https://i.ibb.co/4JKWmDG/anonymous.jpg"}`}
          alt="user img"
          className="z-0"
        />
      </div>
    </label>
  );
};

export default Avatar;
