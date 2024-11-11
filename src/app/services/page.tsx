import React from "react";
import Link from "next/link";
import Container from "@/app/components/Container";
import SectionTitle from "../components/SectionTitle";
import TabMenu from "../components/TabMenu";
import Solutions from "../components/Solutions";

const fetchDescriptions = async () => {
  return [
    "Мы предоставляем широкий спектр услуг, чтобы удовлетворить ваши потребности...",
    "Описание услуги 2",
    "Описание услуги 3",
    "Описание услуги 4",
    "Описание услуги 5",
  ];
};

const fetchTabItems = async () => {
  return [
    "Изготовление светильников для торгового и общественного освещения",
  "Поставки дизайнерского света от ведущих европейских производителей",
  "Проектирование, светотехнические расчеты и разработка концепции освещения",
  "Модернизация светильников",
  "Ремонт светодиодных светильников",
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

const Services = async () => {
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
          <Link href="/services" className="hover:text-gray-800">
            Услуги
          </Link>
        </nav>
        <SectionTitle
          title="Услуги"
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

export default Services;

