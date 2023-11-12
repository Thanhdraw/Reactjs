import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and codition"
        ),
      })}
      onSubmit={(values, actions) => {
        // console.log(actions);
        // console.log(values);

        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="firstName"
              name="firstName"
              placeholder="Enter your firstName"
              id="firstName"
            ></MyInput>
            {/* lastName */}
            <MyInput
              label="lastName"
              name="lastName"
              placeholder="Enter your lastName"
              id="lastName"
            ></MyInput>
            {/* email */}
            <MyInput
              label="email"
              name="email"
              placeholder="Enter your email"
              id="email"
              type="email"
            ></MyInput>
            {/* intro */}
            <MyTextarea
              label="introduce YourSelf"
              name="email"
              placeholder="Enter your introduce"
              id="intro"
            ></MyTextarea>
            <SelectBox
              label="Select your job"
              name="job"
              placeholder="Select your job"
              id="intro"
            >
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Full-stack">Full-stack</option>
            </SelectBox>
            <MyCheckBox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckBox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                disabled={formik.isSumitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
// useField
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        type="text"
        className="p-4 rounded-md border border-gray-100 "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex item-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
