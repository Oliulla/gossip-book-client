import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Avatar from "./Avatar";

const UsersComments = ({ commentPostId }) => {
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    axios
      .get("https://gossip-server.vercel.app/userposts/allcomments")
      .then((data) => {
        // console.log(data)
        setAllComments(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(allComments)

  return (
    <div>
      {allComments?.map(
        (comment) =>
          comment?.commentPostId === commentPostId && (
            <div key={comment._id} className={`mt-1 px-4 flex`}>
              <Avatar className={"w-8"} photoURL={comment?.userPhotoURL} />
              <div className="w-full bg-neutral rounded-2xl py-2 px-3 mb-2 h-auto">
                <span className="text-[1rem] text-base-100 font-semibold hover:underline cursor-pointer">
                  {comment?.userName}
                </span>
                <p>{comment?.userComments}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default UsersComments;
