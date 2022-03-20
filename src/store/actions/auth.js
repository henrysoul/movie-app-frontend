import { http } from "../../util/axios";
import * as actionTypes from "../constants/auth";
import * as error from "./error";
import * as notification from "../../components/partials/alerts/notification";

import { useNavigate } from "react-router-dom";

export const register = (formData) => async (dispatch) => {
  try {
    console.log(formData)
    dispatch({ type: actionTypes.AUTH_START });
    dispatch(error.hideError());
    const res = await http.post("register", formData);
    notification.success({ msg: res.data.message, title: "success" });
    dispatch({ type: actionTypes.TOGGLE_REGISTERED });
    dispatch({ type: actionTypes.AUTH_FINISH });
  } catch (err) {
    dispatch(error.setErrorMsg(err.response));
    dispatch({ type: actionTypes.AUTH_FINISH });
    dispatch(error.showError);
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.AUTH_START });
    dispatch(error.hideError());
    const res = await http.post("login", formData);
    notification.success({ msg: res.data.message, title: "success" });
    dispatch({ type: actionTypes.AUTH_FINISH });
    localStorage.clear();
    localStorage.setItem("token", res.data.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.data.user));
    dispatch({ type: actionTypes.TOGGLE_LOGGED_IN });
  } catch (err) {
    dispatch(error.setErrorMsg(err.response));
    dispatch({ type: actionTypes.AUTH_FINISH });
    dispatch(error.showError);
  }
};
