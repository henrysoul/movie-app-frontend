import React, { useEffect } from "react";
import { Website } from "../../layouts/Website";
import { Movies } from "../movie/Movies";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../store/actions/movies";
import { Spin } from "antd";

export const Home = () => {
  const { fetchingMovies, movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies);
  }, [dispatch]);

  return (
    <Website>{fetchingMovies ? <Spin /> : <Movies movies={movies} />}</Website>
  );
};
