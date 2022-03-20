import { Wrapper, Card } from "./Style";
import { deleteMovie } from "../../../store/actions/movies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Modal, Spin } from "antd";

export const MyMoviesList = (props) => {
  const { submittingMovie, updatedMovies } = useSelector(
    (state) => state.movies
  );

  const [state, setState] = useState({
    showDeleteModal: false,
    showEditModal: false,
    id: "",
    title: "",
  });

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteMovie(state.id));
  };

  const toggleDeleteModal = (movie = "") => {
    setState({
      ...state,
      id: movie.id,
      showDeleteModal: !state.showDeleteModal,
      title: movie.title,
    });
  };

  useEffect(() => {
    if (updatedMovies) window.location.reload();
  }, [updatedMovies]);

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
          <p>My comment: {movie.comment}</p>
          <button
            className="btn btn-danger"
            onClick={() => toggleDeleteModal(movie)}
          >
            Delete
          </button>
          <button className="btn btn-info" onClick={() => editHandler(movie)}>
            Edit
          </button>
        </div>
      </Card>
    );
  });
  return (
    <Wrapper>
      <h4>My movies</h4>
      {movies}
      <Modal
        title="Confrim delete"
        centered
        visible={state.showDeleteModal}
        onCancel={toggleDeleteModal}
        width={1000}
        footer={[
          <button className="btn btn-default" onClick={toggleDeleteModal}>
            No
          </button>,
          <button
            className="btn btn-primary"
            onClick={deleteHandler}
            disabled={submittingMovie}
          >
            Yes {submittingMovie ? <Spin /> : ""}
          </button>,
        ]}
      >
        Are you sure you want to delete {state.title} from your list ?
      </Modal>
    </Wrapper>
  );
};
