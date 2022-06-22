import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import githup from "../../../images/social/githup.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if(loading || loading1){
    return <Loading></Loading>
  }


  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p>Error: {error?.message} {error1?.message}</p>
      </div>
    );
  }

  if (user|| user1) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-4">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        style={{ height: "37px" }}
        className="d-flex align-items-center justify-content-center mx-auto btn btn-primary w-50 mb-2"
      >
        <img style={{ heigth: "10px", width: "30px" }} src={google} alt="" />
        <span className="px-2">Google Sign In</span>
      </button>
      <button
        style={{ height: "37px" }}
        className="d-flex align-items-center justify-content-center mx-auto btn btn-primary w-50 mb-2"
      >
        <img style={{ heigth: "10px", width: "30px" }} src={facebook} alt="" />
        <span className="px-2">Facebook Sign In</span>
      </button>
      <button
      onClick={() => signInWithGithub()}
        style={{ height: "37px" }}
        className="d-flex align-items-center justify-content-center mx-auto btn btn-primary w-50 mb-2"
      >
        <img style={{ heigth: "10px", width: "30px" }} src={githup} alt="" />
        <span className="px-2">Githup Sign In</span>
      </button>
    </div>
  );
};

export default SocialLogin;
