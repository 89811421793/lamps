'use client'
import React, { useState } from 'react';
import Container from '../components/Container';
import Link from 'next/link';
import SectionTitle from '../components/SectionTitle';

const tabs = [
  "Физическим лицам",
  "Юридическим лицам",
  "Бюджетным организациям",
];

const Delivery = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]); // Изначально выбран первый таб

  const handleTabClick = (tab: string) => {
    if (selectedTab !== tab) {
      setSelectedTab(tab);
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
          <Link href="/delivery" className="hover:text-gray-800">
            Доставка и оплата
          </Link>
        </nav>
        <SectionTitle
          title="Доставка и оплата"
          showIndicator={false}
          className="mb-[40px]"
        />

        {/* Контейнер для табов */}
        <ul className="mb-4 mt-6 list-none p-0 flex">
          {tabs.map((tab, index) => (
            <li
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer py-2 px-4 rounded-[3px] inline-block leading-[18px] ${
                selectedTab === tab
                  ? "text-[var(--whiteFont)] bg-[var(--accent)] font-semibold"
                  : "text-[var(--darkgrey)] font-medium"
              }`}
              style={{
                fontSize: "14px",
                marginRight: index < tabs.length - 1 ? "10px" : "0",
                marginBottom: "10px",
                fontWeight: selectedTab === tab ? 600 : 500,
              }}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Контент для выбранного таба */}
        <div className="flex mb-[65px]">
          {selectedTab === "Физическим лицам" && (
            <>
              <div>
                <SectionTitle
                  subtitle="По Москве"
                  showIndicator={false}
                  className="font-montserrat text-[18px] font-bold leading-[40px] mb-[10px]"
                />
                <p className="text-[16px] text-darkgrey max-w-[90%]">
                  Доставка в течении 1 дня после подтверждения заказа. Оплата может производиться как наличными курьеру, так и путем перечисления денежных средств на счет организации с банковского счета физ. лица или через кассу любого банка.
                </p>
              </div>
              <div className="max-w-[400px]">
                <SectionTitle
                  subtitle="В регионы"
                  showIndicator={false}
                  className="font-montserrat text-[18px] font-bold leading-[40px] mb-[10px]"
                />
                <p className="text-[16px] text-darkgrey">
                  Доставка через транспортные компании Деловые Линии, ПЭК, СДЭК в течении 2-7 дней с момента отправки. Возможна как адресная доставка, так и получение в пункте самовывоза в вашем городе.
                </p>
              </div>
            </>
          )}
          {selectedTab === "Юридическим лицам" && <p>Контент для юридических лиц.</p>}
          {selectedTab === "Бюджетным организациям" && <p>Контент для бюджетных организаций.</p>}
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
