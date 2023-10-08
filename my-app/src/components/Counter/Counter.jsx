import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="main">
      <div className="count">{count}</div>
      <div className="card">
        <button onClick={handleIncrease}>Increase(+)</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>Decrease (-)</button>
      </div>
    </div>
  );
};

export default Counter;
