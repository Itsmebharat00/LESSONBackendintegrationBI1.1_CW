import "./styles.css";
import Movies from "./components/Movies";
import MovieByTitle from "./components/MoviesByTitle";

export default function App() {
  return (
    <div className="">
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </div>
  );
}
