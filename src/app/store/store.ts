import { createStore } from 'redux';

// Определяем начальное состояние
const initialState = {
  // данные
};

// Определяем здесь редюсер
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Обрабатываю здесь мои действия
    default:
      return state;
  }
};

// Создаем хранилище
const store = createStore(rootReducer);

export default store;
