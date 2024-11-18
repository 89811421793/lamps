'use client'
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Link from "next/link";
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

type BasketProps = {
  totalPrice: number; 
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
              <div className="border-l border-[#E5E5E5] h-[54px]"></div>
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

const Basket: React.FC<BasketProps> = ({ totalPrice }) => {
  const products: Product[] = [
    {
      image: "/svetilnik.png",
      name: "Трековый светильник EVO L",
      characteristics1: ["50Вт", "Серый", "CRI/Ra 80+"],
      characteristics2: ["85", "3000", "1672 LED"],
      price: 3300,
      code: "54637654",
      width: 150, 
      height: 150, 
    },
    {
      image: "/f5bed36a6da638ce4acb04cf430b36cb 1.png",
      name: "Дизайнерский светильник изготавливаемый по проекту",
      description: "Длинна до 3 метров. Углы поворота между секторами по проекту. Мощность рассчитывается индивидуально.",
      price: 41500,
      code: "54637655",
      stockMessage: "В наличии",
      width: 150, 
      height: 150, 
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
        <div className="flex mb-2 p-2">
          <span className="p-1 w-[16%]">Товар</span>
          <span className="p-1 w-[25%]">Описание</span>
          <span className="p-1 w-[35%] text-center">Количество</span>
          <span className="p-1 w-[25%] text-center">Сумма</span>
          <span className="p-1 w-[15%] text-right">Код: 54637654</span>
        </div>
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
        <div className="flex items-center mt-4 justify-between">
          <Link href="#" className="flex items-center text-[#4A4A4A] font-montserrat text-[14px] font-bold leading-[40px]">
            <Image src="/arrow_pag.svg" alt="Previous" width={8} height={4} className="transform rotate-180" />
            <span className="ml-2">К покупкам</span>
          </Link>
          <span className="text-[#4A4A4A] font-montserrat text-[14px] font-bold leading-[40px]">
            Итого: от {44800} ₽
          </span>
        </div>

        {/* New Buttons Section */}
        <div className="mt-[19px] mb-[50px] text-right">
          <button className="inline-block text-[var(--accent)] font-montserrat text-[14px] font-[500] leading-[40px] border border-[var(--accent)] px-[50px] py-[5px] mb-4 mr-4">
            Отправить подборку на почту
          </button>
          <button className="inline-block text-[var(--accent)] font-montserrat text-[14px] font-[500] leading-[40px] bg-[var(--secondary)] px-[50px] py-[5px]">
            Отправить заявку на расчет
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Basket;
