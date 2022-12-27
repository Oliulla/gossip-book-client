import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const AvatarWithName = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-2">
      <label className="btn btn-ghost btn-circle avatar">
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
      </label>
      <button className="text-2xl hover:underline">
        {
            user?.displayName ? user.displayName : 'Anonymous '
        }
      </button>
    </div>
  );
};

export default AvatarWithName;
