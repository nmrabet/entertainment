import React from "react";
import Button from "../components/Button";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Logo className="mx-auto my-10" />
      <div className="bg-backblue p-8 mx-auto rounded-lg space-y-4 max-w-md">
        <h2 className="text-4xl">Login</h2>
        <div className="flex flex-col font-lighter">
          <input
            type="email"
            placeholder="Email address"
            name=""
            id=""
            className="pl-4 pb-4 mt-4 bg-backblue border-b-metal border-b-2"
          />
          <input
            type="password"
            placeholder="Password"
            name=""
            id=""
            className="pl-4 pb-4 mt-4 bg-backblue border-b-metal border-b-2"
          />
        </div>
        <Button text="Login to your account" />
        <p className="text-center">
          Don't have an account?
          <Link to="/signin" className="text-specialred"> Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
