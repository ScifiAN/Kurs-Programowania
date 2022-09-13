import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  // reducer: { counter: counterSlice.reducer }, if multiple reducers
  reducer: { 
    counter: counterReducer, 
    auth: authReducer,
  }
});

export default store;