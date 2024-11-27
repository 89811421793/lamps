// src/store/store.ts
import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer'; // Импортируем редюсер

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>; // Экспортируем RootState

const store = createStore(rootReducer);

export default store;
