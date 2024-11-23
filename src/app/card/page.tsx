"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../components/Container";
import VerticalSlider from "../components/Slider";
import ProdinfoTabs from "../components/ProdinfoTabs";

const tabs = [
  { id: 1, label: "Описание" },
  { id: 2, label: "Технические характеристики" },
  { id: 3, label: "Конструктивные характеристики" },
  { id: 4, label: "Материалы для скачивания" },
];

const Card: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  const handleSlideChange = (index: number) => {
    setSelectedIndex(index);
  };

  const content = [
    <div key="description">
      <p className="text-[var(--shortDesc)] mb-[50px]">
        Потолочный светильник LINE A подвесного или накладного монтажа
        предназначен для организации основного освещения помещений. Различные
        длины, мощности, варианты рассеивателей и возможности подключения к
        различным системам управления освещением делают светильники серии LINE A
        всесторонне продуманным решением для помещений любой конфигурации и
        функциональных назначений. Алюминиевый корпус окрашивается
        высококачественным матовым или глянцевым порошковым покрытием черного,
        белого, либо любого цвета по шкале RAL.
      </p>
      <h3 className="font-bold mb-2">Особенности</h3>
      <ul className="list-none mb-[50px] p-0">
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">
            Различные варианты рассеивателей: матовый / микропризматический /
            прозрачный.
          </span>
        </li>
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">
            Источники питания с гальваниеской развязкой установлены внутри
            корпуса светильника;
          </span>
        </li>
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">
            Возможность соединения последовательно для получения сплошных линий
            засветки длиной до 30м.
          </span>
        </li>
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">
            Возможность декорирования под дерево и другие материалы, либо
            отделка деревом благородных пород.
          </span>
        </li>
      </ul>
      <h3 className="font-bold mb-2">Области применения:</h3>
      <ul className="list-none p-0">
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">Торговое освещение</span>
        </li>
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">Офисное освещение</span>
        </li>
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">
            Объекты бьюти индустрии
          </span>
        </li>
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">
            HoReCa - отели, рестораны, кафе
          </span>
        </li>
        <li className="flex items-start mb-2" style={{ marginLeft: 0 }}>
          <span className="custom-marker"></span>
          <span className="text-[var(--shortDesc)]">
            Проходные зоны любых общественных пространств
          </span>
        </li>
      </ul>
    </div>,
    <p key="technical" className="text-[var(--shortDesc)] mb-[50px]">
      Технические характеристики: No details yet. Check Later.
    </p>,
    <p key="constructive" className="text-[var(--shortDesc)] mb-[50px]">
      Конструктивные характеристики: No details yet. Check Later.
    </p>,
    <p key="materials" className="text-[var(--shortDesc)] mb-[50px]">
      Материалы для скачивания: No details yet. Check Later.
    </p>,
  ];

  return (
    <>
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
            <VerticalSlider onSlideChange={handleSlideChange} />
            <div className="ml-[42px]">
              <h2 className="text-xl font-bold">Трековый светильник EVO L</h2>
              <div className="border-b border-[#EDEDED] my-[28px]" />
              <div className="mb-[16px]">
                <div className="flex mb-2">
                  <span className="w-[20%]">Мощность</span>
                  <div className="flex gap-[10px] flex-wrap max-w-[80%]">
                    <span className="border border-[var(--secondary)] text-[var(--darkgrey)] px-[10px] py-[5px]">
                      15
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      22
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      28
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      42
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      43
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      65
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      66
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      86
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      84
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      130
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <span className="w-[20%]">Цвет корпуса</span>
                  <div className="flex w-[80%] gap-[10px]">
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      белый
                    </span>
                    <span className="border border-[var(--secondary)] text-[var(--darkgrey)] px-[10px] py-[5px]">
                      черный
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      серый
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <span className="w-[20%]">Угол рассеивания</span>
                  <div className="w-[80%]">
                    <span className="border border-[var(--secondary)] text-[var(--darkgrey)] px-[10px] py-[5px]">
                      85
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <span className="w-[20%]">Цветовая температура</span>
                  <div className="flex w-[80%] gap-[10px] items-center">
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      3000
                    </span>
                    <span className="border border-[var(--secondary)] text-[var(--darkgrey)] px-[10px] py-[5px]">
                      4000
                    </span>
                    <span className="border border-[#EDEDED] text-[var(--shortDesc)] px-[10px] py-[5px]">
                      5000
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <span className="w-[20%]">CRI/Ra</span>
                  <div className="w-[80%]">
                    <span className="border border-[var(--secondary)] text-[var(--darkgrey)] px-[10px] py-[5px]">
                      80+
                    </span>
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

          <ProdinfoTabs tabs={tabs} content={content} />
          <span className="inline-block mt-2 font-bold text-darkgrey leading-10 text-base font-montserrat">
            Выбранные модификации
          </span>
          <span className="inline-block mt-2 ml-5 font-normal text-darkgrey leading-4 text-sm font-montserrat">
            Показано 4 из 15
          </span>
        </Container>
      </div>

      <div className='flex flex-col ml-[6%] max-w-[1285px] w-full'>
    <div className='flex w-full mb-2 items-center pb-2 header-container relative'>
        <div className='flex flex-col w-[12%] min-w-[80px]'>
            <span className='font-bold text-left'>Наименование</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[80px]'>
            <span className='font-bold text-left'>Мощность</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px]'>
            <span className='font-bold text-left'>Цвет корпуса</span>
        </div>
        <div className='flex flex-col w-[6%] min-w-[100px]'>
            <span className='font-bold text-left'>Габариты [ВxДxШ]</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[100px]'>
            <span className='font-bold text-left'>Световой поток LED [лкм]</span>
        </div>
        <div className='flex flex-col w-[10%] min-w-[100px]'>
            <span className='font-bold text-left'>Угол рассеивания</span>
        </div>
        <div className='flex flex-col w-[11%] min-w-[100px]'>
            <span className='font-bold text-left'>Эффективность LW/W</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[100px]'>
            <span className='font-bold text-left'>Цветовая температура</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='font-bold text-left'>CRI/Ra</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[80px]'>
            <span className='font-bold text-left'>Управление светом</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='font-bold text-left'>Цена</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px]'>
            <span className='font-bold text-left'>Добавить в подборку</span>
        </div>
    </div>

    <div className='flex w-full pb-2 mb-2 data-row relative'>
        <div className='flex flex-col w-[12%] min-w-[80px]'>
            <span className='text-left'>LINE A 50-14W -830-WH</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[80px]'>
            <span className='text-left'>14</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px]'>
            <span className='text-left'>Белый</span>
        </div>
        <div className='flex flex-col w-[6%] min-w-[100px]'>
            <span className='text-left'>20х15х10</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[100px]'>
            <span className='text-left'>1672</span>
        </div>
        <div className='flex flex-col w-[10%] min-w-[100px]'>
            <span className='text-left'>119.43</span>
        </div>
        <div className='flex flex-col w-[11%] min-w-[100px]'>
            <span className='text-left'>119.43</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[100px]'>
            <span className='text-left'>3000</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='text-left'>80+</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[80px]'>
            <span className='text-left'>no</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='text-left'>2700</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px] items-center'>
            <button className="w-[22px] h-[22px] bg-[var(--darkgrey)] rounded-full relative btn"></button>
        </div>
    </div>

    <div className='flex w-full pb-2 mb-2 data-row relative'>
        <div className='flex flex-col w-[12%] min-w-[80px]'>
            <span className='text-left'>LINE A 50-14W -830-WH</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[80px]'>
            <span className='text-left'>14</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px]'>
            <span className='text-left'>Черный</span>
        </div>
        <div className='flex flex-col w-[6%] min-w-[100px]'>
            <span className='text-left'>20х15х10</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[100px]'>
            <span className='text-left'>1760</span>
        </div>
        <div className='flex flex-col w-[10%] min-w-[100px]'>
            <span className='text-left'>125.71</span>
        </div>
        <div className='flex flex-col w-[11%] min-w-[100px]'>
            <span className='text-left'>125.71</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[100px]'>
            <span className='text-left'>3000</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='text-left'>80+</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[80px]'>
            <span className='text-left'>no</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='text-left'>2700</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px] items-center'>
            <button className="w-[22px] h-[22px] bg-[var(--darkgrey)] rounded-full relative btn"></button>
        </div>
    </div>

    <div className='flex w-full pb-2 mb-2 data-row relative'>
        <div className='flex flex-col w-[12%] min-w-[80px]'>
            <span className='text-left'>LINE A 50-14W -830-WH</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[80px]'>
            <span className='text-left'>22</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px]'>
            <span className='text-left'>Белый</span>
        </div>
        <div className='flex flex-col w-[6%] min-w-[100px]'>
            <span className='text-left'>20х15х10</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[100px]'>
            <span className='text-left'>1672</span>
        </div>
        <div className='flex flex-col w-[10%] min-w-[100px]'>
            <span className='text-left'>119.43</span>
        </div>
        <div className='flex flex-col w-[11%] min-w-[100px]'>
            <span className='text-left'>119.43</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[100px]'>
            <span className='text-left'>4000</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='text-left'>80+</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[80px]'>
            <span className='text-left'>no</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='text-left'>2700</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px] items-center'>
            <button className="w-[22px] h-[22px] bg-[var(--darkgrey)] rounded-full relative btn"></button>
        </div>
    </div>

    <div className='flex w-full pb-2 mb-2 data-row relative'>
        <div className='flex flex-col w-[12%] min-w-[80px]'>
            <span className='text-left'>LINE A 50-14W -830-WH</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[80px]'>
            <span className='text-left'>22</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px]'>
            <span className='text-left'>Серый</span>
        </div>
        <div className='flex flex-col w-[6%] min-w-[100px]'>
            <span className='text-left'>20х15х10</span>
        </div>
        <div className='flex flex-col w-[8%] min-w-[100px]'>
            <span className='text-left'>1672</span>
        </div>
        <div className='flex flex-col w-[10%] min-w-[100px]'>
            <span className='text-left'>119.43</span>
        </div>
        <div className='flex flex-col w-[11%] min-w-[100px]'>
            <span className='text-left'>119.43</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[100px]'>
            <span className='text-left'>3000</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='text-left'>80+</span>
        </div>
        <div className='flex flex-col w-[9%] min-w-[80px]'>
            <span className='text-left'>no</span>
        </div>
        <div className='flex flex-col w-[3%] min-w-[80px]'>
            <span className='text-left'>3500</span>
        </div>
        <div className='flex flex-col w-[7%] min-w-[80px] items-center'>
            <button className="w-[22px] h-[22px] bg-[var(--darkgrey)] rounded-full relative btn"></button>
        </div>
    </div>
</div>

      <a
        href="#"
        className="ml-[6%] text-[var(--secondary)] underline mb-[20px] block mod"
      >
        Все модификации
      </a>
    </>
  );
};

export default Card;
