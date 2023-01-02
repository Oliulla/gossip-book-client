import React from "react";

const PeopleMayKnowAvatar = ({ allUsers, allClasses }) => {
  const { userName, updatedName, userPhotoURL } = allUsers;
  return (
    <div className={`${allClasses?.avatarBG}`}>
    <div className={`flex items-center gap-2 p-2 rounded-lg w-full`}>
      <label className="btn btn-ghost btn-circle avatar">
        <div className={`w-10 rounded-full`}>
          <img src={`${userPhotoURL}`} alt="user img" />
        </div>
      </label>
      <button className={`text-[1.1rem] hover:underline`}>
        {!updatedName ? userName : updatedName}
      </button>
    </div>
    <div className="pb-2 px-2">
        <button className="btn btn-secondary btn-sm"><span className="uppercase">S</span> end Friend Request</button>
    </div>
    </div>
  );
};

export default PeopleMayKnowAvatar;
