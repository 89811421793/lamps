import { Action } from 'redux';

// Константа действия
export const ADD_TO_CART = "ADD_TO_CART";

// Интерфейс продукта
export interface Product {
  image: string;
  name: string;
  price: number;
  code: string;
}

// Интерфейс действия добавления в корзину
export interface AddToCartAction extends Action {
  type: typeof ADD_TO_CART; // Использование типа действия
  payload: Product; // Payload содержит продукт
}

// Функция создания действия добавления в корзину
export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Автоматическое извлечение типа действия
export type AddToCartActionType = ReturnType<typeof addToCart>;
