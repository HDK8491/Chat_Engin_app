import React, { useState, ChangeEvent, FormEvent } from "react";

import {
  AiOutlineUser,
  AiFillLock,
  AiOutlineGoogle,
  AiOutlineMail,
} from "react-icons/ai";
import { LogIn, SignUp } from "../../../action/AuthAction.js";
import { FaMicrosoft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { BiMessageSquareDots } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom"; /

const Register = () => {
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  const loading = useSelector((state: any) => state.authReducer.loading);
  const initialState = {
    username: "",
    email: "",
    password: "",
    VerifyPassword: "",
  };
  const [data, setData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState(true);

  const [action, setAction] = useState("Sign Up");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Redirect = () => {
    navigate("/home");
  };

  const resetForm = () => {
    setData(initialState);
    setVerifyPassword(verifyPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setVerifyPassword(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.VerifyPassword
        ? dispatch(SignUp(data, navigate))
        : setVerifyPassword(false);
    } else {
      dispatch(LogIn(data, navigate));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full h-auto space-y-8 border-1 shadow-md shadow-gray-600 border-indigo-500 border-1 bg-gray-900 p-10 bg-opacity-30 rounded-xl ">
        <div>
          <h2 className="mt-6 flex items-center justify-center gap-2 text-3xl font-extrabold text-gray-200">
            <span>
              <BiMessageSquareDots />
            </span>
            Chat<span className="text-indigo-500 m-[-8px]">App</span>
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-px">
            <div className=" flex gap-2 items-center border-b  border-gray-600 ">
              <span className="px-2">
                {" "}
                <AiOutlineUser />
              </span>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={data.username}
                onChange={handleChange}
                className="appearance-none rounded-none relative bg-transparent w-full py-2  placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div className=" flex gap-2 items-center border-b  border-gray-600 ">
              <span className="px-2">
                {" "}
                <AiOutlineMail />
              </span>
              <input
                id="emaill"
                name="email"
                type="emaill"
                autoComplete="email"
                required
                value={data.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative bg-transparent w-full py-2  placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-2 items-center border-b  border-gray-600">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <span className="px-2">
                {" "}
                <AiFillLock />{" "}
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={data.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative bg-transparent w-full py-2  placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {!isSignUp ? (
              <div></div>
            ) : (
              <div className="flex gap-2 items-center border-b  border-gray-600">
                <label htmlFor="VerifyPassword" className="sr-only">
                  VerifyPassword
                </label>
                <span className="px-2">
                  {" "}
                  <AiFillLock />{" "}
                </span>
                <input
                  id="VerifyPassword"
                  name="VerifyPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={data.VerifyPassword}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative bg-transparent w-full py-2  placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="confirmPassword"
                />
              </div>
            )}
            {/* {action === "Login" ? (
              <div></div>
            ) : (
              <div className="relative bg-transparent flex items-center justify-start py-5 gap-1 font-normal text-xs ">
                Don't Have an Account ?
                <span className="text-indigo-500"> SignUp </span>
                <span
                  style={{
                    fontSize: "12px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    resetForm();
                    setIsSignUp((prev) => !prev);
                  }}>
                  {isSignUp
                    ? "Already have an account Login"
                    : "Don't have an account Sign up"}
                </span>
              </div>
            )} */}

            <div>
              <span
                className="relative bg-transparent flex items-center justify-start py-5 gap-1 font-normal text-xs"
                style={{
                  fontSize: "13px",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onClick={() => {
                  resetForm();
                  setIsSignUp((prev) => !prev);
                }}>
                {isSignUp ? (
                  <div>
                    Already have an account ?
                    <span className="text-indigo-500"> Login </span>
                  </div>
                ) : (
                  <div className=" ">
                    Don't have an account ?
                    <span className="text-indigo-500"> SignUp </span>
                  </div>
                )}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              disabled={loading}
              className={
                "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }>
              {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
            <div className="flex items-center justify-center py-5 text-sm">
              <p className="w-10 border-indigo-500 border-[1px]" />
              <p className="px-2">Login with ChatApp</p>
              <p className="w-10 border-indigo-500  border-[1px]" />
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <div className="flex items-center justify-center gap-1">
                <span>
                  <AiOutlineGoogle />
                </span>
                <p className="text-xs">Google</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span>
                  <FaMicrosoft />
                </span>
                <p className="text-xs ">Microsoft</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
