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
    category(state, action) {
      const { category } = action.payload;
      state.category = category;
    },
  }
});

export const reducer = slice.reducer;

export const changeCategory = (category) => (dispatch) => {
  dispatch(slice.actions.category({ category }));
};