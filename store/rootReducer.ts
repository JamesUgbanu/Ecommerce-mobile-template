import { combineReducers } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./productSlice";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
