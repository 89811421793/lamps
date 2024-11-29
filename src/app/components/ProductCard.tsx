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

  const renderProductDescription = () => {
    if (product.name === "Трековый светильник EVO L") {
      return (
        <div>
          <h2 className="font-bold">{product.name.split(" ").slice(0, 4).join(" ")}</h2>
          <div className="flex mt-5 py-2">
            <div className="flex flex-col mr-[44px]">
              <span>50Вт</span>
              <span>Серый</span>
              <span>CRI/Ra 80+</span>
            </div>
            <div className="flex flex-col relative border-separator">
              <span>85</span>
              <span>3000</span>
              <span>1672 LED</span>
              <style jsx>{`
                .border-separator::after {
                  content: '';
                  position: absolute;
                  left: -40%;
                  top: 1%;
                  height: 100%;
                  width: 1px;
                  background-color: #E5E5E5;
                  margin-left: 10px;
                }
              `}
              </style>
            </div>
          </div>
        </div>
      );
    } else if (product.name.startsWith("Дизайнерский светильник изготавливаемый по проекту")) {
      const title = product.name.split(".")[0]; // Получаем заголовок до точки
      return (
        <div>
          <h2 className="font-bold">{title}.</h2> {/* Добавляем точку в конце заголовка */}
          <p className="mt-5">Длинна до 3 метров.</p>
          <p>Углы поворота между секторами по проекту.</p>
          <p>Мощность рассчитывается индивидуально.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`border border-[#E5E5E5] pt-[30px] pb-[50px] pl-[3px] flex items-center transition-all duration-300 ${
        isHovered ? "shadow-[0px_0px_30px_0px_#FFC94F4D]" : ""
      } mb-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.image} alt={product.name} className="mb-2 w-[20%] h-15 mr-[25px]" />
      <div className="w-[40%]">
        {renderProductDescription()}
      </div>

      <div className="w-[30%] text-center">
        <button className="border p-1" onClick={() => onQuantityChange(quantity - 1)}>-</button>
        <span className="">{quantity}</span> {/* Отображаем количество */}
        <button className="border p-1" onClick={() => onQuantityChange(quantity + 1)}>+</button>
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
