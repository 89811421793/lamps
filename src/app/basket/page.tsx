// components/Basket.tsx
'use client'
import React from "react";
import { useSelector } from "react-redux"; // Импортируем useSelector
import Link from "next/link";
import { RootState } from "../store/store"; // Импортируем RootState
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const Basket: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products); // Получаем товары из Redux Store
  const totalAmount = products.reduce((total: number, product) => {
    return total + product.price; // Считаем общую сумму
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
        <SectionTitle title="Подборка" showIndicator={false} className="mb-[40px]" />
        <div className="flex mb-2 p-2">
          <span className="p-1 w-[16%]">Товар</span>
          <span className="p-1 w-[25%]">Описание</span>
          <span className="p-1 w-[35%] text-center">Количество</span>
          <span className="p-1 w-[25%] text-center">Сумма</span>
          <span className="p-1 w-[15%] text-right">Код</span>
        </div>
        {products.map((product) => (
          <ProductCard key={product.code} product={product} quantity={1} onQuantityChange={() => {}} />
        ))}
        <div className="flex items-center mt-4 justify-between">
          <Link href="/catalog" className="flex items-center text-[#4A4A4A] font-montserrat text-[14px] font-bold leading-[40px]">
            <span className="ml-2">К покупкам</span>
          </Link>
          <span className="text-[#4A4A4A] font-montserrat text-[14px] font-bold leading-[40px]">
            Итого: от {totalAmount} ₽
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Basket;
