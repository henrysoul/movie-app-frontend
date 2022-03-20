import { http, httpDmdb } from "../../util/axios";
import { error, success } from "../../components/partials/alerts/notification";
import * as actionTypes from "../constants/movies";

export const fetchMovies = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.TOGGLE_FETCHING_MOVIES });
    const res = await httpDmdb.get(
      "movie/popular?api_key=d00ba401ef301e6f129179aff1882888&language=en-US&page=1"
    );
    dispatch({ type: actionTypes.TOGGLE_FETCHING_MOVIES });
    dispatch({ type: actionTypes.SET_MOVIES, payload: res.data.results });
  } catch (err) {
    error({ msg: "An error occured", title: "Error" });
  }
};

export const fetchMyMovies = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.TOGGLE_FETCHING_MOVIES });
    const res = await http.get("movie/list");
    dispatch({ type: actionTypes.TOGGLE_FETCHING_MOVIES });
    dispatch({
      type: actionTypes.SET_MY_MOVIES,
      payload: res.data.data.movies,
    });
  } catch (err) {
    error({ msg: "An error occured", title: "Error" });
  }
};

export const addMovie = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    await http.post("movie/create", formData);
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    dispatch({ type: actionTypes.TOGGLE_UPDATED_MOVIES });
    success({ msg: "Movie added successfully", title: "Success" });
  } catch (err) {
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    error({ msg: "Movie already in list", title: "Error" });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    await http.get(`movie/delete/${id}`);
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    dispatch({ type: actionTypes.TOGGLE_UPDATED_MOVIES });
    success({ msg: "Movie added successfully", title: "Success" });
    dispatch({
      type: actionTypes.SET_MY_MOVIES,
      payload: [],
    });
  } catch (err) {
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    error({ msg: "An error occured", title: "Error" });
  }
};

export const updateMovie = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    await http.post(`movie/update`, formData);
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    dispatch({ type: actionTypes.TOGGLE_UPDATED_MOVIES });
    success({ msg: "Movie updated successfully", title: "Success" });
  } catch (err) {
    dispatch({ type: actionTypes.TOGGLE_SUBMITTING_MOVIE });
    error({ msg: "An error occured", title: "Error" });
  }
};
