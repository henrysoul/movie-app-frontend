import React, { useEffect } from "react";
import { Website } from "../../layouts/Website";
import { MyMoviesList } from "../movie/MyMoviesList";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyMovies } from "../../../store/actions/movies";
import { Spin } from "antd";

export const MyMovies = () => {
  const { fetchingMovies, myMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyMovies);
  }, [dispatch]);

  return (
    <Website>
      {fetchingMovies ? <Spin /> : <MyMoviesList movies={myMovies} />}
    </Website>
  );
};
