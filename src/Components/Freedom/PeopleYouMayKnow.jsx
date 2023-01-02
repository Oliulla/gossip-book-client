import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
// import AvatarWithName from "../Shared/AvatarWithName";
import PeopleMayKnowAvatar from "../Shared/PeopleMayKnowAvatar";

const PeopleYouMayKnow = () => {
  const [seeMore, setSeeMore] = useState(false);
  const {
    data: allUsers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      try {
        const data = await axios.get("https://gossip-server-nf7b5t583-oliulla.vercel.app/allusers");
        return data?.data;
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (error) {
    console.log(error);
  }
  // console.log(allUsers);
  const limitUser = allUsers.slice(0, 3);

  return (
    <>
      {isLoading ? (
        <p className="text-secondary bg-slate-900">Loading...</p>
      ) : (
        <div>
          <h2 className="text-xl md:text-2xl text-teal-500 font-bold">
            People You May Know
          </h2>
          <div>
            {!seeMore && limitUser?.map((user) => {
              return (
                <div key={user?._id} className="mb-4">
                  <PeopleMayKnowAvatar
                    allUsers={user}
                    allClasses={{ avatarBG: "bg-primary" }}
                  />
                </div>
              );
            })}
            {seeMore && allUsers?.map((user) => {
              return (
                <div key={user?._id} className="mb-4">
                  <PeopleMayKnowAvatar
                    allUsers={user}
                    allClasses={{ avatarBG: "bg-primary" }}
                  />
                </div>
              );
            })}
            <>
              <div className="btn btn-secondary btn-sm">
                {
                  !seeMore ? <p onClick={() => setSeeMore(!seeMore)}>
                  <span className="uppercase">S</span>ee more
                </p>
                :
                <p onClick={() => setSeeMore(!seeMore)}>
                  <span className="uppercase">S</span>ee less
                </p>
                }
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default PeopleYouMayKnow;
