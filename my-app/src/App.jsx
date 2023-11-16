import { useRef } from "react";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
// import Game from "./components/CaroGame/Game";
// import Counter from "./components/Counter/Counter";
// import Header from "./components/Header";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import CardTaiwind from "./components/card/CardTaiwind";
import HackerNew from "./components/news/HackerNew";
import { useState } from "react";
import { useEffect } from "react";
import StopWatch from "./components/stopWatch/StopWatch";
import Input from "./components/Form/Input";
import TextAreaAutoResize from "./TextAreaAutoResize";
import Dropdown from "./Dropdown";
import Blog from "./components/Blogs/Blog";
import SideBarMenu from "./SideBarMenu";
import useClickOutSide from "./hooks/useClickOutSide";
import Movies from "./components/Movies";
import SignUp from "./components/Form/SignUp";
import SignUpV2 from "./components/Form/SignUpV2";
import SignUpFormFinal from "./components/Form/SignUpFormFinal";
import SignUpHook from "./components/Form/SignUpHook";
// import Photos from "./components/photo/Photos";
// import Toggle from "./components/state/Toggle";
// import YoutubeList from "./components/youtube/YoutubeList";
// import { ThemeProvider } from "styled-components";
// parent Component

// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
//   orange: "#ffa400",
// };
function App() {
  // const [show, setShow] = useState(false);
  useClickOutSide("button");
  return (
    // children componentl
    // <ThemeProvider theme={theme}>
    // </ThemeProvider>

    <div>
      {/* <button
        onClick={() => {
          setShow(true);
        }}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show-Menu
      </button>

      <div className="p-5">
        <Dropdown></Dropdown>
      </div>
      <SideBarMenu show={show} ref={nodeRef}></SideBarMenu> */}
      {/* <Input></Input> */}
      {/* <Movies></Movies> */}
      {/* <SignUp></SignUp> */}
      <SignUpHook></SignUpHook>
      {/* <SignUpV2></SignUpV2> */}
    </div>
  );
}
export default App;
