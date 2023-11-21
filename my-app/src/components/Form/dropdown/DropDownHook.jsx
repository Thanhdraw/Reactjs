import React, { useEffect, useState } from "react";
import useClickOutSide from "./useClickOutSide";
import { set, useForm, useWatch } from "react-hook-form";

const DropDownHook = ({
  control,
  setValue,
  name,
  data,
  dropDownLabel = "Select your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropownValue = useWatch({
    control,
    name: "job", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: "", // default value before the render
  });
  //   console.log(jobValue);
  const handleClickDropdown = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropDownLabel);
  useEffect(() => {
    if (dropownValue === "") setLabel(dropDownLabel);
  }, [dropownValue]);
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white 
        flex items-center justify-between cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className="text-[#c3c3c3]">{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item) => (
          <div
            className="cursor-pointer hover:bg-gray-100 p-5 "
            onClick={handleClickDropdown}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
        {/* <div
          className="cursor-pointer hover:bg-gray-100 p-5 "
          onClick={handleClickDropdown}
          data-value="Front-end"
        >
          Front-end
        </div>
        <div
          className="cursor-pointer hover:bg-gray-100 p-5 "
          onClick={handleClickDropdown}
          data-value="Back-end"
        >
          Back-end
        </div>
        <div
          className="cursor-pointer hover:bg-gray-100 p-5 "
          onClick={handleClickDropdown}
          data-value="Full-stack"
        >
          Full-stack
        </div> */}
      </div>
    </div>
  );
};

export default DropDownHook;
