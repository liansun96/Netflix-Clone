import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/api/authApi";
import { addUser } from "../redux/services/authSlice";

const Login = () => {
  const [email, setEmail] = useState("jude@gmail.com");
  const [password, setPassword] = useState("jjboxerliz");
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const { data } = await login(user);
    dispatch(addUser({ user: data?.user, token: data?.token }));
    if (data?.success) navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={loginHandler}
        className="w-96 flex flex-col items-center bg-gray-100 p-5 rounded-lg gap-5"
      >
        <h1 className="text-xl font-bold mt-5 tracking-wide text-green-500">
          Login your account
        </h1>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-72 outline-none border-b-2 py-3 bg-transparent rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-72 outline-none border-b-2 py-3 bg-transparent rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small className="mt-3 text-xs">
          Don't have an account?
          <Link to={"/register"}>
            <span className="text-green-500 font-semibold cursor-pointer">
              {" "}
              register.
            </span>
          </Link>
        </small>
        <button
          type="submit"
          className="bg-green-500 py-2 px-5 rounded shadow text-sm font-semibold text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
