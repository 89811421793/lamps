'use client';
import React, { useState } from 'react';
import Container from '../components/Container';
import Link from 'next/link';
import SectionTitle from '../components/SectionTitle';
import Steps from '../components/Steps'; 
import Button from '../components/Button'; 
import DeliveryTabs from '../components/DeliveryTabs.';


const tabs = [
  "Физическим лицам",
  "Юридическим лицам",
  "Бюджетным организациям",
];

const Delivery = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

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

       
        <DeliveryTabs tabs={tabs} selectedTab={selectedTab} onTabClick={handleTabClick} />

    
        <div className="mb-[65px]">
          {selectedTab === "Физическим лицам" && (
            <>
              <div className='flex'>
                <div className='max-w-[95%]'>
                  <SectionTitle
                    subtitle="По Москве"
                    showIndicator={false}
                    className="font-montserrat text-[18px] font-bold leading-[40px] mb-[10px]"
                  />
                  <p className="text-[16px] text-darkgrey max-w-[90%]">
                    Доставка в течении 1 дня после подтверждения заказа. Оплата может производиться как наличными курьеру, так и путем перечисления денежных средств на счет организации с банковского счета физ. лица или через кассу любого банка.
                  </p>
                </div>
                <div className="max-w-[445px]">
                  <SectionTitle
                    subtitle="В регионы"
                    showIndicator={false}
                    className="font-montserrat text-[18px] font-bold leading-[40px] mb-[10px]"
                  />
                  <p className="text-[16px] text-darkgrey">
                    Доставка через транспортные компании Деловые Линии, ПЭК, СДЭК в течении 2-7 дней с момента отправки. Возможна как адресная доставка, так и получение в пункте самовывоза в вашем городе.
                  </p>
                </div>
              </div> 
              <div className='flex mt-[5px] pt-[0]'>
                <Steps />
                <div className="max-w-[445px] ml-[45px] mt-[40px]"> 
                  <form>
                    <input 
                      type="text" 
                      placeholder="Ваше имя*" 
                      className="border-b border-[#C4C4C4] mb-[23px] w-full py-2 px-0 focus:outline-none" 
                      required
                    />
                    <input 
                      type="text" 
                      placeholder="Ваш телефон*" 
                      className="border-b border-[#C4C4C4] mb-[30px] w-full py-2 px-0 focus:outline-none" 
                      required
                    />
                    <div className="flex justify-end">
                      <Button text="Отправить" paddingX="px-[66px]" isLink={false} />
                    </div>
                  </form>
                </div>
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
