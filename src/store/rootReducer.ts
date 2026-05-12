/**
 * rootReducer.ts
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import { combineReducers } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./productSlice";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
