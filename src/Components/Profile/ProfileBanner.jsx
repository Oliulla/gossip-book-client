import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { AiFillEdit } from "react-icons/ai";

const ProfileBanner = ({ currentUser, zIndex }) => {
  const { user } = useContext(AuthContext);
  // console.log(currentUser.userName)

  return (
    <>
      <div className={`custom_grad w-full h-[80vh] md:h-screen ${zIndex}`}>
        <div className="mx-auto relative md:w-4/6">
          <div className="h-[45vh] md:h-[65vh] overflow-hidden rounded-b-xl">
            <img
              className="w-full rounded-b-xl"
              src="https://i.ibb.co/PCr4WXq/coverimg.jpg"
              alt=""
            />
          </div>
          <div className="z-50 w-full mx-auto md:px-12 absolute left-1/5 md:left-0 bottom-[-200px] md:bottom-[-120px] flex flex-col md:flex-row items-center">
            <div className="avatar"> 
              <div className="w-28 md:w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/4JKWmDG/anonymous.jpg"
                  }
                  alt={`${user?.displayName}`}
                  className=""
                />
              </div>
            </div>
            <div className="pl-6 w-full flex flex-col">
              <h2 className="text-2xl mt-2 md:mt-24 text-center md:text-start font-bold w-full">
                {!currentUser?.updatedName
                  ? currentUser.userName 
                  : currentUser?.updatedName}
              </h2>
              <div className="w-full flex justify-center md:justify-end">
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
