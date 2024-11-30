// src/store/store.ts
import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer'; 

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>; 

const store = createStore(rootReducer);

export default store;
