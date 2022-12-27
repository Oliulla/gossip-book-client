import React from "react";
import AvatarWithName from "../../Components/Shared/AvatarWithName";

const Media = () => {
  return (
    <div className="min-h-screen">
      <div className="card w-full bg-accent shadow-xl rounded-lg">
        <div className="card-body">
          <AvatarWithName />
          {/* <div className="flex items-center gap-2">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://i.ibb.co/4JKWmDG/anonymous.jpg"
                  alt="user img"
                />
              </div>
            </label>
            <h3 className="text-2xl">Rahim Uddin</h3>
          </div> */}
          <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus?</p>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="https://placeimg.com/400/225/arch"
            className="w-full h-96"
            alt="Shoes"
          />
        </figure>
        <div className="px-4 pt-2 pb-4 flex justify-between">
          <p>
            <span>@</span>
            <span className="pl-1 hover:underline cursor-pointer">10k</span>
          </p>
          <p>
            <span>130</span>
            <span className="pl-1 hover:underline cursor-pointer">
              Comments
            </span>
          </p>
        </div>
        <hr className="mx-4" />
        <div className="px-4 py-3 pb-4 flex justify-around">
          <button className="hover_btn px-4 py-2">
            <span>@</span>
            <span className="pl-1">Like</span>
          </button>
          <button className="hover_btn px-4 py-2">
            <span>(^)</span>
            <span className="pl-1">
              Comments
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Media;
