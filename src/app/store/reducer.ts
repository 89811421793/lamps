import { ADD_TO_CART, REMOVE_FROM_CART, AddToCartAction, RemoveFromCartAction } from "./actions";

type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
  code: string;
  quantity: number;
};

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: JSON.parse(sessionStorage.getItem('cart') || '[]'),
};

type CartActions = AddToCartAction | RemoveFromCartAction;

const cartReducer = (state = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.products.findIndex(product => product.code === action.payload.code);
      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].quantity += 1;
        sessionStorage.setItem('cart', JSON.stringify(updatedProducts));
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        const updatedProducts = [...state.products, action.payload];
        sessionStorage.setItem('cart', JSON.stringify(updatedProducts));
        return {
          ...state,
          products: updatedProducts,
        };
      }
    case REMOVE_FROM_CART:
      const productIndex = state.products.findIndex((product) => product.code === action.payload.code);
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        if (product.quantity > 1) {
          const updatedProducts = [...state.products];
          updatedProducts[productIndex].quantity -= 1;
          sessionStorage.setItem('cart', JSON.stringify(updatedProducts));
          return { ...state, products: updatedProducts };
        } else {
          const filteredProducts = state.products.filter((product) => product.code !== action.payload.code);
          sessionStorage.setItem('cart', JSON.stringify(filteredProducts));
          return { ...state, products: filteredProducts };
        }
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
