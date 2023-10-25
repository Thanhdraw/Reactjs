import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  const divRef = useRef();
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border-gray-600 focus:border-blue-300"
      />
    </div>
  );
};

export default Input;
