import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../../Shared/Loading/Loading";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../../Shared/PageTitle/PageTitle";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleNavigateRegister = () => {
    navigate("/register");
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }

  const handleLogin = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  // forget reset send user
  const handleResetSendPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="container mx-auto w-50 border p-5">
      <PageTitle title="login"></PageTitle>
      <h2 className="text-primary text-center">Login Page</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button
          className="w-50 mx-auto d-block mb-3"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        New user Ginius car
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none ms-2 "
          onClick={handleNavigateRegister}
        >
          Please Register
        </Link>
      </p>
      <p>
        New user Ginius car
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none ms-2"
          onClick={handleResetSendPassword}
        >
          Reset password
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
