import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UsersPost from "../../Components/Media/UsersPost";
import LoadingAnimation from "../../Components/Shared/LoadingAnimation";
// import AvatarWithName from "../../Components/Shared/AvatarWithName";

const Media = () => {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isUserCommented, setIsUserCommented] = useState(false);
  

  useEffect(() => {
    setIsPostLoading(true);
    axios
      .get("https://gossip-server.vercel.app/usersposts")
      .then((data) => {
        // console.log(data?.data);
        setAllPosts(data?.data);
        setIsPostLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPostLoading(false);
      });
  }, [isLiked, isUserCommented]);

  return (
    <div className="min-h-screen pt-2">
      {isPostLoading ? (
        <LoadingAnimation />
      ) : (
        allPosts?.map((post) => {
          return (
            <UsersPost
              key={post._id}
              post={post}
              setIsLiked={setIsLiked}
              isLiked={isLiked}
              isUserCommented={isUserCommented} 
              setIsUserCommented={setIsUserCommented}
            />
          );
        })
      )}
    </div>
  );
};

export default Media;
