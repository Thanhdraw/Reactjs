import React, { useState } from "react";

export default function useHandleChange(initialValues) {
  const [values, setValue] = useState({ initialValues });
  const handleChange = (e) => {
    const type = e.target.type;
    if (type === "checkbox") {
      setValue({
        ...values,
        [e.target.name]: e.target.checked,
      });
    } else {
      setValue({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };
  //   Fomik
  // Reactjs-HookForm
  return {
    values,
    handleChange,
  };
}
