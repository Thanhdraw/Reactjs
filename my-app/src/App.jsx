import { Fragment } from "react";
import "./App.css";
import Portal from "./components/Portal";
import HeaderMain from "./HeaderMain";
import TooltipPortal from "./components/Portal/TooltipPortal";
import { AuthProvider } from "./context/AuthContext";

function App() {
  // return <Portal></Portal>;
  return (
    <Fragment>
      <AuthProvider>
        <HeaderMain></HeaderMain>
      </AuthProvider>
    </Fragment>
  );
}
export default App;
{
  /* <div className="flex items-center justify-center h-[500px] p-10 overflow-hidden cursor-pointer">
      <TooltipPortal text="Hover me">This is Tooltip content</TooltipPortal>
    </div> */
}
