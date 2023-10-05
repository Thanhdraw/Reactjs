import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";

// parent Component
function App() {
  return (
    // children component
    <div>
      <YoutubeList>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          laboriosam officia quisquam debitis ipsa tempora quasi explicabo? Ab
          eius corporis error repudiandae, facere itaque iste, hic esse
          molestias distinctio vero.
        </h2>
      </YoutubeList>
    </div>
  );
}
export default App;
