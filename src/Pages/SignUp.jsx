import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-bg w-full h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <div className=" bg-black bg-opacity-80 w-[350px] h-[500px] p-12 rounded">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-gray-50">Sign Up</h1>
              <div className="">
                <form>
                  <label htmlFor="name" className="text-sm text-gray-50">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="p-2 w-full bg-gray-500 outline-none text-gray-50 text-sm  rounded placeholder:text-gray-200 placeholder:text-sm"
                    placeholder="Enter your name"
                  />
                </form>
              </div>
              <form>
                <label htmlFor="email" className="text-sm text-gray-50">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="p-2 w-full bg-gray-500 outline-none text-gray-50 text-sm  rounded placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Enter your email"
                />
              </form>
              <div className="mt-10">
                <Link to={"/"}>
                  <div className="text-xs font-semibold text-gray-50 text-center bg-red-600 rounded w-full p-2.5">
                    Sign Up
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input type="checkbox" />
                  <p className="text-xs text-gray-300">Remember me</p>
                </div>
                <p className="text-xs text-gray-300">Need help?</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <p className="text-xs text-gray-300">
                  Back to{" "}
                  <Link to={"/"}>
                    <span className="text-gray-50 text-xs font-semibold">
                      Netflix
                    </span>
                  </Link>
                  ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
