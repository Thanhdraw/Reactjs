import React from "react";
import InputHookFormik from "../input/InputFormik";""
const RegisterFormik = () => {
  return (
    <form className="max-w-[300px] mx-auto my-10">
      <div className="flex flex-col gap-3 mb-5 ">
        <label htmlFor="username" className="cursor-pointer">
          UserName
        </label>
        <InputHookFormik 
          name="username"
          placeholder="Enter your username"
          id="username"
          type="text"></InputHookFormik>
         <p className="text-red-500 text-sm">Your errors message</p>

      </div>
      <button
        className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterFormik;
