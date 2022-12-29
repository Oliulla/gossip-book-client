import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { saveUserToDb } from "../../api/savaUserToDb";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("Successfully logged in!");
        // console.log(result?.user);
        const user = result?.user;
        saveUserToDb(user?.email, user?.displayName, user?.photoURL)
          .then((result) => {
            console.log(result);
            return navigate(from, {replace: true});
          })
          .catch((err) => {
            console.log(err);
          });
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
