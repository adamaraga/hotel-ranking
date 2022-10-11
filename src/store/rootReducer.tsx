import { combineReducers } from "redux";
import hotelsReducer from "./slices/hotelsSlice";

const rootReducer = combineReducers({
  hotels: hotelsReducer,
});

export default rootReducer;
