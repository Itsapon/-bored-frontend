import { combineReducers, createStore } from "redux";
import activitiesReducer from "./activities/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    activities: activitiesReducer,
  }),
  enhancer
);

export default store;
