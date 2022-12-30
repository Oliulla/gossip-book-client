import React from "react";
import PostBox from "../../Components/Home/PostBox";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingAnimation from "../../Components/Shared/LoadingAnimation";
import UsersPost from "../../Components/Media/UsersPost";
import { useState } from "react";

const Home = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isUserCommented, setIsUserCommented] = useState(false);

  const {
    data: trendingPosts = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["usersposts/trendings", isLiked],
    queryFn: async () => {
      try {
        const data = await axios.get(
          "https://gossip-server-akhsv5tmq-oliulla.vercel.app/usersposts/trendings"
        );
        console.log(data)
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

  console.log(trendingPosts)

  return (
    <div className="min-h-screen w-full">
      <PostBox />
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="my-16 w-full">
          <h2 className="text-xl font-semibold text-base-100 mb-2">
            Trendings <span className="text-secondary">Now</span>
          </h2>

          {trendingPosts?.map((post) => (
            <UsersPost
              key={post._id}
              post={post}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              isUserCommented={isUserCommented}
              setIsUserCommented={setIsUserCommented}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
