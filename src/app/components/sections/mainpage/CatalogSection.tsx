"use client"; 

import React, { useState } from "react";
import SectionTitle from "../../SectionTitle";
import Image from "next/image";

interface CatalogItem {
  title: string;
  description: string;
}

interface CatalogSectionProps {
  items: CatalogItem[]; // Принимаем items как пропс
}

const CatalogSection: React.FC<CatalogSectionProps> = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const handleItemClick = (index: number) => {
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
    <section>
      <SectionTitle title="Каталог" />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-start items-start pr-4 w-full md:w-1/4 mt-6">
          <ul className="space-y-9">
            {items.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handleItemClick(index)}
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
                    <button className="border-none bg-accent text-whiteFont font-montserrat text-14 font-bold leading-17.07 px-16 py-3 mt-4">
                      Перейти в каталог
                    </button>
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

export default CatalogSection;
