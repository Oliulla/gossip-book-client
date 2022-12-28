import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result?.user);
        toast.success("Successfully logged in!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-primary">
      <span className="uppercase">C</span>ontinue With{" "}
      <span className="uppercase pl-1">G</span>oogle
    </button>
  );
};

export default GoogleLogin;
