import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SignUp = () => {
  return (
    <div className="signup-bg w-full h-screen">
      <div className="flex flex-col items-center justify-start bg-black bg-opacity-80  w-full h-full">
        <div className="w-[90%] lg:w-[80%] mx-auto flex justify-between items-center mt-5 mb-60">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            }
            className="h-[50px] my-2 cursor-pointer"
            alt=""
          />
          <Link to={'/signin'}>
            <div className="text-base font-semibold text-gray-50 text-center bg-red-600 hover:bg-red-700 duration-150 rounded px-5 py-2">
              Sign in
            </div>
          </Link>
        </div>
        <div className="w-[90%] mx-auto p-2 lg:w-[950px] lg:p-5 rounded">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-start lg:items-center gap-5">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-50 text-start">
                Unlimited movies, TV shows, and more
              </h1>
              <p className="text-xl lg:text-3xl font-semibold text-white text-start">
                Watch anywhere. Cancel anytime.
              </p>
              <p className="text-base lg:text-xl font-normal text-white text-start">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                <div className="">
                  <form>
                    <input
                      type="email"
                      className="h-14 p-4 w-[300px] lg:w-[400px] bg-black bg-opacity-50 border border-gray-400 focus:outline-white text-gray-50 text-sm  rounded placeholder:text-gray-200 placeholder:text-lg"
                      placeholder="Email Address"
                    />
                  </form>
                </div>
                <div className="">
                  <Link to={"/signin"}>
                    <div className="flex items-center gap-4 h-14 p-4 px-10 text-lg font-semibold text-gray-50 bg-red-600 hover:bg-red-700 duration-150 rounded">
                      Get Started <MdOutlineArrowForwardIos />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
