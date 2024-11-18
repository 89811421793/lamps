"use client";
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Link from "next/link";

type Product = {
  image: string;
  name: string;
  characteristics1: string[];
  characteristics2: string[];
  price: number;
  code: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border border-[#E5E5E5] w-full pt-[30px] pr-[19px] pb-[50px] flex justify-between transition-all duration-300 ${
        isHovered ? "shadow-[0px_0px_30px_0px_#FFC94F4D]" : ""
      } mb-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <img src={product.image} alt={product.name} className="mb-2" />
        <span className="mt-2">{product.name}</span>
        <div className="flex mt-2">
          <div className="flex flex-col">
            {product.characteristics1.map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>
          <div className="border-l border-[#E5E5E5] h-[54px] mx-2"></div>
          <div className="flex flex-col">
            {product.characteristics2.map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center mt-2">
          <button className="border p-1">-</button>
          <span className="mx-2">1</span>
          <button className="border p-1">+</button>
        </div>
        <span className="mt-2">Осталось 2 шт</span>
      </div>
      <div className="flex flex-col items-center">
        <span>от {product.price}₽</span>
      </div>
      <div className="flex flex-col items-center">
        <button
          className={`flex items-center mt-2 ${
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

const Basket: React.FC = () => {
  const products: Product[] = [
    {
      image: "/svetilnik.png",
      name: "Трековый светильник EVO L",
      characteristics1: ["50Вт", "Серый", "CRI/Ra 80+"],
      characteristics2: ["85", "3000", "1672 LED"],
      price: 3300,
      code: "54637654",
    },
  ];

  return (
    <div>
      <Container>
        <nav className="text-[#7C7C7C] mt-[17px] mb-[38px]">
          <Link href="/" className="hover:text-gray-800">
            Главная
          </Link>
          <span className="mx-2">-</span>
          <Link href="/basket" className="hover:text-gray-800">
            Подборка
          </Link>
        </nav>
        <SectionTitle
          title="Подборка"
          showIndicator={false}
          className="mb-[40px]"
        />
        <div className="flex justify-between mb-2">
          <span>Товар</span>
          <span>Описание</span>
          <span>Количество</span>
          <span>Сумма</span>
          <span>Код: 54637654</span>
        </div>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Container>
    </div>
  );
};

export default Basket;
