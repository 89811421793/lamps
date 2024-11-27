// src/store/actions.ts
import { Action } from 'redux';
import { v4 as uuidv4 } from 'uuid'; // Импортируем uuid

// Константа действия
export const ADD_TO_CART = "ADD_TO_CART";

// Интерфейс продукта
export interface Product {
  id: string; // Добавляем id для уникальности
  image: string;
  name: string;
  price: number;
  code: string;
  quantity: number; // Добавляем поле для количества
}

// Интерфейс действия добавления в корзину
export interface AddToCartAction extends Action {
  type: typeof ADD_TO_CART; // Использование типа действия
  payload: Product; // Payload содержит продукт
}

// Функция создания действия добавления в корзину
export const addToCart = (product: Omit<Product, 'id' | 'quantity'>) => ({
  type: ADD_TO_CART,
  payload: { ...product, id: uuidv4(), quantity: 1 }, // Генерируем уникальный id и устанавливаем количество 1
});

// Автоматическое извлечение типа действия
export type AddToCartActionType = ReturnType<typeof addToCart>;
