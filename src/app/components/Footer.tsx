// src/app/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3D4F64] text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Первая колонка */}
      <div className="flex flex-col items-start">
        <a href="/" className="flex flex-col items-start">
          <img src="/logo-footer.svg" alt="Логотип" className="mb-2" />
          <p>© Technolight 2015-2021</p>
        </a>
      </div>

        {/* Вторая колонка */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold mb-2">Каталог товаров</h3>
          <ul className="list-none space-y-1">
            <li><a href="#" className="hover:underline">Трековые светильники</a></li>
            <li><a href="#" className="hover:underline">Встраиваемые светильники</a></li>
            <li><a href="#" className="hover:underline">Профильные светильники</a></li>
            <li><a href="#" className="hover:underline">Фигурные светильники</a></li>
            <li><a href="#" className="hover:underline">Светильники Армстронг</a></li>
            <li><a href="#" className="hover:underline">Армстронг с равномерной засветкой</a></li>
            <li><a href="#" className="hover:underline">Производители</a></li>
          </ul>
        </div>

        {/* Третья колонка */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold mb-2">Как заказать</h3>
          <ul className="list-none space-y-1">
            <li><a href="#" className="hover:underline">Оплата</a></li>
            <li><a href="#" className="hover:underline">Доставка</a></li>
            <li><a href="#" className="hover:underline">Реквизиты компании</a></li>
            <li><a href="#" className="hover:underline">Правовая информация</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Четвертая колонка */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold mb-2">Контакты</h3>
          <ul className="list-none space-y-1">
            <li className="flex items-center">
              <a href="#" className="flex items-center">
                <img src="/pin.svg" alt="Местоположение" className="mr-2" />
                место магазина
              </a>
            </li>
            <li className="flex items-center">
              <a href="tel:+74952335557" className="flex items-center hover:underline">
                <img src="/phone.svg" alt="Телефон" className="mr-2" />
                +7 (495) 233 55 57
              </a>
            </li>
            <li className="flex items-center">
              <a href="mailto:info@i-lights.ru" className="flex items-center hover:underline">
                <img src="/email.svg" alt="Email" className="mr-2" />
                info@i-lights.ru
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;