// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Controller, useController, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please fill this field")
    .max(10, "Must be 10 characters or less"),
});

const SignUpHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    // mode: "onChange",
  });
  // console.log(isValid);
  // console.log(isDirty);
  // console.log("dirtyFields", dirtyFields);
  const watchShowAge = watch("showAge", false);
  console.log("watchShowAge", watchShowAge);
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("send data to backend");
      // after successfully submited
      // then reset
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    console.log(values);
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 2000);
    // });
  };

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleDemoData = () => {
    setValue("firstName", "thanhDev");
    setValue("lastName", "Dang");
    setValue("email", "abc@gmail.com");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <MyInput
          name="firstName"
          placeholder="Enter your first name"
          id="firstName"
          control={control}
        ></MyInput>
        {/* <input
          type="text"
          id="firstName"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your first name"
          // {...register("firstName", { required: true, maxLength: 10 })}
          {...register("firstName")}
        /> */}
        {errors?.firstName && (
          <div className="text-red-500">{errors.firstName?.message}</div>
        )}
        {/* {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500">Max Length 10</div>
        )} */}
      </div>
      {/* Last-name */}
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your Email Address"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            name=""
            id=""
            placeholder="Please enter your age"
          />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          className="p-3 bg-green-400 text-white rounded-lg"
          onClick={handleDemoData}
        >
          Demo-Data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       // defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-100"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignUpHook;
