import * as actionType from "../constants/error";
export const setErrorMsg = (errResponse) => (dispatch) => {
  let msg = null;
  if (errResponse.status === 422) {
    msg = errResponse.data.data
      ? errResponse.data.data
      : errResponse.data.message;
  } else if (errResponse.status === 500) {
    msg = "Server error";
  }

  dispatch({ type: actionType.SET_ERROR_MESSAGE, payload: msg });
};

export const showError = (dispatch) => {
  dispatch({ type: actionType.SHOW_ERROR });
};

export const hideError = () => {
  return { type: actionType.HIDE_ERROR };
};
