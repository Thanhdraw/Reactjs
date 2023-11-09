import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Input = () => {
  //   const [value, setValue] = useState({
  //     fullName: "",
  //     email: "",
  //     hobby: false,
  //   });
  //   const handleInputChange = (e) => {
  //     const type = e.target.type;
  //     if (type === "checkbox") {
  //       setValue({
  //         ...value,
  //         [e.target.name]: e.target.checked,
  //       });
  //     } else {
  //       setValue({
  //         ...value,
  //         [e.target.name]: e.target.value,
  //       });
  //     }
  //   };
  const { values, handleChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullName === "") {
      setNameError("Your fullname is Emty");
    } else {
      setNameError("");
    }
  };
  console.log(values);
  return (
    <div className="p-5">
      <form className="flex gap-x-3 p-5 mr-2" onSubmit={handleSubmitForm}>
        <div>
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-3 border border-gray-300 rounded-lg"
            placeholder="Enter you name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <input
          type="text"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-300 rounded-lg"
          placeholder="Enter you Email"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-3 rounded-lg text-white bg-blue-500 ml-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
