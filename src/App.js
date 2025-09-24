import "./styles.css";
import Movies from "./components/Movies.jsx";
import MovieByTitle from "./components/MoviesByTitle.jsx";

export default function App() {
  return (
    <div className="App">
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </div>
  );
}
