'use client'
import React, { useState } from "react";
import Image from "next/image";

type Product = {
  image: string;
  name: string;
  characteristics1?: string[];
  characteristics2?: string[];
  price: number;
  code: string;
  description?: string; 
  stockMessage?: string; 
  width: number; 
  height: number; 
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border border-[#E5E5E5] pt-[30px] pb-[50px] flex transition-all duration-300 ${
        isHovered ? "shadow-[0px_0px_30px_0px_#FFC94F4D]" : ""
      } mb-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={product.image} 
        alt={product.name} 
        width={product.width} 
        height={product.height} 
        className="mb-2 w-[15%]" 
      />
      <div className="p-2 flex flex-col items-center w-[25%]">
        {product.description ? (
          <span className="mt-2">{product.description}</span>
        ) : (
          <>
            <span className="mt-2">{product.name}</span>
            <div className="flex gap-[25px]">
              <div className="flex flex-col">
                {product.characteristics1?.map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </div>
              <div className="border-l border-[#E5E5E5] h-[54px] mt-[8px]"></div>
              <div className="flex flex-col">
                {product.characteristics2?.map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-2 flex flex-col items-center w-[35%]">
        <div className="flex items-center mt-2">
          <button className="border p-1">-</button>
          <span className="">1</span>
          <button className="border p-1">+</button>
        </div>
        <span className="mt-2">{product.stockMessage || "Осталось 2 шт"}</span>
      </div>
      <div className="p-2 flex flex-col items-center w-[22%]">
        <span>от {product.price}₽</span>
      </div>
      <div className="p-2 flex flex-col items-center w-[16%]">
        <button
          className={`flex items-center mt-2 justify-end ${
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