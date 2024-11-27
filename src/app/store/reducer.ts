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
  products: JSON.parse(localStorage.getItem('cart') || '[]'), // Загружаем из localStorage
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
        localStorage.setItem('cart', JSON.stringify(updatedProducts)); // Сохраняем в localStorage
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        // Если товар не существует, добавляем его в корзину
        const updatedProducts = [...state.products, action.payload];
        localStorage.setItem('cart', JSON.stringify(updatedProducts)); // Сохраняем в localStorage
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
