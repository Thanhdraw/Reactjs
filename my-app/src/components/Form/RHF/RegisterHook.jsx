import React from "react";
import { useController, useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropDownHook from "../dropdown/DropDownHook";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),

    password: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/, {
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number",
      })
      .required(),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "you can only select Male or Female"),
    job: yup.string().required("Please select your job"),
    terms: yup.boolean().required(),
  })
  .required();

const dropdownData = [
  {
    id: 1,
    value: "Front-end",
    text: "Front-end",
  },
  {
    id: 2,
    value: "Back-end",
    text: "Back-end",
  },
  {
    id: 3,
    value: "Full-stack",
    text: "Full-stack",
  },
];

const RegisterHook = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    watch,
    control,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });
  console.log("errors", errors);

  const onSubmitHandler = (values) => {
    if (!isValid) return;
    // console.log(JSON.stringify(values));
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          username: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          terms: false,
        });
      }, 3000);
    });
  };
  const watchGender = watch("gender");
  console.log(watchGender);
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5 ">
        <label htmlFor="username" className="cursor-pointer">
          UserName
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          control={control}
          type="text"
        ></InputHook>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter your email"
          control={control}
          type="email"
        ></InputHook>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          control={control}
          type="password"
        ></InputHook>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              values="male"
              checked={watchGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              values="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropDownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
          dropDownLabel={isSubmitSuccessful ? "Please select" : "Please select"}
        ></DropDownHook>
        {errors.job && (
          <p className="text-red-500 text-sm">{errors.job?.message}</p>
        )}
        {/**/}
      </div>
      {/* checkbox */}
      <div className="">
        <CheckboxHook
          name="terms"
          control={control}
          text="I accept the terms and conditions"
        ></CheckboxHook>
        {errors.terms && (
          <p className="text-red-500 text-sm">{errors.terms?.message}</p>
        )}
      </div>
      <button
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${
          isSubmitting ? "opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
