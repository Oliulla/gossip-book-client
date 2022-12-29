import { useQuery } from "@tanstack/react-query";
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
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);

  //   console.log(user)

  useEffect(() => {
    fetch(`http://localhost:5000/userpost/${user?.email}`)
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
        .get(`http://localhost:5000/users?email=${user?.email}`)
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

  //   console.log(currentUser);

  return (
    <div className="min-h-screen pt-18">
      <ProfileBanner currentUser={currentUser} />
      <div className="flex justify-center flex-col md:flex-row gap-4 w-full mt-2 px-2 md:px-28">
        <div className="w-full md:w-4/12">
          <div className="w-full my-2 bg-accent rounded-md px-3 py-3">
            <ProfileIntro
              currentUser={currentUser}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
            <ProfileIntroEditModal
              currentUser={currentUser}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              isProfileUpdate={isProfileUpdate}
              setIsProfileUpdate={setIsProfileUpdate}
            />
          </div>
          <ProfileFooter />
        </div>
        <div className="w-full md:w-7/12">
          <PostBox />
          {allPosts?.length &&
            allPosts?.map((post) => (
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
      </div>
    </div>
  );
};

export default About;
