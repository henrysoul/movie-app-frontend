import * as actionType from "../constants/movies";
const initialState = {
  fetchingMovies: false,
  movies: [],
  myMovies: [],
  updatedMovies: false,
  submittingMovie: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TOGGLE_FETCHING_MOVIES:
      return { ...state, fetchingMovies: !state.fetchingMovies };
    case actionType.SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case actionType.SET_MY_MOVIES:
      return {
        ...state,
        myMovies: action.payload,
      };
    case actionType.TOGGLE_UPDATED_MOVIES:
      return {
        ...state,
        updatedMovies: !state.updatedMovies,
      };
    case actionType.TOGGLE_SUBMITTING_MOVIE:
      return {
        ...state,
        submittingMovie: !state.submittingMovie,
      };
    default:
      return state;
  }
};
