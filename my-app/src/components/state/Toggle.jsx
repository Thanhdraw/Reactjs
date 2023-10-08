import React, { useState } from "react";
import "./ToggleStyle.css";
// // Stateless functional components: components ko sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }

// // stateful functional component: có sử dụng state
// function Toggle2() {
//   return <div className="toggle"></div>;
// }

// 1. enabling state: useState(initialize value)
// 2. initialize state:useState(false)
// 3. Reading state
// 4. update state
// 5. State-change=> Re-render
function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = () => {
    // setOn(callback) => setOn(prevState=>!prevState);
    // setOn((on) => {
    //   console.log(on);
    //   return !on;
    // });
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spiner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}
export default Toggle;

{
  /* <div className="toggle-control">
<div className="toggle-on" onClick={() => setOn(true)}>
  On
</div>
<div className="toggle-off" onClick={() => setOn(false)}>
  Off
</div>
</div> */
}
