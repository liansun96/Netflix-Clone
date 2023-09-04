import React, { useContext, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToggleContext } from "../Context/ToggleProvider";
import "./SignUp.css";

const SignIn = () => {
  const { setToken } = useContext(ToggleContext);

  const [email, setEmail] = useState("marcusjude.lian");
  const [password, setPassword] = useState("jokerxbox");

  const nav = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "marcusjude.lian" && password === "jokerxbox") {
      setToken(true);
      setTimeout(() => {
        nav("/");
      }, []);
    }
  };

  return (
    <div className="signup-bg w-full h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <div className=" bg-black bg-opacity-80 w-[350px] h-[500px] p-12 rounded">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-5">
              <h1 className="text-lg text-gray-50">Sign In</h1>
              <div className="">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={email}
                  type="email"
                  className="p-2 w-full bg-gray-500 outline-none text-gray-50 text-sm  rounded placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="text"
                  className="p-2 w-full bg-gray-500 outline-none text-gray-50 text-sm rounded placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Password"
                />
              </div>
              <div className="mt-7">
                <div
                  onClick={handleSignIn}
                  className="text-xs font-semibold text-gray-50 text-center bg-red-600 rounded w-full p-2.5 cursor-pointer"
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
