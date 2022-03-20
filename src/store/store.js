import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "./reducers/moviesReducer";
import errorReducer from "./reducers/errorReducer";
import authReducer from "./reducers/authReducer";

const reducer = combineReducers({
  movies: moviesReducer,
  error: errorReducer,
  auth: authReducer,
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
