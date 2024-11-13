"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const tabs = [
  "Трековые светильники",
  "Встраиваемые светильники",
  "Профильные светильники",
  "Фигурные светильники",
  "Светильники Армстронг",
  "Светильники Армстронг с равномерной засветкой",
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
                fontFamily: 'Montserrat',
                fontSize: '14px',
                marginRight: index < 5 ? '10px' : '0', 
                marginBottom: '10px', 
                fontWeight: selectedTab === tab ? 600 : 500, 
              }}
            >
              {tab}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Catalog;
