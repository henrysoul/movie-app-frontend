import React, { useEffect } from "react";
import { Website } from "../../layouts/Website";
import { Movies } from "../movie/Movies";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../store/actions/movies";

export const Home = () => {
  const { fetchingMovies, movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies);
  }, [dispatch]);

  return (
    <Website>
      <Movies movies={movies} />
    </Website>
  );
};
