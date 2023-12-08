import { combineReducers } from "@reduxjs/toolkit";
import yourSliceReducer from "./yourSlice";
import connectionReducer from "./connectionReducer";

const rootReducer = combineReducers({
  yourSlice: yourSliceReducer,
  connection: connectionReducer,
});

export default rootReducer;
