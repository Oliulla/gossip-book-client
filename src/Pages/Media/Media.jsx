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

  useEffect(() => {
    setIsPostLoading(true)
    axios.get('http://localhost:5000/usersposts')
    .then(data => {
      // console.log(data?.data);
      setAllPosts(data?.data);
      setIsPostLoading(false);
    })
    .catch(err => {
      console.log(err);
      setIsPostLoading(false);
    })
  }, [isLiked])

  return (
    <div className="min-h-screen">
      {
        isPostLoading ? <LoadingAnimation />
        :
        allPosts?.map(post => {
          return <UsersPost key={post._id} post={post} setIsLiked={setIsLiked} isLiked={isLiked} />
        })
      }
    </div>
  );
};

export default Media;
