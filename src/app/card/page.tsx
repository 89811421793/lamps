"use client";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import VerticalSlider from "../components/Slider";

const Card = () => {
  return (
    <div className="flex">
      <Container>
        <nav className="text-[#7C7C7C] mt-[17px] mb-[38px]">
          <Link href="/" className="hover:text-gray-800">
            Главная
          </Link>
          <span className="mx-2">-</span>
          <Link href="/catalog" className="hover:text-gray-800">
            Каталог
          </Link>
          <span className="mx-2">-</span>
          <Link href="#" className="hover:text-gray-800">
            Трековые светильники
          </Link>
          <span className="mx-2">-</span>
          <Link href="#" className="hover:text-gray-800">
            EVO L
          </Link>
        </nav>
        <div className="flex mb-[50px]">
          <VerticalSlider />
          <div className="ml-[42px]" style={{ border: "1px solid red" }}>
            <h2 className="text-xl font-bold">Трековый светильник EVO L</h2>
            <div className="border-b border-[#EDEDED] my-[28px]" />
            <div className="mb-[16px]">
              {/* Блок характеристик */}
              <div className="flex mb-2">
                <span className="w-[30%]">Мощность</span>
                <div className="flex gap-[10px] flex-wrap max-w-[45%]">
                  <span className="border border-[#EDEDED] px-2 mr-2">15</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">22</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">28</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">42</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">43</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">65</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">66</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">86</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">84</span>
                  <span className="border border-[#EDEDED] px-2">130</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">Цвет корпуса</span>
                <div className="flex w-[70%]">
                  <span className="border border-[#EDEDED] px-2 mr-2">белый</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">черный</span>
                  <span className="border border-[#EDEDED] px-2">серый</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">Угол рассеивания</span>
                <div className="w-[70%]">
                  <span className="border border-[#EDEDED] px-2">85</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">Цветовая температура</span>
                <div className="flex w-[70%]">
                  <span className="border border-[#EDEDED] px-2 mr-2">3000</span>
                  <span className="border border-[#EDEDED] px-2 mr-2">4000</span>
                  <span className="border border-[#EDEDED] px-2">5000</span>
                </div>
              </div>
              <div className="flex mb-2">
                <span className="w-[30%]">CRI/Ra</span>
                <div className="w-[70%]">
                  <span className="border border-[#EDEDED] px-2">80+</span>
                </div>
              </div>
            </div>
            <div className="border-b border-[#EDEDED] my-[16px]" />
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
