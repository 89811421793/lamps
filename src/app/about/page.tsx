import React from "react";
import Link from "next/link";
import Container from "@/app/components/Container";
import SectionTitle from "../components/SectionTitle";
import TabMenu from "../components/TabMenu";
import Solutions from "../components/Solutions";

const fetchDescriptions = async () => {
  return [
    "Мы ценим Ваше время, поэтому, коротко о главном...",
    "Описание 2",
    "Описание 3",
    "Описание 4",
  ];
};

const fetchTabItems = async () => {
  return [
    "Кто мы",
    "В чем мы можем Вам помочь",
    "О продукции",
    "Реквизиты компании",
  ];
};

const fetchServiceTabs = async () => {
  return [
    "Для магазинов",
    "Для общественных мест",
    "Для фасадов и ландшафтов",
    "Для кафе и ресторанов",
    "Для офисов",
    "Для жилых интерьеров",
  ];
};

const fetchServiceImages = async () => {
  return [
    "/Services.png",
    "/Services1.png",
    "/Services2.png",
    "/Services3.png",
    "/Services4.png",
    "/Services5.png",
  ];
};

const About = async () => {
  const descriptions = await fetchDescriptions();
  const tabItems = await fetchTabItems();
  const serviceTabs = await fetchServiceTabs();
  const serviceImages = await fetchServiceImages();

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

        {/* Передаем данные в клиентский компонент */}
        <TabMenu tabItems={tabItems} descriptions={descriptions} />
        <Solutions serviceTabs={serviceTabs} serviceImages={serviceImages} />
      </Container>
    </div>
  );
};

export default About;
