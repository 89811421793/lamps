// components/ProductCard.tsx
'use client'
import React from 'react';
import { Product } from '../store/actions';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, quantity, onQuantityChange }) => {
  return (
    <div className="flex mb-2 p-2">
      <img src={product.image} alt={product.name} className="w-16 h-16" />
      <span className="w-1/4">{product.name}</span>
      <span className="w-1/4 text-center">{quantity}</span>
      <span className="w-1/4 text-center">{product.price * quantity} ₽</span>
      <span className="w-1/4 text-right">{product.code}</span>
    </div>
  );
};

export default ProductCard;
