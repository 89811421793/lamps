import { Action } from 'redux';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  code: string;
  quantity: number;
}

export interface AddToCartAction extends Action {
  type: typeof ADD_TO_CART;
  payload: Product;
}

export interface RemoveFromCartAction extends Action {
  type: typeof REMOVE_FROM_CART;
  payload: { code: string };
}

export const addToCart = (product: Omit<Product, 'id' | 'quantity'>) => ({
  type: ADD_TO_CART,
  payload: { ...product, id: uuidv4(), quantity: 1 },
});

export const removeFromCart = (code: string) => ({
  type: REMOVE_FROM_CART,
  payload: { code },
});

export type AddToCartActionType = ReturnType<typeof addToCart>;
export type RemoveFromCartActionType = ReturnType<typeof removeFromCart>;
