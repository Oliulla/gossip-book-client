import React from "react";
import PostBox from "../../Components/Home/PostBox";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingAnimation from "../../Components/Shared/LoadingAnimation";
import UsersPost from "../../Components/Media/UsersPost";
import { useState } from "react";

const Home = () => {
  const [isLiked, setIsLiked] = useState(false);

  const {
    data: trendingPosts = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["usersposts/trendings"],
    queryFn: async () => {
      try {
        const data = await axios.get(
          "http://localhost:5000/usersposts/trendings"
        );
        // console.log(data)
        return data.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (error) {
    console.log(error);
    // return <p>{error.mesdsage}</p>;
  }

  return (
    <div className="h-auto">
      <PostBox />
      {
      isLoading ? 
      <LoadingAnimation />
      : 
      (
        <div className="my-20">
          <h2 className="text-xl font-semibold text-base-100 mb-2">Trendings <span className="text-secondary">Now</span></h2>

          {
            trendingPosts.map(post => <UsersPost post={post} isLiked={isLiked} setIsLiked={setIsLiked} /> )
          }
        </div>
      )
      }
    </div>
  );
};

export default Home;
