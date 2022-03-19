import * as actionType from "../constants/movies";
const initialState = {
  fetchingMovies: false,
  movies: [],
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
    default:
      return state;
  }
};
