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
import Input from "./Input";
import TextAreaAutoResize from "./TextAreaAutoResize";
import Dropdown from "./Dropdown";
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
  return (
    // children component
    // <ThemeProvider theme={theme}>
    // </ThemeProvider>

    <div>
      {/* <GlobalStyle></GlobalStyle> */}
      {/* <CardList>
        <CardTaiwind primary fontSize="text-2xl"></CardTaiwind>
      </CardList> */}
      {/* <Photos></Photos> */}
      {/* <HackerNew></HackerNew> */}
      {/* <StopWatch></StopWatch> */}
      <div className="p-5">
        <Dropdown></Dropdown>
      </div>
    </div>
  );
}
export default App;
