import { http, httpDmdb } from "../../util/axios";
import { error } from "../../components/partials/alerts/notification";
import * as actionTypes from "../constants/movies";
export const fetchMovies = async (dispatch) => {
  try {
    console.log(process.env.REACT_APP_DMDB_BASE_URL);
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
