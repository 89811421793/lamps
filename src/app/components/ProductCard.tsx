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

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
    className={`border border-[#E5E5E5] pt-[30px] pb-[50px] pl-[3px] flex items-center transition-all duration-300 ${
      isHovered ? "shadow-[0px_0px_30px_0px_#FFC94F4D]" : ""
    } mb-4`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
      <img src={product.image} alt={product.name} className="mb-2 w-[14%] h-15 mr-[25px]" />
      <span className="w-[25%]">{product.name}</span>

      <div className="w-[35%] text-center">
      <button className="border p-1">-</button>
      <span className="">{quantity}</span> {/* Отображаем количество */}
      <button className="border p-1">+</button>
      </div>
      <span className="w-[23%] text-center">{(product.price * quantity).toFixed(2)} ₽</span> {/* Сумма */}
      <div className="p-2 flex flex-col items-center w-[16%]">
        <button
          className={`flex items-center justify-end ${
            isHovered ? "text-[#F3A800]" : ""
          }`}
        >
          <img
            src={isHovered ? "/add_yellow.svg" : "/add_grey.svg"}
            alt="Удалить"
            className="rotate-45"
          />
          <span className="ml-1">Удалить</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
