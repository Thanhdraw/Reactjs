import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import Game from "./components/CaroGame/Game";
import Counter from "./components/Counter/Counter";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import CardTaiwind from "./components/card/CardTaiwind";
import Toggle from "./components/state/Toggle";
import YoutubeList from "./components/youtube/YoutubeList";
import { ThemeProvider } from "styled-components";
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
      <CardList>
        <CardTaiwind primary fontSize="text-2xl"></CardTaiwind>
      </CardList>
    </div>
  );
}
export default App;
