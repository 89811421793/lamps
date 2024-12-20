"use client"; 

import React, { useState, createContext, useContext } from "react";
import SectionTitle from "../../SectionTitle";
import Image from "next/image";
import Link from 'next/link'; 

interface CatalogItem {
  title: string;
  description: string;
}

interface CatalogSectionProps {
  items: CatalogItem[];
}

// Создаем контекст
const CatalogContext = createContext<{
  visibleItems: Set<number>;
  toggleItem: (index: number) => void;
} | undefined>(undefined);

// Создаем провайдер
const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setVisibleItems((prev) => {
      const newVisibleItems = new Set(prev);
      if (newVisibleItems.has(index)) {
        newVisibleItems.delete(index);
      } else {
        newVisibleItems.add(index);
      }
      return newVisibleItems;
    });
  };

  return (
    <CatalogContext.Provider value={{ visibleItems, toggleItem }}>
      {children}
    </CatalogContext.Provider>
  );
};

const CatalogSection: React.FC<CatalogSectionProps> = ({ items }) => {
  const context = useContext(CatalogContext);
  
  if (!context) {
    throw new Error("CatalogSection must be used within a CatalogProvider");
  }

  const { visibleItems, toggleItem } = context;

  return (
    <section className="mb-[61px]">
      <SectionTitle title="Каталог"/>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-start items-start pr-4 w-full md:w-1/4 mt-6">
          <ul className="space-y-12">
            {items.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => toggleItem(index)}
                  className={`text-darkgrey font-montserrat text-14 font-bold leading-22 break-words cursor-pointer ${
                    visibleItems.has(index) ? "text-secondary font-bold text-18" : ""
                  }`}
                >
                  {item.title}
                </div>
                {visibleItems.has(index) && (
                  <div className="mt-2">
                    <p className="text-shortDesc font-montserrat text-14 font-normal leading-22 text-left">
                      {item.description}
                    </p>
                    <Link href="/catalog"> 
                      <button className="border-none bg-accent text-whiteFont font-montserrat text-14 font-bold leading-17.07 px-16 py-3 mt-4">
                        Перейти в каталог
                      </button>
                    </Link>
                  </div>
                )}
                <hr className="my-5 border-gray-300" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0 w-full md:w-3/4">
          <Image
            src="/catalog.png"
            alt="Hero Image"
            width={960}
            height={600}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

// Экспортируем провайдер для использования в других компонентах
export { CatalogProvider, CatalogSection };
