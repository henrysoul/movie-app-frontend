import { useEffect, useState } from "react";
import { Wrapper, Card } from "./Style";
import { Modal, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../../store/actions/movies";

export const Movies = (props) => {
  const { submittingMovie, updatedMovies } = useSelector(
    (state) => state.movies
  );

  const [state, setState] = useState({
    showModal: false,
    movieTitle: "",
    form: {
      title: "",
      year: "",
      backdrop_path: "",
      comment: "",
      genre: "action",
    },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (updatedMovies === true) setState({ ...state, showModal: false });
  }, [state, updatedMovies]);

  const addToMovies = (movie) => {
    setState({
      ...state,
      movieTitle: movie.original_title,
      showModal: true,
      form: {
        ...state.form,
        title: movie.original_title,
        backdrop_path: movie.backdrop_path,
        year: movie.release_date,
      },
    });
  };

  const inputChangeHandler = (e) => {
    setState({ ...state, form: { ...state.form, comment: e.target.value } });
  };

  const setVisible = () => {
    setState({ ...state, showModal: false });
  };

  const submitHandler = () => {
    dispatch(addMovie(state.form));
  };

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
            {movie.original_title + " " + parseInt(movie.release_date)} action
            movie
          </b>
        </div>
        <div className="fave" onClick={() => addToMovies(movie)}>
          Watch later
        </div>
      </Card>
    );
  });
  return (
    <Wrapper>
      {movies}{" "}
      <Modal
        title="Add to movie list"
        centered
        visible={state.showModal}
        onCancel={setVisible}
        width={1000}
        footer={[
          <button className="btn btn-default" onClick={setVisible}>
            No
          </button>,
          <button
            className="btn btn-primary"
            onClick={submitHandler}
            disabled={submittingMovie}
          >
            Yes {submittingMovie ? <Spin /> : ""}
          </button>,
        ]}
      >
        <h4>Add {state.movieTitle} to my movies ?</h4>
        <input
          className="form-control"
          onChange={inputChangeHandler}
          placeholder="Type comment"
        />
      </Modal>
      ;
    </Wrapper>
  );
};
