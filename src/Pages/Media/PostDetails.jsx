import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UsersPost from "../../Components/Media/UsersPost";

const PostDetails = () => {
  //   const [isPostLoading, setIsPostLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isUserCommented, setIsUserCommented] = useState(false);
  const data = useLoaderData();
  // console.log(data?.data);
  const post = data?.data;
  return (
    <div className="min-h-screen">
      <UsersPost
        post={post}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        isUserCommented={isUserCommented}
        setIsUserCommented={setIsUserCommented}
      />
    </div>
  );
};

export default PostDetails;
