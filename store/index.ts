import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
  
  const store = configureStore({
    reducer: rootReducer,
    devTools: true
  });

  // The `IRootState` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
  
  export default store;