import { Fragment, useRef } from "react";
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
import RegisterHook from "./components/Form/RHF/RegisterHook";
import RegisterFormik from "./components/Form/Formik/RegisterFormik";
import Modal from "./components/modal/Modal";
import { faL } from "@fortawesome/free-solid-svg-icons";
import DropdownPortal from "./DropdownPortal";
import TooltipPortal from "./components/Portal/TooltipPortal";
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
// children componentl
// <ThemeProvider theme={theme}>
// </ThemeProvider>
function App() {
  const [show, setShow] = useState(false);
  useClickOutSide("button");
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="relative z-0">
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 text-white bg-blue-500 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque autem
        sint quia ea corrupti perspiciatis odit quasi! Aspernatur consequuntur
        culpa suscipit, quisquam dignissimos, eveniet nisi, id eum aperiam
        nesciunt iste?
      </div>
      <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div>
      <div className="p-10 overflow-hidden cursor-pointer">
        <TooltipPortal text="Hover me">This is Tooltip content</TooltipPortal>
      </div>
    </Fragment>
  );
}
export default App;
// {
//   /* <button
//         onClick={() => {
//           setShow(true);
//         }}
//         className="inline-block p-3 m-3 text-white bg-green-400 rounded-lg"
//       >
//         Show-Menu
//       </button>

//       <div className="p-5">
//         <Dropdown></Dropdown>
//       </div>
//       <SideBarMenu show={show} ref={nodeRef}></SideBarMenu> */
// }
// {
//   /* <Input></Input> */
// }
// {
//   /* <Movies></Movies> */
// }
// {
//   /* <SignUp></SignUp> */
// }
// {
//   /* <SignUpHook></SignUpHook> */
// }
// {
//   /* <RegisterHook></RegisterHook> */
// }
// {
//   /* <RegisterFormik></RegisterFormik> */
// }
// {
//   /* <SignUpV2></SignUpV2> */
// }
