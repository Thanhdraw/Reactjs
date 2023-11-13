// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";

const SignUpHook = () => {
  return (
    <form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="email"
          id="firstName"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your first name"
        />
      </div>
      {/* Last-name */}
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your last name"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your Email Address"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpHook;
