import React, { useState } from "react";
import ReactDOM from "react-dom";
// creat Portal
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative modal-content bg-white z-10 p-10 rounded-lg w-[500px]">
        <span
          className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4 "
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <circle cx="19" cy="19" r="18.5" fill="white" stroke="#E7ECF3" />
            <path
              d="M20.225 19L25.7375 13.4875C26.0875 13.1375 26.0875 12.6125 25.7375 12.2625C25.3875 11.9125 24.8625 11.9125 24.5125 12.2625L19 17.775L13.4875 12.2625C13.1375 11.9125 12.6125 11.9125 12.2625 12.2625C11.9125 12.6125 11.9125 13.1375 12.2625 13.4875L17.775 19L12.2625 24.5125C12.0875 24.6875 12 24.8625 12 25.125C12 25.65 12.35 26 12.875 26C13.1375 26 13.3125 25.9125 13.4875 25.7375L19 20.225L24.5125 25.7375C24.6875 25.9125 24.8625 26 25.125 26C25.3875 26 25.5625 25.9125 25.7375 25.7375C26.0875 25.3875 26.0875 24.8625 25.7375 24.5125L20.225 19Z"
              fill="#84878B"
            />
          </svg>
        </span>
        <h2 className="mb-5 text-4xl font-medium text-center text-black">
          Welcome back
        </h2>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-md p-4"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-md p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-md">
          Sign in
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
