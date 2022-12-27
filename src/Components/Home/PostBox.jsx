import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaImages } from "react-icons/fa";
import "../../customCss/custom.css";
import Avatar from "../Shared/Avatar";

const PostBox = () => {
  const [postText, setPostText] = useState("");
  // const [postImg, setPostImg] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePost = (data) => {
    console.log(data);
  };


  console.log(postText)

  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <form
      onSubmit={handleSubmit(handlePost)}
      className="mx-10 my-2 bg-accent rounded-md px-3 py-3"
    >
      <div className="flex items-center gap-4 w-full">
        <label className="btn btn-ghost btn-circle avatar">
          {/* <div className="w-10 rounded-full">
            <img src="https://i.ibb.co/4JKWmDG/anonymous.jpg" alt="user img" />
          </div> */}
          <Avatar />
        </label>
        <div className="w-full">
          <textarea
            name="postText"
            {...register("postText")}
            placeholder="Write your post here, Ramiz"
            className="outline-none block w-full rounded-xl text-[1rem] py-2 px-2 bg-neutral resize-none h-40 border-[2px] border-primary"
          ></textarea>
        </div>
      </div>
      <div className="py-4 text-base-100 flex justify-between">
        <button className="px-2 py-1 rounded-lg border-[2px] border-primary flex items-center w-64">
          <label className="text-secondary">
            <FaImages className="w-5 h-5" />
          </label>
          <input
            name="postImage"
            {...register("postImage")}
            className="custom-file-input cursor-pointer"
            type="file"
          />
        </button>
        {/* <button className=" btn hover:btn ml-2">
          <FaImages /> <span className="uppercase pl-2">P</span>hoto
        </button> */}
        <button
          className={`w-32 text-center text-secondary font-semibold bg-primary rounded-lg cursor-pointer hover:bg-secondary hover:text-base-100 border border-secondary`}
          type="submit"
        >
          {" "}
          Post
        </button>
      </div>

      <hr className="my-4" />
    </form>
  );
};

export default PostBox;
