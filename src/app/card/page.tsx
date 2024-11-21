"use client";

import Link from "next/link";
import React, { useState } from "react";
import Container from "../components/Container";
import VerticalSlider from "../components/Slider";

const tabs = [
  { id: 1, label: "Описание" },
  { id: 2, label: "Технические характеристики" },
  { id: 3, label: "Конструктивные характеристики" },
  { id: 4, label: "Материалы для скачивания" },
];

const Card: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(2); // Set default to 'lamp_scr.png'
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleSlideChange = (index: number) => {
    setSelectedIndex(index);
  };

  const handleTabChange = (tabId: number) => {
    setSelectedTab(tabId);
  };

  const isLampScrSelected = selectedIndex === 2; // 'lamp_scr.png' is at index 2

  return (
    <div className="flex">
      <Container>
        <nav className="text-[#7C7C7C] mt-[17px] mb-[38px]">
          <Link href="/" className="hover:text-gray-800">Главная</Link>
          <span className="mx-2">-</span>
          <Link href="/catalog" className="hover:text-gray-800">Каталог</Link>
          <span className="mx-2">-</span>
          <Link href="#" className="hover:text-gray-800">Трековые светильники</Link>
          <span className="mx-2">-</span>
          <Link href="#" className="hover:text-gray-800">EVO L</Link>
        </nav>
        <div className="flex mb-[50px]">
          <VerticalSlider onSlideChange={handleSlideChange} />
          <div className="ml-[42px]">
            <h2 className="text-xl font-bold">Трековый светильник EVO L</h2>
            <div className="border-b border-[#EDEDED] my-[28px]" />
            <div className="mb-[16px]">
              
              {/* Блок характеристик */}
              <div className="flex mb-2">
                <span className="w-[30%]">Мощность</span>
                <div className="flex gap-[10px] flex-wrap max-w-[45%]">
                  <span className={`border ${isLampScrSelected ? "border-secondary" : "border-[#EDEDED]"} text ${isLampScrSelected ? "text-darkgrey" : "text-[var(--shortDesc)]"} px-[10px] py-[5px]`}>15</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">22</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">28</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">42</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">43</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">65</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">66</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">86</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">84</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">130</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">Цвет корпуса</span>
                <div className="flex w-[70%] gap-[10px]">
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">белый</span>
                  <span className={`border ${isLampScrSelected ? "border-secondary" : "border-[#EDEDED]"} text ${isLampScrSelected ? "text-darkgrey" : "text-[var(--shortDesc)]"} px-[10px] py-[5px]`}>черный</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">серый</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">Угол рассеивания</span>
                <div className="w-[70%]">
                  <span className={`border ${isLampScrSelected ? "border-secondary" : "border-[#EDEDED]"} text ${isLampScrSelected ? "text-darkgrey" : "text-[var(--shortDesc)]"} px-[10px] py-[5px]`}>85</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">Цветовая температура</span>
                <div className="flex w-[70%] gap-[10px] items-center">
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">3000</span>
                  <span className={`border ${isLampScrSelected ? "border-secondary" : "border-[#EDEDED]"} text ${isLampScrSelected ? "text-darkgrey" : "text-[var(--shortDesc)]"} px-[10px] py-[5px]`}>4000</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">5000</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">CRI/Ra</span>
                <div className="w-[70%]">
                  <span className={`border ${isLampScrSelected ? "border-secondary" : "border-[#EDEDED]"} text ${isLampScrSelected ? "text-darkgrey" : "text-[var(--shortDesc)]"} px-[10px] py-[5px]`}>80+</span>
                </div>
              </div>
            </div>
            <div className="border-b border-[#EDEDED] my-[20px]" />
            <Link href="#" className="bg-secondary text-accent font-montserrat font-semibold text-[16px] leading-[40px] pl-[25px] pr-[30px] py-[10px] block text-center max-w-[394px]">Посмотреть выбранные модификации</Link>
          </div>
        </div>

        {/* Tabs Section */}
        <ul className="flex mb-[1px] list-none p-0">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`mr-[60px] py-2 cursor-pointer text-[var(--darkgrey)] font-medium ${selectedTab === tab.id ? "bg-[var(--accent)] text-[var(--whiteFont)] py-2 px-4" : ""}`}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        <hr className="border-t border-[#EDEDED] mb-[20px]" />

        {/* Additional Content Area */}
        <div className="flex flex-col mb-[50px]">
          {isLampScrSelected ? (
            selectedTab === 1 ? (
              <>
                <p className="text-[var(--shortDesc)] mb-[50px]">
                  Потолочный светильник LINE A подвесного или накладного монтажа
                  предназначен для организации основного освещения помещений.
                  Различные длины, мощности, варианты рассеивателей и возможности
                  подключения к различным системам управления освещением делают
                  светильники серии LINE A всесторонне продуманным решением для
                  помещений любой конфигурации и функциональных назначений.
                  Алюминиевый корпус окрашивается высококачественным матовым или
                  глянцевым порошковым покрытием черного, белого, либо любого цвета по
                  шкале RAL.
                </p>

                {/* Списки "Особенности" и "Области применения" */}
                <h3 className="font-bold mb-2">Особенности</h3>
                <ul className="list-none ml-5 mb-[50px]">
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">Различные варианты рассеивателей: матовый / микропризматический / прозрачный.</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">Источники питания с гальваниеской развязкой установлены внутри корпуса светильника;</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">Возможность соединения последовательно для получения сплошных линий засветки длиной до 30м.</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">Возможность декорирования под дерево и другие материалы, либо отделка деревом благородных пород.</span>
                  </li>
                </ul>

                <h3 className="font-bold mb-2">Области применения:</h3>
                <ul className="list-none ml-5">
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">Торговое освещение</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">Офисное освещение</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">Объекты бьюти индустрии</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">HoReCa - отели, рестораны, кафе</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="custom-marker"></span>
                    <span className="text-[var(--shortDesc)]">Проходные зоны любых общественных пространств</span>
                  </li>
                </ul>
              </>
            ) : (
              <p className="text-[var(--shortDesc)] mb-[50px]">No details yet.</p>
            )
          ) : (
            <p className="text-[var(--shortDesc)] mb-[50px]">No information. Check later.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Card;
