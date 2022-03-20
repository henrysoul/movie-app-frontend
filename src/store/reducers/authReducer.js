import * as actionTypes from "../constants/auth";
const initState = {
  loading: false,
  registered: false,
  loggedIn: localStorage.getItem("token") ? true : false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_FINISH:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.TOGGLE_REGISTERED:
      return {
        ...state,
        registered: !state.registered,
      };
    case actionTypes.TOGGLE_LOGGED_IN:
      return {
        ...state,
        loggedIn: localStorage.getItem("token") ? true : false,
      };
    default:
      return state;
  }
};
export default authReducer;
