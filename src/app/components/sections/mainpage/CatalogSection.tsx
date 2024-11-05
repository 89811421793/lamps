"use client"; // Убедитесь, что этот импорт присутствует

import React, { useState } from "react";
import SectionTitle from "../../SectionTitle";
import Image from "next/image";

const CatalogSection = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleItemClick = () => {
    setIsInfoVisible((prev) => !prev); // Переключаем видимость блока
  };

  return (
    <section>
      <SectionTitle title="Каталог" />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-start items-start pr-4 w-full md:w-1/4 mt-6">
          <ul className="space-y-9">
            <li
              onClick={handleItemClick}
              className={`text-darkgrey font-montserrat text-14 font-bold leading-22 break-words cursor-pointer ${
                isInfoVisible ? "text-secondary font-bold text-18" : ""
              }`}
            >
              Трековые светильники
            </li>
            {isInfoVisible && (
              <div className="mt-2">
                <p className="text-shortDesc font-montserrat text-14 font-normal leading-22 text-left">
                  Органично вписываются в интерьеры в стиле хай-тек, лофт
                </p>
                <button className="border-none bg-accent text-whiteFont font-montserrat text-14 font-bold leading-17.07 px-16 py-3 mt-4">
                  Перейти в каталог
                </button>
              </div>
            )}
            <hr className="my-5 border-gray-300" />
            <li className="text-darkgrey font-montserrat text-14 font-bold leading-22 break-words">
              Встраиваемые светильники
            </li>
            <hr className="my-5 border-gray-300" />
            <li className="text-darkgrey font-montserrat text-14 font-bold leading-22 break-words">
              Фигурные светильники
            </li>
            <hr className="my-5 border-gray-300" />
            <li className="text-darkgrey font-montserrat text-14 font-bold leading-22 break-words">
              Светильники Армстронг
            </li>
            <hr className="my-5 border-gray-300" />
            <li className="text-darkgrey font-montserrat text-14 font-bold leading-22 break-words">
              Светильники Армстронг с равномерной засветкой
            </li>
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
