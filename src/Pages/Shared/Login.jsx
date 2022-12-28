import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/Shared/GoogleLogin";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const {userLogin, setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    // console.log(data);
    setLoading(true)
    userLogin(data?.email, data?.password)
    .then(result => {
      console.log(result);
      toast.success('Successfully logged in!');
      setLoading(false);
      
      return navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message)
    })
  };

  return (
    <div className="min-h-screen py-20">
      <div className="hero mt-6">
        <div className="hero-content lg:flex">
          <div className="hidden md:block w-full h-full">
            <h1 className="text-4xl font-bold">Please Login first to visit</h1>
            <p>
              You must have login to visit the webpage. Happy communication!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="card shadow-2xl bg-accent w-full"
          >
            <div className="card-body">
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
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-xl">
                  <span className="uppercase">L</span>ogin
                </button>
                <Link to="/openroot/register">
                  New here? <span className="text-secondary underline">Register</span>
                </Link>
                <div className="divider">OR</div>
                <GoogleLogin />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
