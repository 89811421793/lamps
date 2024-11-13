import React from 'react';
import Container from '../components/Container';
import Link from 'next/link';
import SectionTitle from '../components/SectionTitle';

const Delivery = () => {
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
      </Container>
        </div>
    );
};

export default Delivery;