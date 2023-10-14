import "./App.css";
import Game from "./components/CaroGame/Game";
import Counter from "./components/Counter/Counter";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import Toggle from "./components/state/Toggle";
import YoutubeList from "./components/youtube/YoutubeList";
// parent Component
function App() {
  return (
    // children component
    <div>
      <CardList>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
}
export default App;
