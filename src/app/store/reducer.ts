// src/store/reducer.ts
import { ADD_TO_CART, AddToCartAction } from "./actions";

type Product = {
  id: string; // Добавляем id для уникальности
  image: string;
  name: string;
  price: number;
  code: string;
  quantity: number; // Добавляем поле для количества
};

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: JSON.parse(sessionStorage.getItem('cart') || '[]'), // Загружаем из sessionStorage
};

type CartActions = AddToCartAction; // Определим типы действий для редюсера

const cartReducer = (state = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.products.findIndex(product => product.code === action.payload.code);
      if (existingProductIndex !== -1) {
        // Если товар уже существует, увеличиваем его количество
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].quantity += 1;
        sessionStorage.setItem('cart', JSON.stringify(updatedProducts)); // Сохраняем в sessionStorage
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        // Если товар не существует, добавляем его в корзину
        const updatedProducts = [...state.products, action.payload];
        sessionStorage.setItem('cart', JSON.stringify(updatedProducts)); // Сохраняем в sessionStorage
        return {
          ...state,
          products: updatedProducts,
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
