// src/store/reducer.ts
import { ADD_TO_CART, AddToCartAction } from "./actions";

type Product = {
  image: string;
  name: string;
  price: number;
  code: string;
};

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

type CartActions = AddToCartAction; // Определим типы действий для редюсера

const cartReducer = (state = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
