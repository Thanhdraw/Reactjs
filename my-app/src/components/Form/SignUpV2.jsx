// eslint-disable-next-line no-unused-vars
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// ...

const SignUpV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <Field
            name="firstName"
            type="text"
            className="p-4 rounded-md border border-gray-400"
            placeholder="Enter your first name"
          ></Field>
          <div className="text-sm text-red-500 ">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
          {/* Last-name */}
          <label htmlFor="lastName">LastName</label>
          <Field
            name="lastName"
            type="text"
            className="p-4 rounded-md border border-gray-400"
            placeholder="Enter your first name"
          ></Field>
          <div className="text-sm text-red-500 ">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpV2;
