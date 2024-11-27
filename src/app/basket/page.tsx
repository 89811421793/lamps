
'use client'
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../components/ProductCard";

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

type BasketProps = {
  totalPrice: number; 
};

const Basket: React.FC<BasketProps> = ({ totalPrice }) => {
  const [products, setProducts] = useState<Product[]>([
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
  ]);

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    "54637654": 1,
    "54637655": 1,
  });

  const handleQuantityChange = (code: string, newQuantity: number) => {
    setQuantities((prev) => ({ ...prev, [code]: newQuantity }));
  };

  const totalAmount = products.reduce((total, product) => {
    return total + product.price * (quantities[product.code] || 1);
  }, 0);

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
          <span className="p-1 w-[15%] text-right">Код</span>
        </div>
        {products.map((product) => (
          <ProductCard 
            key={product.code} 
            product={product} 
            quantity={quantities[product.code]} 
            onQuantityChange={(newQuantity) => handleQuantityChange(product.code, newQuantity)} 
          />
        ))}
        <div className="flex items-center mt-4 justify-between">
          <Link href="/catalog" className="flex items-center text-[#4A4A4A] font-montserrat text-[14px] font-bold leading-[40px]">
            <Image src="/arrow_pag.svg" alt="Previous" width={8} height={4} className="transform rotate-180" />
            <span className="ml-2">К покупкам</span>
          </Link>
          <span className="text-[#4A4A4A] font-montserrat text-[14px] font-bold leading-[40px]">
            Итого: от {totalAmount} ₽
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