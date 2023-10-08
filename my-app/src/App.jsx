import "./App.css";
import Game from "./components/CaroGame/Game";
import Counter from "./components/Counter/Counter";
import Toggle from "./components/state/Toggle";
import YoutubeList from "./components/youtube/YoutubeList";
// parent Component
function App() {
  return (
    // children component
    <div>
      <Game></Game>
    </div>
  );
}
export default App;
