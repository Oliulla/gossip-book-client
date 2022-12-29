import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { AiFillEdit } from "react-icons/ai";

const ProfileBanner = ({ currentUser }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="custom_grad w-full h-screen">
        <div className="mx-auto relative md:w-4/6">
          <div className="h-[45vh] md:h-[65vh] overflow-hidden rounded-b-xl">
            <img
              className="w-full rounded-b-xl"
              src="https://i.ibb.co/PCr4WXq/coverimg.jpg"
              alt=""
            />
          </div>
          <div className="z-50 w-full mx-auto px-12 absolute bottom-[-120px] flex items-center">
            <div className="avatar">
              <div className="w-28 md:w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/4JKWmDG/anonymous.jpg"
                  }
                  alt={`${user?.displayName}`}
                />
              </div>
            </div>
            <div className="pl-6 w-full">
              <h2 className="text-2xl mt-14 font-bold">
                {currentUser?.updatedName
                  ? currentUser?.updatedName
                  : currentUser?.userName}
              </h2>
              <div className="w-full flex justify-end">
                <button
                  className="flex items-center gap-1 mt-10 btn-accent px-3 py-1 rounded-md hover:btn-primary"
                  disabled
                >
                  <AiFillEdit className="w-5 h-5" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="md:w-4/6 mx-auto" />
    </>
  );
};

export default ProfileBanner;
