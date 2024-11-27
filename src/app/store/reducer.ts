// src/store/reducer.ts
import { ADD_TO_CART, AddToCartAction } from "./actions";

type Product = {
  id: string; // Добавляем id для уникальности
  image: string;
  name: string;
  price: number;
  code: string;
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
      const updatedProducts = [...state.products, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedProducts)); // Сохраняем в localStorage
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default cartReducer;
