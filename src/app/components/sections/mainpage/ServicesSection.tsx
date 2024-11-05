"use client"; 

import React, { useState } from "react";
import SectionTitle from "../../SectionTitle";
import Image from "next/image"; 

interface ServiceItem {
  title: string;
  description: string;
  icon: string; 
}

const ServicesSection = ({ items }: { items: ServiceItem[] }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]); // Используем массив для хранения индексов видимых элементов

  const handleItemClick = (index: number) => {
    setVisibleItems((prev) => {
      // Проверяем, есть ли индекс в массиве видимых элементов
      if (prev.includes(index)) {
        // Если есть, удаляем его
        return prev.filter((itemIndex) => itemIndex !== index);
      } else {
        // Если нет, добавляем его
        return [...prev, index];
      }
    });
  };

  return (
    <section className="mb-[85px]">
      <SectionTitle title="Услуги" />
      <ul className="space-y-4">
        {items.map((service, index) => (
          <li key={index} onClick={() => handleItemClick(index)} className="cursor-pointer">
            <div className="flex items-center">
              <Image
                src={service.icon}
                alt={service.title}
                className="mr-12 h-10 w-10"
                width={40}
                height={40}
              />
              <h2 className="text-darkgrey font-montserrat text-lg font-bold leading-10 text-left">
                {service.title}
              </h2>
              <img
                src="/add_yellow.svg"
                alt=""
                className={`ml-auto transform transition-transform duration-300 ${
                  visibleItems.includes(index) ? "rotate-45" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleItemClick(index);
                }}
              />
            </div>
            {visibleItems.includes(index) && (
              <p className="mt-2 [color:#A6A6A6] [font-family:Montserrat] [font-size:14px] [font-weight:400] [line-height:24px] pl-[88px] [max-width:1014px]">{service.description}</p>
            )}
            <hr className="my-5 border-gray-300" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
