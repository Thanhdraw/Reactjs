import React, { useEffect, useState } from "react";

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
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className="p-5 flex gap-x-4 items-center ">
      <div className="text-2xl font-bold ">{count}</div>
      <button
        onClick={handleIncrease}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Increase(+)
      </button>
      <button
        onClick={handleReset}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Reset
      </button>
      <button
        onClick={handleDecrease}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Decrease (-)
      </button>
    </div>
  );
};

export default Counter;
