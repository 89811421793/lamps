"use client";
import React, { useState } from "react";
import Link from "next/link";
import Container from "@/app/components/Container";
import SectionTitle from "../components/SectionTitle";
import TabMenu from "../components/TabMenu";
import Solutions from "../components/Solutions";

const descriptions = [
  "Мы ценим Ваше время, поэтому, коротко о главном.\n\nНаша компания была образована с целью предложить Российскому рынку профессиональные светотехнические решения для освещения магазинов, офисов и объектов общественно-развлекательного назначения. Сегодня мы поставляем осветительное оборудование различных ценовых категорий из стран Юго-Восточной Азии и Европы, а так же являемся дистрибьюторами лучших Российских производителей. А среди наших клиентов, сетевые и частные магазины одежды и обуви, продуктовые магазины, торговые и офисные центры, представители индустрии красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и частные заказчики.\n\nМы предоставляем полный комплекс услуг в освещении от идеи до поставки: проектируем, подбираем оборудование, разрабатываем концепцию освещения и осуществляем поставку.\n\nОсновная наша специализация - это коммерческое освещение, т.е. поставки освещения для тех мест, где люди работают, занимаются спортом, совершают покупки, проводят досуг и отдыхают. А стилистические направления, которые мы охватываем начинаются со специальных светильников для функционального использования и доходят до дизайнерских светильников от всемирно известных производителей.",
  "Описание 2",
  "Описание 3",
  "Описание 4",
];

const tabItems = [
  "Кто мы",
  "В чем мы можем Вам помочь",
  "О продукции",
  "Реквизиты компании",
];

const serviceTabs = [
  "Для магазинов",
  "Для общественных мест",
  "Для фасадов и ландшафтов",
  "Для кафе и ресторанов",
  "Для офисов",
  "Для жилых интерьеров",
];

const serviceImages = [
  "/Services.png",
  "/Services1.png",
  "/Services2.png",
  "/Services3.png",
  "/Services4.png",
  "/Services5.png",
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Устанавливаем 0 по умолчанию
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0); // По умолчанию выбран таб "Для магазинов"

  const handleTabClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleServiceClick = (index: number) => {
    if (activeServiceIndex === index) {
      setActiveServiceIndex(-1); // Убираем выделение
    } else {
      setActiveServiceIndex(index);
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
          <Link href="/about" className="hover:text-gray-800">
            О компании
          </Link>
        </nav>
        <SectionTitle
          title="О компании"
          showIndicator={false}
          className="mb-[40px]"
        />

        <TabMenu
          tabItems={tabItems}
          activeIndex={activeIndex}
          onTabClick={handleTabClick}
        />

        {activeIndex !== null && (
          <p
            className={`mt-[1px] mb-[60px] border-t border-[#EDEDED] pt-4 text-darkgrey font-montserrat transition-opacity duration-700 ease-in-out ${
              activeIndex !== null ? "opacity-100" : "opacity-0"
            }`}
          >
            {descriptions[activeIndex]}
          </p>
        )}
        <Solutions serviceTabs={serviceTabs} serviceImages={serviceImages} />
      </Container>
    </div>
  );
};

export default About;