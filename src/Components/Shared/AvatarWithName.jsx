import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const AvatarWithName = (props) => {
  const { user } = useContext(AuthContext);
  // console.log(props);
  console.log("avatar", user)

  return (
    <div className={`flex items-center gap-2 p-2 rounded-lg w-full ${props?.className}`}>
      <label className="btn btn-ghost btn-circle avatar">
        <div className={`w-10 rounded-full`}>
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
      <button className={`text-[1.1rem] hover:underline ${props?.profile?.namesize}`}>
        {
            user?.displayName ? user.displayName : 'Anonymous '
        }
      </button>
    </div>
  );
};

export default AvatarWithName;
