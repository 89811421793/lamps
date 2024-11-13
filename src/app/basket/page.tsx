import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
import Link from 'next/link';

const Basket = () => {
    return (
        <div>
           <Container>
        <nav className="text-[#7C7C7C] mt-[17px] mb-[38px]">
          <Link href="/" className="hover:text-gray-800">
            Главная
          </Link>
          <span className="mx-2">-</span>
          <Link href="/basket" className="hover:text-gray-800">
            Подборка
          </Link>
        </nav>
        <SectionTitle
          title="Подборка"
          showIndicator={false}
          className="mb-[40px]"
        />
      </Container>
        </div>
    );
};

export default Basket;