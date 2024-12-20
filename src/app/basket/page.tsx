'use client'
import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import Link from "next/link";
import { RootState } from "../store/store"; 
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";
import { removeFromCart } from "../store/actions";

const Basket: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  const totalAmount = products.reduce((total: number, product) => {
    if (product.price && product.quantity) {
      return total + product.price * product.quantity;
    }
    return total;
  }, 0);

  const handleRemove = (productCode: string) => {
    dispatch(removeFromCart(productCode));
  };

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
          <span className="p-1 w-[21%]">Товар</span>
          <span className="p-1 w-[40%]">Описание</span>
          <span className="p-1 w-[24%] text-center">Количество</span>
          <span className="p-1 w-[23%] text-center">Сумма</span>
          <span className="p-1 w-[15%] text-right">Код: 54637654</span>
        </div>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard 
              key={product.code} 
              product={product} 
              quantity={product.quantity} 
              onQuantityChange={(newQuantity) => {
                if (newQuantity <= 0) {
                  handleRemove(product.code);
                }
              }} 
              onRemove={() => handleRemove(product.code)} 
            />
          ))
        ) : (
          <div>Корзина пуста</div>
        )}
        <div className="flex items-center mt-4 justify-between">
          <Link href="/catalog" className="flex items-center text-[#4A4A4A] font-montserrat text-[14px] font-bold leading-[40px]">
            <Image src='/arrow_pag.svg' width={8} height={4} className="transform rotate-180" alt=''/>
            <span className="ml-2">К покупкам</span>
          </Link>
          <span className="text-[#4A4A4A] font-montserrat text-[14px] font-bold leading-[40px]">
            Итого: {totalAmount.toFixed(2)} ₽
          </span>
        </div>
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
