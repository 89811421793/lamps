import React from 'react';
import Container from '../components/Container';
import Link from 'next/link';
import SectionTitle from '../components/SectionTitle';
import Steps from '../components/Steps'; 
import Button from '../components/Button'; 
import DeliveryTabs from '../components/DeliveryTabs.';


const fetchDeliveryContent = async () => {
  return {
    personal: {
      title: "Физическим лицам",
      regions: {
        moscow: {
          subtitle: "По Москве",
          description: "Доставка в течении 1 дня после подтверждения заказа. Оплата может производиться как наличными курьеру, так и путем перечисления денежных средств на счет организации с банковского счета физ. лица или через кассу любого банка."
        },
        regions: {
          subtitle: "В регионы",
          description: "Доставка через транспортные компании Деловые Линии, ПЭК, СДЭК в течении 2-7 дней с момента отправки. Возможна как адресная доставка, так и получение в пункте самовывоза в вашем городе."
        }
      }
    },
    legal: {
      title: "Юридическим лицам",
      description: "Контент для юридических лиц."
    },
    budget: {
      title: "Бюджетным организациям",
      description: "Контент для бюджетных организаций."
    }
  };
};

const Delivery = async () => {
  const deliveryContent = await fetchDeliveryContent();

  const tabs = [
    deliveryContent.personal.title,
    deliveryContent.legal.title,
    deliveryContent.budget.title,
  ];

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

        {/* Передаем данные в клиентский компонент */}
        <DeliveryTabs tabs={tabs} />

        <div className="mb-[65px]">
          {/* Здесь мы можем использовать условный рендеринг для отображения контента в зависимости от выбранной вкладки */}
          <div id="content">
            <div id="personal-content" className="tab-content">
              <div className='flex'>
                <div className='max-w-[95%]'>
                  <SectionTitle
                    subtitle={deliveryContent.personal.regions.moscow.subtitle}
                    showIndicator={false}
                    className="font-montserrat text-[18px] font-bold leading-[40px] mb-[10px]"
                  />
                  <p className="text-[16px] text-darkgrey max-w-[90%]">
                    {deliveryContent.personal.regions.moscow.description}
                  </p>
                </div>
                <div className="max-w-[445px]">
                  <SectionTitle
                    subtitle={deliveryContent.personal.regions.regions.subtitle}
                    showIndicator={false}
                    className="font-montserrat text-[18px] font-bold leading-[40px] mb-[10px]"
                  />
                  <p className="text-[16px] text-darkgrey">
                    {deliveryContent.personal.regions.regions.description}
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
            </div>
            <div id="legal-content" className="tab-content hidden">
              <p>{deliveryContent.legal.description}</p>
            </div>
            <div id="budget-content" className="tab-content hidden">
              <p>{deliveryContent.budget.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
