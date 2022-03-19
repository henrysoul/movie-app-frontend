import { Wrapper, Card } from "./Style";

export const Movies = (props) => {
  const movies = props.movies.map((movie, i) => {
    return (
      <Card key={i}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt="movie"
          height="350px"
          width="100%"
        />
        <div className="container">
          <b className="bold">
            {movie.original_title + " " + parseInt(movie.release_date)} action movie
          </b>
        </div>
      </Card>
    );
  });
  return <Wrapper>{movies}</Wrapper>;
};
