import * as actionType from "../constants/error";
const initState = {
  showError: false,
  msg: "",
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SHOW_ERROR:
      return {
        ...state,
        showError: true,
      };
    case actionType.SET_ERROR_MESSAGE:
      return {
        ...state,
        msg: action.payload,
      };
    case actionType.HIDE_ERROR:
      return {
        ...state,
        showError: false,
      };
    default:
      return state;
  }
};

export default errorReducer;
