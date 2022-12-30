import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const ProfileIntroEditModal = ({
  currentUser,
  isModalOpen,
  setIsModalOpen,
  isProfileUpdate,
  setIsProfileUpdate
}) => {
  //   console.log(currentUser);
  const { userName, email, _id } = currentUser;
  const {
    register,
    handleSubmit,
    // formState: { errors },
    // watch,
  } = useForm();

  //   const formValue = watch();
  //   console.log(formValue);

  const handleUpdateIntro = async (data) => {
    try {
      const userId = _id;
      const updatedName = data?.name;
      const updatedEmail = data?.email;
      const updatedEducation = data?.education;
      const updatedAddress = data?.address;
      const updateInfo = {
        userId,
        updatedName,
        updatedEmail,
        updatedEducation,
        updatedAddress,
      };

      //   console.log(updateInfo);

      const updateData = await axios.put(`https://gossip-server-akhsv5tmq-oliulla.vercel.app/users/update`, {
        updateInfo,
      });

      console.log(updateData);
      if (updateData?.data?.acknowledged) {
        // setIsModalOpen(!isModalOpen);
        setIsProfileUpdate(!isProfileUpdate);
        toast.success("Saved");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <>
          <input type="checkbox" id="edit-profile" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative bg-accent border border-primary text-primary">
              <label
                htmlFor="edit-profile"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <form
                onSubmit={handleSubmit(handleUpdateIntro)}
                className="grid grid-cols-1 gap-3 mt-10"
              >
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Your name"
                  defaultValue={userName}
                  {...register("name", { required: true })}
                />
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Your email"
                  defaultValue={email}
                  {...register("email", { required: true })}
                />
                <input
                  type="text"
                  placeholder="education"
                  className="input w-full"
                  {...register("education", { required: true })}
                />
                <input
                  type="text"
                  placeholder="address"
                  className="input w-full"
                  {...register("address", { required: true })}
                />
                <p className="text-secondary mb-2">*every field is required</p>
                <label>
                  <input
                    type="submit"
                    className="w-full text-white rounded btn btn-primary uppercase"
                    value="Save"
                  />
                </label>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileIntroEditModal;
