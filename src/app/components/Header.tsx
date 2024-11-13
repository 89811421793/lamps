import React from 'react';
import Menu from './Menu';
import Container from './Container';
import Link from 'next/link';

const items = [
  { name: "О компании", href: "/about" },
  { name: "Услуги", href: "/services" },
  { name: "Проекты", href: "/projects" },
  { name: "Доставка и оплата", href: "/delivery" },
  { name: "Контакты", href: "/contacts" },
];


const Header: React.FC = () => {
  return (
    <header className="bg-[#0C0537] p-4">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logo-header.svg" alt="Логотип" className="h-10" />
            </a>
            <div className="ml-[84px]">
              <Menu menuItems={items} />
            </div>
            <div className="flex items-center ml-4">
              <Link href="/basket">
              <button className="flex items-center space-x-2 text-white">
                <span>Подборка</span>
                <img src="/fav.svg" alt="Избранное" className="h-10" />
              </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-[40px]">
            <button className="flex items-center space-x-2 text-white">
              <img src="/email.svg" alt="Email" className="h-5" />
              <span>info@i-lights.ru</span>
            </button>
            <button className="flex items-center space-x-2 border border-white text-white p-2">
              <img src="/phone.svg" alt="Телефон" className="h-5" />
              <span>+7 (495) 233 55 57</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;