import { combineReducers } from "redux";
import hotelsReducer from "./slices/hotelsSlice";
import chainsReducer from "./slices/chainsSlice";

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  chains: chainsReducer,
});

export default rootReducer;
