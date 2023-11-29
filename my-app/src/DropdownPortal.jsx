import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"; // Import biểu tượng caret-down
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import useClickOutSide from "./hooks/useClickOutSide";
import ReactDOM from "react-dom";
const DropdownPortal = () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  // const dropdownRef = useRef(null);
  const [isUp, setIsUp] = useState(false);
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    console.log(nodeRef.current.getBoundingClientRect());
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
    ToggleUp();
  };
  const ToggleUp = () => {
    setIsUp(!isUp);
  };

  return (
    <div className="relative w-full max-w-[400px] " ref={nodeRef}>
      <div
        className="flex justify-between w-full p-5 transition-all border border-gray-400 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
        <div className="">
          <FontAwesomeIcon icon={isUp ? faCaretUp : faCaretDown} />
        </div>
      </div>

      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};
function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute left-0 w-full p-5 bg-white border-gray-200 rounded-lg top-full"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-5 border border-gray-200 cursor-pointer">HTML&CSS</div>
      <div className="p-5 border border-gray-200 cursor-pointer">
        Javascript
      </div>
      <div className="p-5 border border-gray-200 cursor-pointer">ReactJS</div>
    </div>,
    document.querySelector("body")
  );
}
export default DropdownPortal;
