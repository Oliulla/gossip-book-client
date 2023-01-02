import React, { useState } from "react";
import { useEffect } from "react";
// import AvatarWithName from "../Shared/AvatarWithName";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";
import { FaCommentAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "../Shared/Avatar";
import { useForm } from "react-hook-form";
import UsersComments from "../Shared/UsersComments";

const UsersPost = ({
  post,
  isLiked,
  setIsLiked,
  isUserCommented,
  setIsUserCommented,
  refetch,
}) => {
  const [uploadeExp, setUploadExp] = useState("");
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const { user } = useContext(AuthContext);
  const likedUserEmail = user?.email;

  // postinfo
  const {
    postImgUrl,
    postInfo,
    uploadTime,
    userName,
    userPhoto,
    _id,
    likedUsers,
    commentUsers,
  } = post;

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // commpare date for showing upload duration
  const now = new Date().getTime();
  const uploadAge = parseInt(now - uploadTime);

  useEffect(() => {
    const timeCount = (uploadAge) => {
      const days = Math.floor(uploadAge / (24 * 60 * 60 * 1000));
      const daysms = uploadAge % (24 * 60 * 60 * 1000);
      const hours = Math.floor(daysms / (60 * 60 * 1000));
      const hoursms = uploadAge % (60 * 60 * 1000);
      const minutes = Math.floor(hoursms / (60 * 1000));
      const minutesms = uploadAge % (60 * 1000);
      const sec = Math.floor(minutesms / 1000);
      return days + ":" + hours + ":" + minutes + ":" + sec;
    };

    const uploadDuration = timeCount(uploadAge).split(":");

    // for(const duration in uploadDuration) {
    //   console.log(uploadDuration)
    // }

    if (uploadDuration[0] > 0) {
      setUploadExp(`${uploadDuration[0]}d`);
      return;
    } else if (uploadDuration[1] > 0) {
      setUploadExp(`${uploadDuration[1]}h`);
      return;
    } else if (uploadDuration[2] > 0) {
      setUploadExp(`${uploadDuration[2]}m`);
      return;
    } else if (uploadDuration[3] > 0) {
      setUploadExp(`${uploadDuration[2]}s`);
      return;
    }
  }, [uploadAge]);

  // user liked post
  const handleLiked = async (postId, likedUserEmail) => {
    try {
      axios
        .put(
          "https://gossip-server.vercel.app/usersposts/liked",
          {
            postId,
            likedUserEmail,
          }
        )
        .then((data) => {
          // console.log(data)
          setIsLiked(!isLiked);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // user dislikedpost
  const handleDisLiked = async (postId, likedUserEmail) => {
    try {
      axios
        .put(
          "https://gossip-server.vercel.app/usersposts/disliked",
          {
            postId,
            likedUserEmail,
          }
        )
        .then((data) => {
          // console.log(data)
          setIsLiked(!isLiked);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // user post save to db
  const handleComment = async (data) => {
    const commentPostId = _id;
    const userComments = data?.userComment;
    const userEmail = user?.email;
    const userPhotoURL = user?.photoURL;
    const userName = user?.displayName;

    const commentsInfo = {
      commentPostId,
      userComments,
      userEmail,
      userPhotoURL,
      userName,
    };

    // console.log(
    //   commentPostId,
    //   userComments,
    //   userEmail,
    //   userPhotoURL,
    //   userName
    // );
    // console.log(commentsInfo);

    try {
      axios
        .put(
          "https://gossip-server.vercel.app/usersposts/comments",
          commentsInfo
        )
        .then((data) => {
          // console.log(data)
          setIsUserCommented(!isUserCommented);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card w-full bg-accent shadow-xl rounded-lg mb-4">
      <div className="card-body">
        {/* <AvatarWithName /> */}
        <div className="flex gap-x-1">
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
              {uploadeExp}
              <TiWorld />
            </p>
          </div>
        </div>
        <p className={`${!postInfo && "hidden"}`}>
          <span className={`${isSeeMore && "hidden"}`}>
            {postInfo ? postInfo?.slice(0, 270) : ""}
          </span>
          <span className={`${!isSeeMore && "hidden"}`}>{postInfo}</span>
          {!isSeeMore && (
            <span
              onClick={() => setIsSeeMore(!isSeeMore)}
              className="underline cursor-pointer pl-2 text-secondary block"
            >
              {postInfo?.length >= 270 && "See more..."}
            </span>
          )}
          {isSeeMore && (
            <span
              onClick={() => setIsSeeMore(!isSeeMore)}
              className="underline cursor-pointer pl-2 text-secondary block"
            >
              {postInfo?.length >= 270 && "see Less..."}
            </span>
          )}
          <Link
            to={`/userposts/${_id}`}
            className="text-base-100 flex justify-end"
          >
            <span className="bg-primary px-2 py-1 rounded-sm text-[.8rem]">
              See Details
            </span>
          </Link>
        </p>
      </div>
      <>
        <img
          src={postImgUrl ? postImgUrl : ""}
          className={`${!postImgUrl && "hidden"}`}
          alt="post"
        />
      </>
      <div className="px-4 pt-2 pb-4 flex justify-between">
        <p className="flex items-center justify-center">
          <span className="bg-[#077FE6] text-center w-4 h-4 rounded-full">
            <AiFillLike className="w-3 h-3 ml-[2px] mt-[1px]" />
          </span>
          <span className="pl-2 hover:underline cursor-pointer text-base-100 text-[1.1rem]">
            {likedUsers?.length ? likedUsers.length : "0"}
            <span className="text-secondary text-[.5rem] md:text-[.8rem]">
              {likedUsers?.includes(user?.email)
                ? ` | you ${likedUsers?.includes(user?.email) && likedUsers?.length === 1 ? "liked" : "and"} ${
                    likedUsers?.length - 1 > 0 ? likedUsers?.length - 1 : ""
                  }`
                : ""}
                <span className={`${likedUsers?.length > 1 ? "" : "hidden"}`}>{" "}others liked</span>
            </span>
          </span>
        </p>
        <p>
          <span>{commentUsers?.length ? commentUsers.length : 0}</span>
          <span
            onClick={() => setIsComment(!isComment)}
            className="pl-1 hover:underline cursor-pointer"
          >
            Comments
          </span>
        </p>
      </div>
      <hr className="mx-4" />
      <div className="px-4 py-1 flex justify-around">
        {!likedUsers?.includes(user?.email) ? (
          <button
            onClick={() => handleLiked(_id, likedUserEmail)}
            className="hover_btn px-4 py-2 flex items-center justify-center"
          >
            <AiFillLike />
            <span className="pl-1">Like</span>
          </button>
        ) : (
          <button
            onClick={() => handleDisLiked(_id, likedUserEmail)}
            className="hover_btn px-4 py-2 flex items-center justify-center text-secondary"
          >
            <AiFillDislike />
            <span className="pl-1">Dislike</span>
          </button>
        )}
        <button
          onClick={() => setIsComment(!isComment)}
          className="hover_btn px-4 py-2 flex items-center justify-center"
        >
          <FaCommentAlt />
          <span className="pl-1">Comments</span>
        </button>
      </div>
      <div className={`${!isComment && "hidden"}`}>
        <>
          <hr className="mx-4 hr_custom" />
          <div>
            <div className={`mt-2 px-4 flex gap-1`}>
              <Avatar />
              <form
                onSubmit={handleSubmit(handleComment)}
                className="w-full flex items-center md:block"
              >
                <input
                  {...register("userComment", {
                    required: true,
                  })}
                  className="w-2/3 md:w-full h-5/6 rounded-3xl outline-none bg-neutral px-2 overflow-hidden"
                />
                <input
                  type="submit"
                  value="comment"
                  className="ml-2 btn-primary px-3 py-2 rounded-lg w-1/3 md:hidden"
                />
              </form>
            </div>
          </div>
        </>
        {commentUsers?.length && <UsersComments commentPostId={_id} />}
      </div>
    </div>
  );
};

export default UsersPost;
