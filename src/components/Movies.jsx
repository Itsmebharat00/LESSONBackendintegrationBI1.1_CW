import useFetch from "../useFetch";

const Movies = () => {
  const { data, loading, error } = useFetch(
    "https://lessonbe-4-4-cw-getdatafrommongo-db.vercel.app/movies"
  );

  console.log(data);

  return (
    <div>
      <ul>
        {data?.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
