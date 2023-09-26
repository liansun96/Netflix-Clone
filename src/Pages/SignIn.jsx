import React, { useContext, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToggleContext } from "../Context/ToggleProvider";
import "./SignUp.css";
import { ClapSpinner } from "react-spinners-kit";
import { BiHide, BiShow } from "react-icons/bi";

const SignIn = () => {

  const { token, setToken } = useContext(ToggleContext);


  const [email, setEmail] = useState("marcusjude.lian");
  const [password, setPassword] = useState("jokerxbox");
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const nav = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "marcusjude.lian" && password === "jokerxbox") {
      setIsLoading(true);
      setToken(!token);
      setTimeout(() => {
        setIsLoading(false);
        nav("/");
      }, 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <ClapSpinner size={30} backColor="#C30010" frontColor="#C30010" />
      </div>
    );
  }

  return (
    <div className="signup-bg w-full h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <div className=" bg-black bg-opacity-80 w-[90%] lg:w-[400px] lg:h-[500px] p-10 lg:p-16 rounded">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold text-gray-50">Sign In</h1>
              <div className="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="p-2 w-full h-12 bg-white outline-none rounded placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={show ? "text" : "password"}
                  className="p-2 w-full h-12 bg-white outline-none rounded placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Password"
                />
                <button
                  className=""
                  type="reset"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <BiHide className="absolute cursor-pointer text-xl right-4 top-4 " />
                  ) : (
                    <BiShow className="absolute cursor-pointer text-xl right-4 top-4 " />
                  )}
                </button>
              </div>
              <div className="mt-7">
                <div
                  onClick={handleSignIn}
                  className="h-12 font-semibold text-gray-50 text-center bg-red-600 rounded w-full p-2.5 cursor-pointer"
                >
                  Sign in
                </div>
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
              <div className="flex items-center gap-1 cursor-pointer">
                <AiFillFacebook className="text-blue-600 text-xl" />
                <h1 className="text-xs text-gray-300">Login with facebook</h1>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-xs text-gray-300">New to Netflix?</p>
                <Link to={"/signup"}>
                  <p className="text-xs text-gray-50 cursor-pointer font-semibold">
                    Sign up now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
