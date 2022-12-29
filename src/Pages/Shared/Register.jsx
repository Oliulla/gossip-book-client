import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaImages } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/Shared/GoogleLogin";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUserToDb } from "../../api/savaUserToDb";
// import { useState } from "react";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  // const [userPhotoURL, setUserPhotoURL] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // img host key for imgbb
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    // console.log(data);

    // upload image to imgbb
    const image = data.userImg[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    createUser(email, password)
      .then((result) => {
        toast.success("successfully registered");
        // console.log(result.user);
        const user = result?.user;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            // console.log(imgData);
            if (imgData.success) {
              const displayName = name;
              const photoURL = imgData?.data?.url;
              // console.log(photoURL);
              const userInfo = { displayName, photoURL };
              updateUser(userInfo)
                .then(() => {
                  // console.log("updated user");
                  // setUserPhotoURL(photoURL)

                  // save user to db
                  saveUserToDb(user?.email, displayName, photoURL)
                    .then((result) => {
                      if(result.acknowledged) {
                        return navigate(from, {replace: true});
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="hero mt-6">
        <div className="hero-content lg:flex w-full">
          <div className="hidden md:block w-full h-full custom_overlay">
            <h1 className="text-4xl font-bold">
              Please Register first to visit
            </h1>
            <p>
              You must have to register to visit the webpage. Happy
              communication!
            </p>
            {/* <img src="https://i.ibb.co/NnxrdJM/registerpage.jpg" alt="" /> */}
          </div>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="card shadow-2xl bg-accent w-full"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-secondary">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: true,
                  })}
                  placeholder="Name"
                  className="input input-bordered text-accent"
                />
                {errors.name && errors.name.type === "required" && (
                  <p className="text-yellow-600 text-[.8rem]">
                    *Name is required.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-secondary">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                  placeholder="Email"
                  className="input input-bordered text-accent"
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="text-yellow-600 text-[.8rem]">
                    *Email is required.
                  </p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="text-yellow-600 text-[.8rem]">
                    *Email is not valid.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-secondary">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="Password"
                  className="input input-bordered text-accent"
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-yellow-600 text-[.8rem]">
                    *Password is required.
                  </p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="text-yellow-600 text-[.8rem]">
                    *Password should be at-least 6 characters.
                  </p>
                )}
              </div>
              <div className="form-control w-2/3 md:w-1/3">
                <label className="label">
                  <span className="label-text text-xl text-secondary">
                    Image
                  </span>
                </label>
                <button className="px-2 py-1 rounded-lg border border-secondary flex items-center">
                  <label className="text-secondary">
                    <FaImages className="w-5 h-5" />
                  </label>
                  <input
                    name="userImg"
                    {...register("userImg", {
                      required: true,
                    })}
                    className="custom-file-input cursor-pointer"
                    type="file"
                  />
                  {errors.userImg && errors.userImg.type === "required" && (
                    <p className="text-yellow-600 text-[.8rem]">
                      *Image is required.
                    </p>
                  )}
                </button>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-xl">
                  <span className="uppercase">R</span>egister
                </button>
                <Link to="/openroot/login">
                  Already have an account?{" "}
                  <span className="text-secondary underline">Login</span>
                </Link>
                <div className="divider">OR</div>
                <GoogleLogin />
                {/* <button className="btn btn-primary"><span className="uppercase">C</span>ontinue With <span className="uppercase pl-1">G</span>oogle</button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
