"use client";

import Link from "next/link";
import React, { useState } from "react";
import Container from "../components/Container";
import VerticalSlider from "../components/Slider";

const Card: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSlideChange = (index: number) => {
    setSelectedIndex(index);
  };

  const isLampScrSelected = selectedIndex === 2; // Assuming 'lamp_scr.png' is at index 2

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
                  <span className={`border ${isLampScrSelected ? 'border-secondary' : 'border-[#EDEDED]'}  text ${isLampScrSelected ? 'text-darkgrey' : 'text-[var(--shortDesc)]'} px-[10px] py-[5px]`}>15</span>
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
                  <span className={`border ${isLampScrSelected ? 'border-secondary' : 'border-[#EDEDED]'} text ${isLampScrSelected ? 'text-darkgrey' : 'text-[var(--shortDesc)]'} px-[10px] py-[5px]`}>черный</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">серый</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">Угол рассеивания</span>
                <div className="w-[70%]">
                  <span className={`border ${isLampScrSelected ? 'border-secondary' : 'border-[#EDEDED]'} text ${isLampScrSelected ? 'text-darkgrey' : 'text-[var(--shortDesc)]'} px-[10px] py-[5px]`}>85</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">Цветовая температура</span>
                <div className="flex w-[70%] gap-[10px] items-center">
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">3000</span>
                  <span className={`border ${isLampScrSelected ? 'border-secondary' : 'border-[#EDEDED]'} text ${isLampScrSelected ? 'text-darkgrey' : 'text-[var(--shortDesc)]'} px-[10px] py-[5px]`}>4000</span>
                  <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">5000</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">CRI/Ra</span>
                <div className="w-[70%]">
                  <span className={`border ${isLampScrSelected ? 'border-secondary' : 'border-[#EDEDED]'} text ${isLampScrSelected ? 'text-darkgrey' : 'text-[var(--shortDesc)]'} px-[10px] py-[5px]`}>80+</span>
                </div>
              </div>
            </div>
            <div className="border-b border-[#EDEDED] my-[20px]" />
            <Link
              href="#"
              className="bg-secondary text-accent font-montserrat font-semibold text-[16px] leading-[40px] pl-[25px] pr-[30px] py-[10px] block text-center max-w-[394px]"
            >
              Посмотреть выбранные модификации
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
