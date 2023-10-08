import React from "react";

const Cell = ({ value, onClick, className }) => {
  //   console.log(props);
  //   const { value, onClick } = props;
  //   console.log(value, onClick);
  return (
    <div className={`game-cells ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
