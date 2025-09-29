import useFetch from "../useFetch";

const MoviesByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://lessonbe-4-4-cw-getdatafrommongo-db.vercel.app/movies/${title}`
  );

  console.log(data);

  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>Director: {data.director}</p>
      <p>Country: {data.country}</p>
      <p>Release Year: {data.releaseYear}</p>
      <p>Rating: {data.rating}</p>
      <p>Actors: {data.actors.join(", ")}</p>
      <p>Awards: {data.awards}</p>
      <p>Plot: {data.plot}</p>
      <img src={data.posterUrl} alt="Poster Image" />
    </div>
  ) : (
    <p>{loading && <>Loading...</>}</p>
  );
};

export default MoviesByTitle;
