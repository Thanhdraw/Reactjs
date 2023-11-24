import React from "react";
import InputHookFormik from "../input/InputFormik";
import { useFormik, Form, useField, Formik } from "formik";
import * as yup from "yup";
import RadioFormik from "../radio/RadioFormik";
import CheckboxFormik from "../checkbox/CheckboxFormik";
import DropDownFormik from "../dropdown/DropdownFormik";

// const validate = (values) => {
//   const errors = {};
//   if (!values.username) {
//     errors.username = "Required";
//   } else if (values.username.length > 15) {
//     errors.username = "Must be 15 characters or less";
//   }

//   return errors;
// };

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
const RegisterFormik = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        terms: false,
      }}
      validationSchema={yup.object({
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
        terms: yup
          .boolean()
          .oneOf([true], "Please check the term and conditions"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 3000);
      }}
    >
      {(formik) => {
        const watchGender = formik.values.gender;
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
          >
            <InputHookFormik
              name="username"
              placeholder="Enter your username"
              id="username"
              label="Username"
              type="text"
            ></InputHookFormik>
            {/* email */}
            <InputHookFormik
              name="email"
              placeholder="Enter your email address"
              id="email"
              label="Email address"
              type="email"
            ></InputHookFormik>
            {/* password */}
            <InputHookFormik
              name="password"
              placeholder="Enter your password"
              id="password"
              label="Password"
              type="password"
            ></InputHookFormik>
            <div className="flex flex-col gap-3 mb-5">
              <label className="cursor-pointer">Gender</label>
              <div className="flex items-center gap-5">
                <RadioFormik
                  name="gender"
                  values="male"
                  checked={watchGender === "male"}
                  label="Male"
                ></RadioFormik>

                <RadioFormik
                  name="gender"
                  values="female"
                  checked={watchGender === "female"}
                  label="Female"
                ></RadioFormik>
              </div>
            </div>
            {/* Select */}
            <div className="flex flex-col gap-3 mb-5">
              {/* <label className="cursor-pointer">Are you</label> */}
              <DropDownFormik
                labelText="Your job"
                name="job"
                data={dropdownData}
                setValue={formik.setFieldValue}
              ></DropDownFormik>
            </div>

            {/* Checkbox:Terms */}
            <CheckboxFormik
              name="terms"
              text="I accept the terms and conditions"
            ></CheckboxFormik>

            <button
              type="submit"
              className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold"
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
