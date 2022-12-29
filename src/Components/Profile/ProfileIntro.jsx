import React from "react";
import { AiFillEdit } from "react-icons/ai";

const ProfileIntro = ({ currentUser, isModalOpen, setIsModalOpen }) => {
    console.log(currentUser);
  return (
    <div className="custom_span">
      <h3 className="font-bold text-xl text-base-100">Profile Intro</h3>
      <h2 className="mt-2">
        <span className="font-semibold text-secondary">Name:</span>
        <span className="pl-2">{
            currentUser?.updatedName ? currentUser?.updatedName : 
            currentUser?.userName
        }</span>
      </h2>
      <h2 className="mt-4">
        <span className="font-semibold text-secondary">Email:</span>
        <span className="pl-2">{currentUser?.updatedEmail ? currentUser?.updatedEmail : currentUser?.email}</span>
      </h2>
      <h2 className="mt-4">
        <span className="font-semibold text-secondary">Educations:</span>
        <span className="pl-2">{currentUser?.updatedEducation ? currentUser?.updatedEducation : "add education"}</span>
      </h2>
      <h2 className="mt-4">
        <span className="font-semibold text-secondary">Address:</span>
        <span className="pl-2">{currentUser?.updatedAddress ? currentUser?.updatedAddress : "add living address"}</span>
      </h2>
      <div className="card-actions justify-end">
        <label
        //   onClick={() => setIsModalOpen(!isModalOpen)}
          htmlFor="edit-profile"
          className="flex items-center gap-1 mt-10 bg-gray-600 px-3 py-1 rounded-md hover:btn-primary cursor-pointer"
        >
          <AiFillEdit className="w-5 h-5" />
          <span>Edit Intro</span>
        </label>
      </div>
    </div>
  );
};

export default ProfileIntro;
