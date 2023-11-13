// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFormik } from "formik";
import { useForm } from "react-hook-form"
import * as Yup from "yup";
// ...

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "First name is required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Last name is required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }
//   return errors;
// };
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your first name"
          {...formik.getFieldProps("firstName")}
        />

        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : (
          ""
        )}
        {/* Last-name */}
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your last name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : (
          ""
        )}
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

export default SignUp;
