import { combineReducers } from "redux";
import activitiesReducer from "./activities/reducer";

const reducer = combineReducers({
  activities: activitiesReducer,
});

export default reducer;
