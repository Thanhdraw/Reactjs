import { useField } from "formik";
import React from "react";

const InputHookFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3 mb-5 ">
      <label htmlFor={props.id} className="cursor-pointer">
        {label}
      </label>
      <input
        className="p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-500 text-black"
        {...field}
        {...props}
      ></input>
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-sm">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default InputHookFormik;
