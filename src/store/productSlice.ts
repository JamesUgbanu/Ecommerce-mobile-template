/**
 * productSlice.ts
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import { createSlice } from '@reduxjs/toolkit';


type IProductProps = {
    category: string;
};

const initialState: IProductProps = {
    category: '',
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: () => initialState,
    category(state, action) {
      const category = action.payload.category;
      state.category = category;
    },
  }
});

export const reducer = slice.reducer;

export const changeCategory = (category: any) => (dispatch) => {
  dispatch(slice.actions.category({ category }));
};

export const { reset } = slice.actions;