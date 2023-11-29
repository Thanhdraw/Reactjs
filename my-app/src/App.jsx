import "./App.css";

import TooltipPortal from "./components/Portal/TooltipPortal";

function App() {
  return (
    <div className="flex items-center justify-center h-[500px] p-10 overflow-hidden cursor-pointer">
      <TooltipPortal text="Hover me">This is Tooltip content</TooltipPortal>
    </div>
  );
}
export default App;
