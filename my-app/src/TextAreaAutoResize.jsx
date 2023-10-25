import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState("auto");
  const [textWrapperHeight, setTextWrapperHeight] = useState("auto");
  const handleChange = (event) => {
    setTextHeight("auto");
    setTextWrapperHeight(`${textRef?.current?.scrollHeight}px`);

    setText(event.target.value);
  };
  useEffect(() => {
    setTextHeight(`${textRef?.current?.scrollHeight}px`);
    setTextWrapperHeight(`${textRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5" style={{ minHeight: textWrapperHeight }}>
      <textarea
        className="w-full max-w-[400px] transition-all overflow-hidden 
        p-5 rounded-lg border border-gray-400 resize-none focus:border-blue-400"
        placeholder="text"
        value={text}
        ref={textRef}
        style={{ height: textHeight }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
