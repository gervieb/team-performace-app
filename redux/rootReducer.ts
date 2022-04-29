import { combineReducers } from "redux";
import surveyReducer from "./reducers/surveyReducer";

const rootReducer = combineReducers({
  surveyData: surveyReducer,
});

export default rootReducer;
