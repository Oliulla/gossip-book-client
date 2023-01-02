// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import PostBox from "../../Components/Home/PostBox";
import UsersPost from "../../Components/Media/UsersPost";
import ProfileBanner from "../../Components/Profile/ProfileBanner";
import ProfileFooter from "../../Components/Profile/ProfileFooter";
import ProfileIntro from "../../Components/Profile/ProfileIntro";
import ProfileIntroEditModal from "../../Components/Profile/ProfileIntroEditModal";
import LoadingAnimation from "../../Components/Shared/LoadingAnimation";
import { AuthContext } from "../../Contexts/AuthProvider";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isUserCommented, setIsUserCommented] = useState(false);
  const { user } = useContext(AuthContext);
  const [allPosts, setAllPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);

  //   console.log(user)

  useEffect(() => {
    fetch(
      `https://gossip-server.vercel.app/userpost/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email, isLiked]);

  useEffect(() => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://gossip-server.vercel.app/users?email=${user?.email}`
        )
        .then((data) => {
          // console.log(data);
          // return data?.data;
          setCurrentUser(data?.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [user?.email, isProfileUpdate]);

  // console.log("ki thake", currentUser);

  return (
    <>
      {currentUser?.email ? (
        <div className="min-h-screen pt-18">
          <ProfileBanner currentUser={currentUser} zIndex={"z-0"} />
          <div className="flex justify-center flex-col md:flex-row gap-4 w-full mt-2 px-2 md:px-28">
            <div className="w-full md:w-4/12 md:relative">
              <div className="md:sticky top-20">
                <div className="w-full my-2 bg-accent rounded-md px-3 py-3">
                  <ProfileIntro
                    currentUser={currentUser}
                  />
                  <ProfileIntroEditModal
                    currentUser={currentUser}
                    isProfileUpdate={isProfileUpdate}
                    setIsProfileUpdate={setIsProfileUpdate}
                    zIndex={"z-1000000"}
                  />
                </div>
                <ProfileFooter />
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <PostBox zIndex={"z-0"} />
              {allPosts?.length
                ? allPosts?.map((post) => (
                    <UsersPost
                      key={post._id}
                      post={post}
                      isLiked={isLiked}
                      setIsLiked={setIsLiked}
                      isUserCommented={isUserCommented}
                      setIsUserCommented={setIsUserCommented}
                      zIndex={"z-0"}
                    />
                  ))
                : undefined}
            </div>
          </div>
        </div>
      ) : (
        <LoadingAnimation loadingText={"Loading, please wait..."} />
      )}
    </>
  );
};

export default About;
