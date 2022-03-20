import { Wrapper, Card } from "./Style";
import { deleteMovie } from "../../../store/actions/movies";
import { useDispatch, useSelector } from "react-redux";

export const MyMoviesList = (props) => {
  const { submittingMovie, updatedMovies } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const deleteHandler = () => {};
  const editHandler = () => {};
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
            {movie.title + " " + parseInt(movie.year)} action movie
          </b>
        </div>
        <div className="fave">
          <button className="btn btn-danger" onClick={() => deleteHandler(movie.id)}>Delete</button>
          <button className="btn btn-info" onClick={() => editHandler(movie)}>Edit</button>
        </div>
      </Card>
    );
  });
  return <Wrapper>{movies}</Wrapper>;
};
