import React, { useState } from "react";
// import AvatarWithName from "../Shared/AvatarWithName";
import { AiFillLike } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";

const UsersPost = ({ post }) => {
  // console.log(post)
  const { postImgUrl, postInfo, uploadTime, userName, userPhoto } = post;
  //   console.log(postImgUrl);
  const [uploadeExp, setUploadExp] = useState('');
  const now = new Date().getTime();
  // console.log(now)
  const uploadDuration = now - uploadTime;
  // console.log(uploadDuration);
  const uploadAge = parseInt(uploadDuration / 1000);
  //   console.log(uploadAge);
//   if (uploadAge < 60) {
//     // eslint-disable-next-line no-self-assign
//     setUploadExp(`${uploadAge}s`)
//   } else if(uploadAge < 3599) {
//     setUploadExp(`${uploadAge}s`)
//   }

  return (
    <div className="card w-full bg-accent shadow-xl rounded-lg mb-4">
      <div className="card-body">
        {/* <AvatarWithName /> */}
        <div className="flex gap-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={`${
                  userPhoto
                    ? userPhoto
                    : "https://i.ibb.co/4JKWmDG/anonymous.jpg"
                }`}
                alt="user img"
              />
            </div>
          </label>
          <div className="flex flex-col gap-0">
            <h3 className="text-[1.2rem] mb-0 hover:underline cursor-pointer">
              {userName ? userName : "Anonymous"}
            </h3>
            <p className="flex items-center mt-0 gap-1 text-[#bbbbe4]">
              {
                uploadeExp
              }
              <TiWorld />
            </p>
          </div>
        </div>
        <p className={`${!postInfo && "hidden"}`}>
          {postInfo ? postInfo?.slice(0, 270) : ""}
          <span className="underline cursor-pointer pl-2">
            {postInfo?.length >= 270 && "See more..."}
          </span>
        </p>
      </div>
      <figurer>
        <img
          src={postImgUrl ? postImgUrl : ""}
          className={`${!postImgUrl && "hidden"}`}
          alt="post"
        />
      </figurer>
      <div className="px-4 pt-2 pb-4 flex justify-between">
        <p className="flex items-center justify-center">
          <span className="bg-[#077FE6] text-center w-4 h-4 rounded-full">
            <AiFillLike className="w-3 h-3 ml-[2px] mt-[1px]" />
          </span>
          <span className="pl-2 hover:underline cursor-pointer text-base-100 text-[1.1rem]">
            0
          </span>
        </p>
        <p>
          <span className="">0</span>
          <span className="pl-1 hover:underline cursor-pointer">Comments</span>
        </p>
      </div>
      <hr className="mx-4" />
      <div className="px-4 py-3 pb-4 flex justify-around">
        <button className="hover_btn px-4 py-2">
          <span>@</span>
          <span className="pl-1">Like</span>
        </button>
        <button className="hover_btn px-4 py-2">
          <span>(^)</span>
          <span className="pl-1">Comments</span>
        </button>
      </div>
    </div>
  );
};

export default UsersPost;
