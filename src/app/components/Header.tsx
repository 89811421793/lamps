
import React from 'react';
import Menu from './Menu';

const items = [
  "О компании",
  "Услуги",
  "Проекты",
  "Доставка и оплата",
  "Контакты",
  "Подборка"
];


const Header: React.FC = () => {
  return (
    <header className="bg-[#0C0537] p-4 flex items-center justify-between">
      <div className="flex items-center">
      <img src="/logo-header.svg" alt="Логотип" className="h-10 mr-4" />
      <Menu menuItems={items} />
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-[#FFC94F] rounded-full p-2 flex items-center justify-center">
       
        </button>
        <a href="mailto:info@i-lights.ru" className="text-white flex items-center">
        
          info@i-lights.ru
        </a>
        <button className="border border-white text-white flex items-center p-2">
         
          +7 (495) 233 55 57
        </button>
      </div>
    </header>
  );
};

export default Header;