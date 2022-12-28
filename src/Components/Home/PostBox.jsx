import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaImages } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";
import "../../customCss/custom.css";
import Avatar from "../Shared/Avatar";
import axios from "axios";
import LoadingAnimation from "../Shared/LoadingAnimation";
import { Link } from "react-router-dom";

const PostBox = () => {
  const { user } = useContext(AuthContext);
  const [isUploadLoading, setIsUploadLoading] = useState(false);
  const [postImgUrl, setPostImgUrl] = useState("");

  // img host key for imgbb
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const formValue = watch();
  // console.log(formValue?.postText, formValue?.postImage?.length);

  const handlePost = (data) => {
    // console.log(data?.postImage);

    setIsUploadLoading(true);
    // // post upload time
    const date = new Date();
    const postTime = date.getTime();

    const userPostText = data?.postText;

    // upload image to imgbb
    const image = data?.postImage[0];
    // console.log(image)
    const formData = new FormData();
    formData.append("image", image);

    if (formValue?.postImage?.length) {
      const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

      // setIsUploadLoading(true);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData?.success) {
            console.log(imgData, imgData?.data?.url);
            const postPhotoUrl = imgData?.data?.url;
            savePostToDb(
              postPhotoUrl,
              userPostText,
              postTime,
              user?.displayName,
              user?.photoURL
            );
            setIsUploadLoading(false);
            // toast.success('Post Uploaded')
            // reset(formValue);
            return;
          }
        })
        .catch((error) => {
          console.log(error);
          setIsUploadLoading(false);
        });
    } else {
      savePostToDb(
        postImgUrl,
        userPostText,
        postTime,
        user?.displayName,
        user?.photoURL
      );
      // reset(formValue);
      setIsUploadLoading(false);
      return;
    }
  };

  const savePostToDb = async (
    postImgUrl = "default",
    postInfo,
    uploadTime,
    userName,
    userPhoto
  ) => {
    try {
      const postData = {
        postImgUrl,
        postInfo,
        uploadTime,
        userName,
        userPhoto,
      };
      const data = await axios.post(
        "http://localhost:5000/usersposts",
        postData
      );
      // console.log(data);
      if (data?.data?.acknowledged) {
        toast.success("Post Uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isUploadLoading && <LoadingAnimation />}
      <form
        onSubmit={handleSubmit(handlePost)}
        className="mx-0 my-2 bg-accent rounded-md px-3 py-3"
      >
        <div className="flex items-center gap-4 w-full">
          <Link to="/about">
            <label className="btn btn-ghost btn-circle avatar">
              <Avatar />
            </label>
          </Link>
          <div className="w-full">
            <textarea
              name="postText"
              {...register("postText")}
              placeholder={`Write your post here, ${
                user?.displayName?.split(" ")[0]
              }`}
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
            className={`w-32 text-center text-secondary font-semibold bg-primary 
          rounded-lg cursor-pointer hover:bg-secondary
          hover:text-base-100 border border-secondary
          ${
            !formValue?.postText && !formValue?.postImage?.length
              ? "btn-disabled bg-gray-600"
              : ""
          }
          `}
            type="submit"
          >
            {" "}
            Post
          </button>
        </div>

        <hr className="my-4" />
      </form>
    </>
  );
};

export default PostBox;
