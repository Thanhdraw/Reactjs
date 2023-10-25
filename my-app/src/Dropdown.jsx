import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"; // Import biểu tượng caret-down
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [isUp, setIsUp] = useState(false);

  const ToggleUp = () => {
    setIsUp(!isUp);
  };
  useEffect(() => {
    function handleClickOut(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div className="relative w-full max-w-[400px] " ref={dropdownRef}>
      <div
        className="p-5 border border-gray-400 rounded-lg w-full cursor-pointer 
        flex justify-between transition-all"
        onClick={() => {
          setShowDropdown(!showDropdown);
          ToggleUp();
        }}
      >
        Selected
        <div className="">
          <FontAwesomeIcon icon={isUp ? faCaretUp : faCaretDown} />
        </div>
      </div>

      {showDropdown && (
        <div className="p-5 border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white ">
          <div className="p-5 cursor-pointer border border-gray-200">
            HTML&CSS
          </div>
          <div className="p-5 cursor-pointer border border-gray-200">
            Javascript
          </div>
          <div className="p-5 cursor-pointer border border-gray-200">
            ReactJS
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
