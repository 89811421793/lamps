"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Filter from "../components/Filter";
import Card from "../components/Card";

const tabs = [
  "Трековые светильники",
  "Встраиваемые светильники",
  "Профильные светильники",
  "Фигурные светильники",
  "Светильники Армстронг",
  "Светильники Армстронг с равномерной засветкой",
];

// Данные для новинок и каталога
const newProducts = [
  { url: "/prod1.png", title: "Новинка 1", price: 1000, id: "1" },
  { url: "/prod1.png", title: "Новинка 2", price: 2000, id: "2" },
  { url: "/prod1.png", title: "Новинка 3", price: 3000, id: "3" },
];

const allProducts = [
  { url: "/prod1.png", title: "Товар 1", price: 1500, id: "4" },
  { url: "/prod1.png", title: "Товар 2", price: 2500, id: "5" },
  { url: "/prod1.png", title: "Товар 3", price: 3500, id: "6" },
  { url: "/prod1.png", title: "Товар 4", price: 4500, id: "7" },
  { url: "/prod1.png", title: "Товар 5", price: 5500, id: "8" },
  { url: "/prod1.png", title: "Товар 6", price: 6500, id: "9" },
];

const Catalog = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]); // Изначально выбран первый таб

  const handleTabClick = (tab: string) => {
    if (selectedTab !== tab) {
      setSelectedTab(tab);
    }
  };

  return (
    <div>
      <Container>
        <nav className="text-[#7C7C7C] mt-[17px] mb-[38px]">
          <Link href="/" className="hover:text-gray-800">
            Главная
          </Link>
          <span className="mx-2">-</span>
          <Link href="/catalog" className="hover:text-gray-800">
            Каталог
          </Link>
        </nav>
        <SectionTitle
          title="Каталог"
          showIndicator={false}
          className="mb-[40px]"
        />

        {/* Контейнер для табов */}
        <ul className="mb-4 mt-6 list-none p-0">
          {tabs.map((tab, index) => (
            <li
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`border border-[#E5E5E5] cursor-pointer py-2 px-4 rounded-[3px] inline-block leading-[18px] ${
                selectedTab === tab
                  ? "text-[var(--whiteFont)] bg-[var(--accent)] font-semibold"
                  : "text-[var(--darkgrey)] font-medium"
              }`}
              style={{
                fontSize: "14px",
                marginRight: index < 5 ? "10px" : "0",
                marginBottom: "10px",
                fontWeight: selectedTab === tab ? 600 : 500,
              }}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Левый блок с фильтром и правый блок с новинками и каталогом */}
        <div className="flex mb-8">
          {/* Левый блок с фильтром */}
          <div className="flex-1 mr-[35px]">
            <Filter />
          </div>

          {/* Правый блок с новинками и каталогом */}
          <div className="flex-2 ml-auto"> {/* Добавлен класс ml-auto */}
            {/* Новинки */}
            <div className="mb-4">
              <SectionTitle
                subtitle="Новинки"
                showIndicator={false}
                className="font-montserrat text-[18px] font-bold leading-[40px]"
              />
              <div className="flex space-x-4">
                {newProducts.map((product) => (
                  <Card
                    key={product.id}
                    url={product.url}
                    title={product.title}
                    price={product.price}
                    id={product.id}
                  />
                ))}
              </div>
            </div>

            {/* Весь каталог */}
            <div className="mt-8">
              <SectionTitle
                subtitle="Весь каталог"
                showIndicator={false}
                className="font-montserrat text-[18px] font-bold leading-[40px]"
              />
              <div className="flex flex-wrap gap-4">
                {allProducts.map((product) => (
                  <Card
                    key={product.id}
                    url={product.url}
                    title={product.title}
                    price={product.price}
                    id={product.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Пагинация */}
        <div className="flex justify-center mt-8">
          <nav>
            <ul className="flex space-x-2">
              {[...Array(8)].map((_, index) => (
                <li key={index}>
                  <button className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-200">
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
